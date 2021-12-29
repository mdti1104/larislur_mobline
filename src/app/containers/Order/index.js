import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useDynamicStyleSheet } from 'react-native-dark-mode';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import { slice, get } from 'lodash';
import moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { ActionCreators } from '@actions';
import { Constants, Utils } from '@common';
import I18n from '@common/I18n';
import { styles as dynamicStyles } from './style';
import Modal from '@components/Modal';
import TextInput from '@components/TextInput';


const { NUMBER_ITEMS_PER_PAGE, MIN_LENGTH_SEARCH } = Constants;

const OrderItem = ({ styles, item, onPress, selected, currency }) => {
  return (
    <TouchableOpacity style={styles.order} onPress={onPress}>
      <Text style={[styles.lbOrderId, selected && styles.lbOrderIdActive]}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const renderTabBar = styles => (name, page, isTabActive, onPressHandler) => {
  return <TouchableOpacity
    style={{ flex: 1 }}
    key={name}
    onPress={() => onPressHandler(page)}
  >
    <View style={[styles.tab, isTabActive && styles.tabActiveStyle,]}>
      <Text style={[styles.tabBarText, isTabActive && styles.tabBarActiveText]}>
        {name}
      </Text>
    </View>
  </TouchableOpacity>;
}

const HistoryTab = ({
  styles,
  data,
  onPressItem,
  handleLoadMore,
  setDatePickerVisible,
  dateFilter,
  selectedItem,
  onChangeTextSearch,
  isLoading,
  currency,
}) => {
  return (
    <View style={styles.searchContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <OrderItem
            styles={styles}
            item={item}
            selected={item.id === selectedItem}
            currency={currency}
            onPress={() => onPressItem({ item })} />
        )}
        keyExtractor={(item) => item.id}
        onEndReached={handleLoadMore}
        extraData={selectedItem}
        ListFooterComponent={isLoading && (
          <View style={styles.icLoadingMore}><ActivityIndicator size="small" /></View>
        )}
      />
    </View>
  );
}
function PaymentRows(props) {
  const {styles,setVisibleLangModal,child} = props;

  return (
        
        <View>
           <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.inputLabel}>{I18n.t('addProducts.productName')}</Text>
            <TouchableOpacity
              style={styles.btnSelect}
              >
              <Text style={styles.selectValue}>{child.name}</Text>
              <Image source={require('@assets/icons/ic_arrow_right_black.png')} style={styles.icArrowRight} />
          </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <Text style={styles.inputLabel}>Payment Method*</Text>
            <TouchableOpacity
              style={styles.btnSelect}>
              <Text style={styles.selectValue}>Qris</Text>
              <Image source={require('@assets/icons/ic_arrow_right_black.png')} style={styles.icArrowRight} />
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <Text style={styles.inputLabel}>Bayar*</Text>
            <TouchableOpacity
              style={styles.btnPay}
              onPress={setVisibleLangModal}>
              <Text style={styles.lbpay}>Bayar</Text>
          </TouchableOpacity>
        </View>
     
        </View>
             
              </View>
      )
}
const RenderOrderDetail = ({ 
  styles,
  setVisibleLangModal,
  child,
}) => {

  return (
    <ScrollView style={styles.orderDetailContainer}>
      <Text style={styles.fieldLabel}>{I18n.t('order.customer')}</Text>
      <Text style={styles.fieldValue}>Audi</Text>
      <FlatList
              data={child}
              renderItem={({ item }) => (
                <PaymentRows key={item} styles={styles}setVisibleLangModal={setVisibleLangModal} child={item.product}/>
              )}
      />    
      
   
      <Text style={styles.fieldLabel}>{I18n.t('order.items')}</Text>
    
      <View style={styles.borderLine} />
     
   
    </ScrollView>
  );
}

const Order = (props) => {
  const { navigation } = props;

  const dataProduct = navigation.getParam('product');
  const styles = useDynamicStyleSheet(dynamicStyles);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [orderDetail, setOrderDetail] = useState(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [dateFilter, setDateFilter] = useState(null);
  const [textSearch, setTextSearch] = useState('');
  const [visibleLangModal, setVisibleLangModal] = useState(false);
  const ordersReducer = useSelector(state => state.orderReducers.orders);
  const allOrders = ordersReducer.result;
  const currency = useSelector(state => state.settingReducers.currency);

  const payment = [
    {
      id:1,
      name:"Qris",
    },
    
    {
      id:2,
      name:"Uang Tunai",
    },
    {
      id:3,
      name:"Split Bill",
    },
    {
      id:4,
      name:"Kredit / Debit",
    }
  ] 

  useEffect(() => {
    const { getAllOrders } = ActionCreators;
    if (allOrders.length === 0 && !ordersReducer.requesting) {
      dispatch(getAllOrders());
    }
  }, []);

  useEffect(() => {
    if (textSearch.length >= MIN_LENGTH_SEARCH || dateFilter) {
      search(dateFilter, textSearch);
    } else {
      initData();
    }
  }, [ordersReducer]);

  initData = () => {
    setPage(1);
    setData(payment);
    setOrderDetail(get(allOrders, '0'));
  }
  
  handleLoadMore = () => {
    const start = page * NUMBER_ITEMS_PER_PAGE;
    const end = (page + 1) * NUMBER_ITEMS_PER_PAGE;
    const dataPage = slice(allOrders, start, end);
    if (
      data.length === allOrders.length
      || isLoadingMore
      || textSearch.length >= MIN_LENGTH_SEARCH
      || dateFilter
    ) return;

    setIsLoadingMore(true);
    setPage(page + 1);
    setData([...data, ...dataPage]);
    setTimeout(() => setIsLoadingMore(false), 2000);
  }

  handleConfirmDatePicker = (date) => {
    setDatePickerVisible(false);
    setDateFilter(date);
    search(date, textSearch);
  }

  handleCancelDatePicker = () => {
    setDatePickerVisible(false);
    if (dateFilter) {
      search(null, textSearch);
      setDateFilter(null);
    }
  }

  onChangeSearch = (text = '') => {
    setTextSearch(text.trim());
    search(dateFilter, text.trim());
  }

  search = (date, text) => {
    let result = allOrders;
    if (date) {
      result = allOrders.filter((item) => moment(item.createdAt).isSame(moment(date), 'day'));
    }
    if (text.length > 1) {
      result = result.filter(item =>
        Utils.searchObject(
          item,
          ['customer.name', 'customer.email', 'customer.address', 'number'],
          text
        )
      );
    }
    if (!date && text.length < MIN_LENGTH_SEARCH) {
      initData();
    }
    setData(result);
    setOrderDetail(get(result, '0'));
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
      <HistoryTab
            data={data}
            styles={styles}
            tabLabel={I18n.t("order.history")}
            onPressItem={({ item }) => setOrderDetail(item)}
            handleLoadMore={handleLoadMore}
            setDatePickerVisible={() => setDatePickerVisible(true)}
            dateFilter={dateFilter}
            selectedItem={orderDetail && orderDetail.id}
            onChangeTextSearch={onChangeSearch}
            isLoading={isLoadingMore || ordersReducer.requesting}
            currency={currency}
          />
      </View>
      <View style={styles.rightContainer}>
        {orderDetail && 
          <RenderOrderDetail
            styles={styles}
            isLoadingMore = {isLoadingMore}
            child={dataProduct.items}
          />
        }
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmDatePicker}
        onCancel={handleCancelDatePicker}
      />
      <Modal
        visible={visibleLangModal}
        onRequestClose={() => setVisibleLangModal(false)}
        isDarkMode={false}
        modalStyle={styles.modalStyle}
        title="Qris Form"
      >
        <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.inputLabel}>Refrence Number</Text>
              <TextInput
                isDarkMode={false}
                placeholder="Refrence Number"
              />
          </View>                    
      </View>
      </Modal>
    </View >
  );
}

export default Order;
