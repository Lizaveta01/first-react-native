import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {productScreenProp} from '../../models/Navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import {productsData} from '../../constants/data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IProduct} from '../../models/IProduct';
import ProductInCard from '../../components/productInCart/RroductInCart';

const Cart = () => {
  const navigation = useNavigation<productScreenProp>();
  const [product, setProduct] = useState<IProduct[] | []>([]);
  const [total, setTotal] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    setIsUpdate(false);
    getDataFromDB();
  }, [isUpdate]);

  const getDataFromDB = async () => {
    const storageCartItem: string = await AsyncStorage.getItem('cartItem');
    const cartItem: number[] | null = JSON.parse(storageCartItem);
    const productData: IProduct[] = [];
    console.log('items', cartItem);
    if (cartItem) {
      productsData.forEach(product => {
        if (cartItem.includes(product.id)) {
          productData.push(product);
        }
      });
      setProduct(productData);
      getTotal(product);
    }
  };

  const getTotal = (productData: IProduct[]) => {
    let totalValue = productData.reduce(
      (totalSum: number, products: IProduct) => {
        const sum = totalSum + products.productPrice;
        return sum;
      },
      0,
    );
    setTotal(totalValue);
  };

  const checkOut = async () => {
    try {
      await AsyncStorage.removeItem('cartItem');
    } catch (error) {
      return error;
    }

    ToastAndroid.show('Items will be Deliverd SOON!', ToastAndroid.SHORT);
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container1}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.buttonContainer}>
            <MaterialCommunityIcons
              name="chevron-left"
              style={styles.chevronLeft}
            />
          </TouchableOpacity>
          <Text style={styles.text1}>Order Details</Text>
        </View>
        <Text style={styles.text2}>My Cart</Text>
        <View style={styles.container2}>
          {product
            ? product.map(item => (
                <ProductInCard
                  product={item}
                  key={item.id}
                  isUpdate={value => setIsUpdate(value)}
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
          <View style={styles.container7}>
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
              <Text style={styles.text13}>Shipping Tax</Text>
              <Text style={styles.text14}>${total / 20}</Text>
            </View>
            <View style={styles.container14}>
              <Text style={styles.text15}>Total</Text>
              <Text style={styles.text16}>${total + total / 20}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.container15}>
        <TouchableOpacity
          onPress={() => (total !== 0 ? checkOut() : null)}
          style={styles.container16}>
          <Text style={styles.text17}>CHECKOUT (${total + total / 20} )</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
