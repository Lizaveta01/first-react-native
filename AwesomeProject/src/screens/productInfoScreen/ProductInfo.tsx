import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Animated,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Button,
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

const ProductInfo = () => {
  const navigation = useNavigation<productScreenProp>();
  const route = useRoute<ProductInfoScreenRouteProp>();
  const {productID} = route.params;
  const [product, setProduct] = useState<IProduct | null>(null);

  const width = Dimensions.get('window').width;

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

  //product horizontal scroll product card
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const renderProduct = ({item, index}: any) => {
    return (
      <View style={styles.productContainer}>
        <Image source={item} style={styles.productImage} />
      </View>
    );
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
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
          />

          <View style={styles.container3}>
            {product?.productImageList
              ? product.productImageList.map((data, index) => {
                  let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: 'clamp',
                  });
                  return (
                    <Animated.View
                      key={index}
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{
                        width: '16%',
                        height: 2.4,
                        backgroundColor: Colours.BLACK,
                        marginHorizontal: 4,
                        borderRadius: 100,
                        opacity,
                      }}
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
              <Text> Rustaveli Ave 57,{'\n'}17-001, Batume</Text>
            </View>
            <Entypo name="chevron-right" style={styles.chevronRight} />
          </View>
          <View style={styles.container10}>
            <Text style={styles.text4}>&#8377; {product?.productPrice}.00</Text>
            <Text>
              Tax Rate 2%~ ${product?.productPrice! / 20} ($
              {product?.productPrice! + product?.productPrice! / 20})
            </Text>
          </View>
        </View>

        <View style={styles.container11}>
          <TouchableOpacity style={styles.container12}>
            <Text style={styles.text5}>
              {product?.isAvailable ? 'Add to cart' : 'Not Avialable'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductInfo;
