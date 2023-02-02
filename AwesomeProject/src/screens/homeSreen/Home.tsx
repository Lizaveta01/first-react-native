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
import {IProduct} from '../../models/IProduct';
import {productsData} from '../../constants/data';
import ProductCard from '../../components/productCard/RroductCard';
import {styles} from './styles';
import {Colors} from '../../constants/colors';

const Home = () => {
  const [products, setProducts] = useState<IProduct[] | []>([]);
  const [accessory, setAccessory] = useState<IProduct[] | []>([]);

  useEffect(() => {
    getDataFromDB(productsData);
  }, []);

  const getDataFromDB = (data: IProduct[]) => {
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
          <TouchableOpacity>
            <View style={styles.buttonContainer}>
              <Icon name="shopping-bag" style={styles.shoppingBag} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.buttonContainer}>
              <IconAntDesign name="shoppingcart" style={styles.shoppingBag} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text}>Loffi Shop &amp; Servise </Text>
          <Text style={styles.description}>
            Audio shop on Nemiga street. This shop offers both products and
            services{' '}
          </Text>
        </View>

        <View style={styles.container1}>
          <View style={styles.container2}>
            <View style={styles.container3}>
              <Text style={styles.textStyle1}>Products</Text>
              <Text style={styles.textStyle2}>41</Text>
            </View>
            <Text style={styles.textStyle3}> See all</Text>
          </View>
          <View style={styles.productsContainer}>
            {products.map(data => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>

        <View style={styles.container1}>
          <View style={styles.container2}>
            <View style={styles.container3}>
              <Text style={styles.textStyle1}>Accessories</Text>
              <Text style={styles.textStyle2}>78</Text>
            </View>
            <Text style={styles.textStyle3}> See all</Text>
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
