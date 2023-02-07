import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type ProductScreenProp = NativeStackNavigationProp<RootStackParamList>;

export type RootStackParamList = {
  Home: undefined;
  ProductInfo: {productID: number};
  Cart: undefined;
};
