import {ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CartStorage} from '../models/CartStorage';

export const deleteItemFromStorage = async (productID: number) => {
  const storageCartItem: string = await AsyncStorage.getItem('cartItem');
  let cartItem: CartStorage = JSON.parse(storageCartItem);

  delete cartItem[productID];

  try {
    await AsyncStorage.setItem('cartItem', JSON.stringify(cartItem));
    ToastAndroid.show('Item deleted from cart', ToastAndroid.SHORT);
  } catch (error) {
    return error;
  }
};
