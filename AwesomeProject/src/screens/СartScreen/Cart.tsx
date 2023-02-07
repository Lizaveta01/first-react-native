import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IProduct} from '../../models/IProduct';
import ProductInCard from '../../components/ProductInCart/ProductInCart';
import BackToPage from '../../components/buttons/BackToPage';
import * as ProductService from '../../utils/productService';
import {StorageItems} from '../../constants/storageItems';
import {ProductScreenProp} from '../ProductInfoScreen/ProductInfo';

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
        <View style={styles.topLineContainer}>
          <BackToPage handler={navigation.goBack} />
          <Text style={styles.sreenName}>Order Details</Text>
        </View>
        <Text style={styles.cartTitle}>My Cart</Text>
        <View style={styles.productsContainer}>
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
          <View style={styles.orderOptionsContainer}>
            <Text style={styles.optionTitle}>Delivery Location</Text>
            <View style={styles.orderOptionsContainerInfo}>
              <View style={styles.infoOptionWrapper}>
                <View style={styles.buttonWrapper}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    style={styles.iconDelivery}
                  />
                </View>
                <View>
                  <Text style={styles.optionSubTitle}>2 Mira St.</Text>
                  <Text style={styles.oprtionDescription}>220036, Minsk</Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={styles.chevronRight}
              />
            </View>
          </View>
          <View style={styles.orderOptionsContainer}>
            <Text style={styles.optionTitle}>Payment Method</Text>
            <View style={styles.orderOptionsContainerInfo}>
              <View style={styles.infoOptionWrapper}>
                <View style={styles.buttonWrapper}>
                  <Text style={styles.textInIcon}>VISA</Text>
                </View>
                <View>
                  <Text style={styles.optionSubTitle}>Visa Classic</Text>
                  <Text style={styles.oprtionDescription}>****-9092</Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={styles.chevronRight}
              />
            </View>
          </View>
          <View style={styles.orderInfoWrapper}>
            <Text style={styles.orderTitle}>Order Info</Text>
            <View style={styles.subtotalTaxContainer}>
              <Text style={styles.totalTitle}>Subtotal</Text>
              <Text style={styles.totalSubtitle}>${total}.00</Text>
            </View>
            <View style={styles.totalTaxContainer}>
              <Text style={styles.totalTitle}>Shipping Tax</Text>
              <Text style={styles.totalSubtitle}>${total / 20}</Text>
            </View>
            <View style={styles.orderOptionsContainerInfo}>
              <Text style={styles.mainTotalPrice}>Total</Text>
              <Text style={styles.mainTotalPrice}>${total + total / 20}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonPositionWrapper}>
        <TouchableOpacity
          onPress={() => (total !== 0 ? checkOut() : null)}
          style={styles.wrapperButtonOrderText}>
          <Text style={styles.buttonOrderText}>
            CHECKOUT (${total + total / 20} )
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
