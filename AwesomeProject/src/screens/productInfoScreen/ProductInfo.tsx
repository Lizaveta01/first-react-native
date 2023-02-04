import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Animated,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  useWindowDimensions,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colours} from '../../constants/colours';
import {productsData} from '../../constants/data';
import {IProduct} from '../../models/IProduct';
import {
  ProductInfoScreenRouteProp,
  productScreenProp,
} from '../../models/Navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {CustomStatusBar} from '../../components/customStatusBar/CustomStatusBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addItemToStorage} from '../../utils/addItemToStorage';

type product = {
  item: string;
};

const ProductInfo = () => {
  const navigation = useNavigation<productScreenProp>();
  const route = useRoute<ProductInfoScreenRouteProp>();
  const {productID} = route.params;
  const [product, setProduct] = useState<IProduct | null>(null);
  const {width} = useWindowDimensions();
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });
    return unsubscribe;
  }, [navigation]);

  const getDataFromDB = async () => {
    const targetProduct = productsData.filter(item => item.id === productID);
    setProduct(targetProduct[0]);
  };

  const renderProduct = ({item}: product) => {
    return (
      <View style={[styles.productContainer, {width: width}]}>
        <Image source={JSON.parse(item)} style={styles.productImage} />
      </View>
    );
  };

  const addToCart = async () => {
    let storageCartItem: string = await AsyncStorage.getItem('cartItem');
    let cartItem: number[] | null = JSON.parse(storageCartItem);
    if (cartItem) {
      cartItem.push(productID);
      addItemToStorage(cartItem);
    } else {
      let cart: number[] = [];
      cart.push(productID);
      addItemToStorage(cart);
    }
  };

  return (
    <View style={styles.container}>
      <CustomStatusBar
        backgroundColor={Colours.BACKGROUND_LIGHT}
        barStyle="dark-content"
      />
      <ScrollView>
        <View style={styles.container1}>
          <View style={styles.container2}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.buttonContainer}>
              <Entypo name="chevron-left" style={styles.chevronLeft} />
            </TouchableOpacity>
          </View>

          <FlatList
            data={product?.productImageList ? product.productImageList : null}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.6}
            snapToInterval={width}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
          />

          <View style={styles.container3}>
            {product?.productImageList
              ? product.productImageList.map((data, index) => {
                  const opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: 'clamp',
                  });
                  return (
                    <Animated.View
                      key={index}
                      style={[
                        styles.animatedContainer,
                        {
                          opacity: opacity,
                        },
                      ]}
                    />
                  );
                })
              : null}
          </View>
        </View>
        <View style={styles.container4}>
          <View style={styles.container5}>
            <Entypo name="shopping-cart" style={styles.shoppingCart} />
            <Text style={styles.text1}>Shopping</Text>
          </View>
          <View style={styles.container6}>
            <Text style={styles.text2}>{product?.productName}</Text>
            <Ionicons name="link-outline" style={styles.linkOutline} />
          </View>
          <Text style={styles.text3}>{product?.description}</Text>
          <View style={styles.container7}>
            <View style={styles.container8}>
              <View style={styles.container9}>
                <Entypo name="location-pin" style={styles.locationPin} />
              </View>
              <Text> Nemiga 57-15,{'\n'} Minsk</Text>
            </View>
            <Entypo name="chevron-right" style={styles.chevronRight} />
          </View>
          <View style={styles.container10}>
            <Text style={styles.text4}>$ {product?.productPrice}.00</Text>
            <Text>
              Tax Rate 2%~ ${product?.productPrice! / 20} ($
              {product?.productPrice! + product?.productPrice! / 20})
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.container11}>
        <TouchableOpacity style={styles.container12} onPress={addToCart}>
          <Text style={styles.text5}>
            {product?.isAvailable ? 'Add to cart' : 'Not Avialable'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductInfo;
