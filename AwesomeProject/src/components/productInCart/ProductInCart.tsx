import {Image, Text, TouchableOpacity, View} from 'react-native';
import {IProduct} from '@/models/IProduct';
import React from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ProductScreenProp} from 'src/screens/ProductInfoScreen/ProductInfo';

type Props = {
  product: IProduct;
  key: number;
  removeItem: (value: number) => void;
  increaseItem: (value: number) => void;
  decreaseItem: (value: number) => void;
};

const ProductInCard = ({
  product,
  removeItem,
  increaseItem,
  decreaseItem,
}: Props) => {
  const navigation = useNavigation<ProductScreenProp>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() =>
          navigation.navigate('ProductInfo', {productID: product.id})
        }>
        <Image source={+product.productImage} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.name}>{product.productName}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${product.productPrice}</Text>
            <Text>(${product.productPrice + product.productPrice / 20})</Text>
          </View>
        </View>
        <View style={styles.toolsContainer}>
          <View style={styles.counerContainer}>
            <TouchableOpacity
              style={styles.iconCircle}
              onPress={() => decreaseItem(product.id)}>
              <MaterialCommunityIcons name="minus" style={styles.icon} />
            </TouchableOpacity>
            <Text>{product.counter}</Text>
            <TouchableOpacity
              style={styles.iconCircle}
              onPress={() => increaseItem(product.id)}>
              <MaterialCommunityIcons name="plus" style={styles.icon} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => removeItem(product.id)}>
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

export default React.memo(ProductInCard, areEqual);

function areEqual(prevProps: Props, nextProps: Props): boolean {
  if (
    prevProps.product.id === nextProps.product.id &&
    prevProps.product.counter === nextProps.product.counter &&
    prevProps.product.productImage === nextProps.product.productImage &&
    prevProps.product.productPrice === nextProps.product.productPrice &&
    prevProps.product.productName === nextProps.product.productName &&
    prevProps.removeItem === nextProps.removeItem &&
    prevProps.increaseItem === nextProps.increaseItem &&
    prevProps.decreaseItem === nextProps.decreaseItem
  ) {
    return true;
  } else {
    return false;
  }
}
