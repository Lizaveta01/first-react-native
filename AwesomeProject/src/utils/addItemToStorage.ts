import {ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const addItemToStorage = async (item: number[]) => {
  try {
    await AsyncStorage.setItem('cartItem', JSON.stringify(item));
    ToastAndroid.show('Item Added Successfully to cart', ToastAndroid.SHORT);
  } catch (error) {
    return error;
  }
};
