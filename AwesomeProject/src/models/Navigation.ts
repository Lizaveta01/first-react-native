import {StackNavigationProp} from '@react-navigation/stack';

export type ProductScreenProp = StackNavigationProp<RootStackParamList>;

export type RootStackParamList = {
  Home: undefined;
  ProductInfo: {productID: number};
  Cart: undefined;
};
