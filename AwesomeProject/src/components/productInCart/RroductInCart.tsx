import {Image, Text, TouchableOpacity, View} from 'react-native';
import {IProduct} from '../../models/IProduct';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {productScreenProp} from '../../models/Navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CartStorage} from '../../models/CartStorage';
import {
  deleteItemFromStorage,
  updateItemInStorage,
} from '../../utils/deleteItemFromStorage';

type props = {
  product: IProduct;
  key: number;
  isUpdate: (value: boolean) => void;
};

const ProductInCard = React.memo(({product, isUpdate}: props) => {
  const navigation = useNavigation<productScreenProp>();
  const [counter, setCounter] = useState(0);
  console.log('update product');

  useEffect(() => {
    getStorageItem().then(counter => setCounter(counter));
  }, []);

  const getStorageItem = async (): Promise<number> => {
    const storageCartItem: string = await AsyncStorage.getItem('cartItem');
    const cartItem: CartStorage = JSON.parse(storageCartItem);

    return cartItem[product.id];
  };

  const removeItemFromCart = (id: number) => {
    deleteItemFromStorage(id).then(() => isUpdate(true));
  };

  const decreaseCounter = () => {
    let newCounter = 0;
    if (counter < 1) {
      setCounter(newCounter);
    } else {
      newCounter = counter - 1;
      setCounter(newCounter);
    }
    updateItemInStorage(product.id, newCounter).then(() => isUpdate(true));
  };

  const increaseCounter = () => {
    let newCounter = counter + 1;
    setCounter(newCounter);
    updateItemInStorage(product.id, newCounter).then(() => isUpdate(true));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.container1}
        onPress={() =>
          navigation.navigate('ProductInfo', {productID: product.id})
        }>
        <Image source={JSON.parse(product.productImage)} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.container2}>
        <View>
          <Text style={styles.text1}>{product.productName}</Text>
          <View style={styles.container3}>
            <Text style={styles.text2}>${product.productPrice}</Text>
            <Text>(${product.productPrice + product.productPrice / 20})</Text>
          </View>
        </View>
        <View style={styles.container4}>
          <View style={styles.container5}>
            <TouchableOpacity
              style={styles.iconCircle}
              onPress={decreaseCounter}>
              <MaterialCommunityIcons name="minus" style={styles.icon} />
            </TouchableOpacity>
            <Text>{counter}</Text>
            <TouchableOpacity
              style={styles.iconCircle}
              onPress={increaseCounter}>
              <MaterialCommunityIcons name="plus" style={styles.icon} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => removeItemFromCart(product.id)}>
            <MaterialCommunityIcons
              name="delete-outline"
              style={styles.deleteIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});

export default ProductInCard;
