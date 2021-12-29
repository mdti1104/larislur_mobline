import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useDynamicStyleSheet, useDarkMode } from 'react-native-dark-mode';
import DropdownAlert from 'react-native-dropdownalert';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import TextInput from '@components/TextInput';
import { ActionCreators } from '@actions';
import { Constants, Utils } from '@common';
import I18n from '@common/I18n';
import { styles as dynamicStyles } from './style';

const { CLOSE_INTERVAL_ALERT_SUCCESS, CLOSE_INTERVAL_ALERT_ERROR } = Constants;

const radioButtons = [
  { label: 'Fixed', value: 'fixed' },
  { label: 'Percentage', value: 'percentage' }
];

const EditCoupon = (props) => {
  const { navigation } = props;
  const styles = useDynamicStyleSheet(dynamicStyles);
  const isDarkMode = useDarkMode();

  const [type, setType] = useState('fixed')
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [amount, setAmount] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const dropdownAlertRef = useRef("");
  const dispatch = useDispatch();
  const isOfflineMode = useSelector(state => state.settingReducers.isOfflineMode);
  const couponsReducers = useSelector(state => state.couponReducers.coupons);
  const currency = useSelector(state => state.settingReducers.currency);

  useEffect(() => {
    const coupon = navigation.getParam('data');
    setName(coupon.name);
    setCode(coupon.code);
    setAmount('' + coupon.amount);
    setType(coupon.type)
  }, [])

  useEffect(() => {
    if (isEditing) {
      if (couponsReducers.status === 'success') {
        setIsEditing(false);
        editCouponSuccess();
      }
      if (couponsReducers.status === 'error') {
        setIsEditing(false);
        editCouponFail();
      }
    }
  }, [couponsReducers]);

  editCouponSuccess = () => {
    dropdownAlertRef.current.alertWithType(
      'success',
      'Success',
      'Update coupon success.',
      {},
      CLOSE_INTERVAL_ALERT_SUCCESS,
    );
  };

  editCouponFail = () => {
    dropdownAlertRef.current.alertWithType(
      'error',
      'Error',
      couponsReducers.error,
      {},
      CLOSE_INTERVAL_ALERT_ERROR
    );
  };

  handleEditCoupon = () => {
    const { editCoupon, saveCouponEditing } = ActionCreators;
    try {
      if (validator.isEmpty(code.trim()) || validator.isEmpty(name.trim())) {
        throw 'Please input name and code of coupon.';
      }
      if (!validator.isEmpty(amount) && !validator.isNumeric(amount)) {
        throw 'Please input amount is number only.';
      }

      const coupon = navigation.getParam('data');
      setIsEditing(true);
      const params = {
        code: code.trim(),
        name: name.trim(),
        amount: Number(amount),
        type: type,
        id: coupon.id,
      }

      if (coupon.id.includes('local-')) {
        return dispatch(saveCouponEditing(params));
      }
      if (isOfflineMode) {
        return dispatch(saveCouponEditing({ ...params, status: 'editing' }));
      }

      dispatch(editCoupon(params));
    } catch (error) {
      dropdownAlertRef.current.alertWithType('error', 'Error', error, {}, CLOSE_INTERVAL_ALERT_ERROR);
      setIsEditing(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
          <Text style={styles.lbBack}>{I18n.t('editCoupon.back')}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{I18n.t('editCoupon.title')}</Text>
      </View>
      <KeyboardAwareScrollView
        enableResetScrollToCoords
        enableOnAndroid
      >
        <View style={styles.mainContainer}>
          <Text style={styles.inputLabel}>{I18n.t('editCoupon.name')}</Text>
          <TextInput
            placeholder="Coupon name"
            isDarkMode={isDarkMode}
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <Text style={styles.inputLabel}>{I18n.t('editCoupon.code')}</Text>
          <TextInput
            placeholder="0001MHG"
            isDarkMode={isDarkMode}
            value={code}
            onChangeText={(text) => setCode(text)}
          />

          <Text style={styles.inputLabel}>{I18n.t('editCoupon.type')}</Text>
          <View style={styles.radioBtnWrapper}>
            {radioButtons.map((item, index) => (
              <TouchableOpacity
                style={styles.btnRadio}
                key={index.toString()}
                onPress={() => setType(item.value)}
              >
                <Image
                  source={type === item.value
                    ? require('@assets/icons/ic_radio_full.png')
                    : require('@assets/icons/ic_radio_empty.png')
                  }
                  style={styles.icRadio}
                />
                <Text style={styles.labelRadioStyle}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.inputLabel}>{I18n.t('editCoupon.amount')}</Text>
          <TextInput
            placeholder={type === 'fixed' ? Utils.formatCurrency(10.0, currency) : "% 10"}
            isDarkMode={isDarkMode}
            value={amount}
            onChangeText={(text) => setAmount(text)}
          />
          <TouchableOpacity disabled={isEditing} style={styles.btnAddNew} onPress={handleEditCoupon}>
            {isEditing ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
                <Text style={styles.lbAddNew}>{I18n.t('editCoupon.saveCoupon')}</Text>
              )}
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      <DropdownAlert ref={dropdownAlertRef} updateStatusBar={false} />
    </View>
  );
}

export default EditCoupon;
