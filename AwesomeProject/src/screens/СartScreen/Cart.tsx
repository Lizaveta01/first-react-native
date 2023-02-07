import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ProductScreenProp} from '../../models/Navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IProduct} from '../../models/IProduct';
import ProductInCard from '../../components/ProductInCart/ProductInCart';
import BackToPage from '../../components/buttons/BackToPage';
import * as ProductService from '../../utils/productService';
import {StorageItems} from '../../constants/storageItems';

const {CART_ITEMS} = StorageItems;

const Cart = () => {
  const navigation = useNavigation<ProductScreenProp>();
  const [products, setProducts] = useState<IProduct[] | []>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    ProductService.get().then(data => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    getTotal(products);
    ProductService.update(products);
  }, [products]);

  const handleRemoveItem = useCallback((id: number) => {
    setProducts(prevProducts => prevProducts.filter(item => item.id !== id));
  }, []);

  const handleIncreaseItem = useCallback((id: number) => {
    setProducts(prevProducts =>
      prevProducts.map(item => {
        const newItem = {
          ...item,
          counter: item.id === id ? item.counter! + 1 : item.counter,
        };
        return newItem;
      }),
    );
  }, []);

  const handleDecreaseItem = useCallback((id: number) => {
    setProducts(prevProducts =>
      prevProducts.map(item => {
        const newItem = {
          ...item,
          counter:
            item.id === id && item.counter !== 0
              ? item.counter! - 1
              : item.counter,
        };
        return newItem;
      }),
    );
  }, []);

  const getTotal = (productData: IProduct[]) => {
    let totalValue = productData.reduce(
      (totalSum: number, products: IProduct) =>
        totalSum + products.productPrice * products.counter!,
      0,
    );
    setTotal(totalValue);
  };

  const checkOut = async () => {
    try {
      await AsyncStorage.removeItem(CART_ITEMS);
    } catch (error) {
      return error;
    }
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container1}>
          <BackToPage handler={navigation.goBack} />
          <Text style={styles.text1}>Order Details</Text>
        </View>
        <Text style={styles.text2}>My Cart</Text>
        <View style={styles.container2}>
          {products
            ? products.map(item => (
                <ProductInCard
                  product={item}
                  key={item.id}
                  removeItem={handleRemoveItem}
                  increaseItem={handleIncreaseItem}
                  decreaseItem={handleDecreaseItem}
                />
              ))
            : null}
        </View>
        <View>
          <View style={styles.container3}>
            <Text style={styles.text3}>Delivery Location</Text>
            <View style={styles.container4}>
              <View style={styles.container5}>
                <View style={styles.container6}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    style={styles.iconDelivery}
                  />
                </View>
                <View>
                  <Text style={styles.text4}>2 Mira St.</Text>
                  <Text style={styles.text5}>220036, Minsk</Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={styles.chevronRight}
              />
            </View>
          </View>
          <View style={styles.container3}>
            <Text style={styles.text6}>Payment Method</Text>
            <View style={styles.container8}>
              <View style={styles.container9}>
                <View style={styles.container10}>
                  <Text style={styles.text7}>VISA</Text>
                </View>
                <View>
                  <Text style={styles.text8}>Visa Classic</Text>
                  <Text style={styles.text9}>****-9092</Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={styles.chevronRight}
              />
            </View>
          </View>
          <View style={styles.container11}>
            <Text style={styles.text10}>Order Info</Text>
            <View style={styles.container12}>
              <Text style={styles.text11}>Subtotal</Text>
              <Text style={styles.text12}>${total}.00</Text>
            </View>
            <View style={styles.container13}>
              <Text style={styles.text11}>Shipping Tax</Text>
              <Text style={styles.text12}>${total / 20}</Text>
            </View>
            <View style={styles.container4}>
              <Text style={styles.text11}>Total</Text>
              <Text style={styles.text13}>${total + total / 20}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.container15}>
        <TouchableOpacity
          onPress={() => (total !== 0 ? checkOut() : null)}
          style={styles.container16}>
          <Text style={styles.text14}>CHECKOUT (${total + total / 20} )</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
