// what we are doing here is that we are getting Response.json() form fetchProducts.js, which is the data from the url, then we just destructuring it here and passing it into a local storage 


import { getStorageItem, setStorageItem } from './utils.js';
let store = getStorageItem('store');
console.log(store);
const setupStore = (products) => {
 store = products.map((product) => {
  const { id, fields: { featured, name, price, company, colors, image: img } } = product
  const image = img[0].thumbnails.large.url
  return { id, featured, name, price, company, colors, image }
 })
 setStorageItem('store', store)
};
const findProduct = (id) => { 
 let product = store.find((product)=>product.id === id)
 return product
};
export { store, setupStore, findProduct };
