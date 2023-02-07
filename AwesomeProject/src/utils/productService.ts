import AsyncStorage from '@react-native-async-storage/async-storage';
import {CartStorage} from '../models/CartStorage';
import {IProduct} from '../models/IProduct';
import {productsData} from '../constants/data';
import {StorageItems} from '../constants/storageItems';

const {CART_ITEMS} = StorageItems;

export const get = async (): Promise<IProduct[]> => {
  const storageCartItem: string = await AsyncStorage.getItem(CART_ITEMS);
  const cartItem: CartStorage = JSON.parse(storageCartItem);
  const productData: IProduct[] = [];
  if (cartItem) {
    productsData.forEach(product => {
      if (cartItem.hasOwnProperty(product.id)) {
        product.counter = cartItem[product.id];
        productData.push(product);
      }
    });
  }

  return productData;
};

export const add = async (productID: number) => {
  try {
    const storageCartItem: string = await AsyncStorage.getItem(CART_ITEMS);
    let cartItem: CartStorage = JSON.parse(storageCartItem);

    if (!cartItem) {
      cartItem = {};
    }
    if (cartItem[productID]) {
      cartItem[productID] += 1;
    } else {
      cartItem[productID] = 1;
    }

    await AsyncStorage.setItem(CART_ITEMS, JSON.stringify(cartItem));
  } catch (error) {
    return error;
  }
};

export const remove = async (productID: number) => {
  try {
    const storageCartItem: string = await AsyncStorage.getItem(CART_ITEMS);
    let cartItem: CartStorage = JSON.parse(storageCartItem);

    delete cartItem[productID];
    await AsyncStorage.setItem(CART_ITEMS, JSON.stringify(cartItem));
  } catch (error) {
    return error;
  }
};

export const update = async (products: IProduct[]) => {
  try {
    const obj: CartStorage = {};
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      obj[product.id] = product.counter!;
    }
    await AsyncStorage.setItem(CART_ITEMS, JSON.stringify(obj));
  } catch (error) {
    return error;
  }
};
