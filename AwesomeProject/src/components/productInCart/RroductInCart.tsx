import {Image, Text, TouchableOpacity, View} from 'react-native';
import {IProduct} from '../../models/IProduct';
import React, {useState} from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {productScreenProp} from '../../models/Navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

type props = {
  product: IProduct;
  key: number;
  isUpdate: (value: boolean) => void;
};

const ProductInCard = ({product, isUpdate}: props) => {
  const navigation = useNavigation<productScreenProp>();
  const [counter, setCounter] = useState(1);

  const removeItemFromCart = async (id: number) => {
    const storageCartItem: string = await AsyncStorage.getItem('cartItem');
    const cartItem: number[] | null = JSON.parse(storageCartItem);
    if (cartItem) {
      for (let index = 0; index < cartItem.length; index++) {
        if (cartItem[index] === id) {
          cartItem.splice(index, 1);
        }

        await AsyncStorage.setItem('cartItem', JSON.stringify(cartItem));
        isUpdate(true);
      }
    }
  };
  const decreaseCounter = () => {
    if (counter) {
      setCounter(counter => counter - 1);
    }
  };
  const increaseCounter = () => {
    setCounter(counter => counter + 1);
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
              style={styles.container6}
              onPress={decreaseCounter}>
              <MaterialCommunityIcons name="minus" style={styles.icon} />
            </TouchableOpacity>
            <Text>{counter}</Text>
            <TouchableOpacity style={styles.container7}>
              <MaterialCommunityIcons
                name="plus"
                style={styles.icon}
                onPress={increaseCounter}
              />
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
};

export default ProductInCard;
