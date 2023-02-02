import {Image, Text, TouchableOpacity, View} from 'react-native';
import {IProduct} from '../../models/IProduct';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';

type props = {
  data: IProduct;
  key: number;
};

const ProductCard = ({data}: props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.productContainer}>
        {data.isOff ? (
          <View style={styles.productAvailable}>
            <Text style={styles.offPercentag}>{data.offPercentage}%</Text>
          </View>
        ) : null}
        <Image
          source={JSON.parse(data.productImage)}
          style={styles.productImage}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{data.productName}</Text>
        {data.category === 'accessory' ? (
          data.isAvailable ? (
            <View style={styles.containerStatusAccessory}>
              <FontAwesome
                name="circle"
                style={styles.circleAvailableAccessory}
              />
              <Text style={styles.textAvailableAccessory}>Available</Text>
            </View>
          ) : (
            <View style={styles.containerStatusAccessory}>
              <FontAwesome
                name="circle"
                style={styles.circleUnvailableAccessory}
              />
              <Text style={styles.textUnvailableAccessory}>Unavailable</Text>
            </View>
          )
        ) : null}
        <Text>${data.productPrice}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
