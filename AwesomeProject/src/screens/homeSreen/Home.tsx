import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IProduct} from '@/models/IProduct';
import {productsData} from '@/constants/data';
import {styles} from './styles';
import {Colors} from '@/constants/colors';
import {useNavigation} from '@react-navigation/native';
import ProductCard from '@/components/ProductCard/ProductCard';
import {ProductScreenProp} from '@/screens/ProductInfoScreen/ProductInfo';

const Home = () => {
  const [products, setProducts] = useState<IProduct[] | []>([]);
  const [accessory, setAccessory] = useState<IProduct[] | []>([]);

  const navigation = useNavigation<ProductScreenProp>();

  useEffect(() => {
    getDataFromDB(productsData);
  }, []);

  const getDataFromDB = async (data: IProduct[]) => {
    let productsList = [];
    let accessoryList = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].category === 'product') {
        productsList.push(data[i]);
      } else {
        accessoryList.push(data[i]);
      }
    }
    setProducts(productsList);
    setAccessory(accessoryList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Icon name="shopping-bag" style={styles.shoppingBag} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Cart')}>
            <IconAntDesign name="shoppingcart" style={styles.shoppingBag} />
          </TouchableOpacity>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.shopTitle}>Loffi Shop &amp; Servise </Text>
          <Text style={styles.description}>
            Audio shop on Nemiga street. This shop offers both products and
            services{' '}
          </Text>
        </View>

        <View style={styles.productsCategoryWrapper}>
          <View style={styles.categoryLine}>
            <View style={styles.categoryWrapper}>
              <Text style={styles.category}>Products</Text>
              <Text style={styles.countItems}>41</Text>
            </View>
            <Text style={styles.textLink}> See all</Text>
          </View>
          <View style={styles.productsContainer}>
            {products.map(data => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>

        <View style={styles.productsCategoryWrapper}>
          <View style={styles.categoryLine}>
            <View style={styles.categoryWrapper}>
              <Text style={styles.category}>Accessories</Text>
              <Text style={styles.countItems}>78</Text>
            </View>
            <Text style={styles.textLink}> See all</Text>
          </View>
          <View style={styles.productsContainer}>
            {accessory.map(data => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
