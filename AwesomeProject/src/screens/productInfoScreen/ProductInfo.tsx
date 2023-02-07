import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Animated,
  ScrollView,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '@/constants/colors';
import {productsData} from '@/constants/data';
import {IProduct} from '@/models/IProduct';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {CustomStatusBar} from '@/components/CustomStatusBar/CustomStatusBar';
import BackToPage from '@/components/buttons/BackToPage';
import * as ProductService from '@/utils/productService';
import {RootStackParamList} from '@/App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type ProductInfoScreenRouteProp = RouteProp<RootStackParamList, 'ProductInfo'>;
export type ProductScreenProp = NativeStackNavigationProp<RootStackParamList>;

type Product = {
  item: string;
};

const ProductInfo = () => {
  const navigation = useNavigation<ProductScreenProp>();
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

  const renderProduct = ({item}: Product) => {
    return (
      <View style={[styles.productContainer, {width: width}]}>
        <Image source={+item} style={styles.productImage} />
      </View>
    );
  };

  const addToCart = () => {
    product?.isAvailable ? ProductService.add(productID) : null;
  };

  return (
    <View style={styles.container}>
      <CustomStatusBar
        backgroundColor={Colors.BACKGROUND_LIGHT}
        barStyle="dark-content"
      />
      <ScrollView>
        <View style={styles.allContent}>
          <View style={styles.buttonWrapper}>
            <BackToPage handler={navigation.goBack} />
          </View>

          <Animated.FlatList
            data={product?.productImageList ? product.productImageList : null}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.6}
            snapToInterval={width}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: true},
            )}
          />

          <View style={styles.sliderContainer}>
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
        <View style={styles.infoAboutProduct}>
          <View style={styles.shoppingLabel}>
            <Entypo name="shopping-cart" style={styles.shoppingCart} />
            <Text style={styles.shoppingLabelText}>Shopping</Text>
          </View>
          <View style={styles.ProductNameWrapper}>
            <Text style={styles.productName}>{product?.productName}</Text>
            <Ionicons name="link-outline" style={styles.linkOutline} />
          </View>
          <Text style={styles.productDescription}>{product?.description}</Text>
          <View style={styles.locationContainer}>
            <View style={styles.pointLocation}>
              <View style={styles.locationButtonWrapper}>
                <Entypo name="location-pin" style={styles.locationPin} />
              </View>
              <Text> Nemiga 57-15,{'\n'} Minsk</Text>
            </View>
            <Entypo name="chevron-right" style={styles.chevronRight} />
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.textPrice}>$ {product?.productPrice}.00</Text>
            <Text>
              Tax Rate 2%~ ${product?.productPrice! / 20} ($
              {product?.productPrice! + product?.productPrice! / 20})
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.wrapperButtonAddToCart}>
        <TouchableOpacity style={styles.buttonAddToCart} onPress={addToCart}>
          <Text style={styles.status}>
            {product?.isAvailable ? 'Add to cart' : 'Not Avialable'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductInfo;
