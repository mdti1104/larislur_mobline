import http from './http';

export default class Category {

  static getAllProducts() {
    return new Promise((resolve, reject) => {
      http.get('/connector/api/product?per_page=-1').then(({ data }) => {
        const products = data.data.map((item) => {
          const product = {
            name: item.name,
            id: item.id,
            sku: item.sku,
            images: item.images,
            desc: item.desc,
            quantity: item.quantity,
            sellingPrice: item.sellingPrice,
            purchasePrice: item.purchasePrice,
          }

          return product;
        });

        resolve({ data: products });
      }).catch(error => {
        reject(error);
      });
    });
  }

  static addProduct(body) {
    return new Promise((resolve, reject) => {
      http.post('/products', body).then(({ data }) => {
        const product = {
          name: data.name,
          id: data.variation_id,
          sku: data.sku,
          images: data.images,
          desc: data.desc,
          quantity: data.quantity,
          sellingPrice: data.sellingPrice,
          purchasePrice: data.purchasePrice,
        }
        if (data.category) {
          product.category = {
            code: data.category.code,
            name: data.category.name,
            image: data.category.image,
            id: data.category._id,
          }
        }
        resolve({ data: product });
      }).catch(error => {
        reject(error);
      });
    });
  }

  static deleteProduct(id) {
    return new Promise((resolve, reject) => {
      http.delete(`/products/${id}`).then(({ data }) => {
        resolve({ data });
      }).catch(error => {
        reject(error);
      });
    });
  }

  static editProduct(params) {
    return new Promise((resolve, reject) => {
      http.put(`/products/${params.id}`, params).then(({ data }) => {
        const product = {
          name: data.name,
          id: data._id,
          sku: data.sku,
          images: data.images,
          desc: data.desc,
          quantity: data.quantity,
          sellingPrice: data.sellingPrice,
          purchasePrice: data.purchasePrice,
        }
        if (data.category) {
          product.category = {
            code: data.category.code,
            name: data.category.name,
            image: data.category.image,
            id: data.category._id,
          }
        }
        resolve({ data: product });
      }).catch(error => {
        reject(error);
      });
    });
  }
}
