import AsyncStorage from '@react-native-async-storage/async-storage';
import {CartStorage} from '../models/CartStorage';
import {IProduct} from '../models/IProduct';

export const updateStorage = async (products: IProduct[]) => {
  const obj: CartStorage = {};
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    obj[product.id] = product.counter!;
  }
  await AsyncStorage.setItem('cartItem', JSON.stringify(obj));
};
