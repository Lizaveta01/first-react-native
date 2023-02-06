import {ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CartStorage} from '../models/CartStorage';
import { IProduct } from '../models/IProduct';

export const addItemToStorage = async (productID: number) => {
  const storageCartItem: string = await AsyncStorage.getItem('cartItem');
  let cartItem: CartStorage = JSON.parse(storageCartItem);

  if (!cartItem) {
    cartItem = {};
  }
  if (cartItem[productID]) {
    cartItem[productID] += 1;
  } else {
    cartItem[productID] = 1;
  }

  try {
    await AsyncStorage.setItem('cartItem', JSON.stringify(cartItem));
    ToastAndroid.show('Item Added Successfully to cart', ToastAndroid.SHORT);
  } catch (error) {
    return error;
  }
};


