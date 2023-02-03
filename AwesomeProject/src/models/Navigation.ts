import {StackNavigationProp} from '@react-navigation/stack';
import type {RouteProp} from '@react-navigation/native';

export type productScreenProp = StackNavigationProp<RootStackParamList>;

export type RootStackParamList = {
  Home: undefined;
  ProductInfo: {productID: number};
};

export type ProductInfoScreenRouteProp = RouteProp<
  RootStackParamList,
  'ProductInfo'
>;
