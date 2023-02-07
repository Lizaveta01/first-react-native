import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/HomeSreen/Home';
import Cart from './screens/СartScreen/Cart';
import ProductInfo from './screens/ProductInfoScreen/ProductInfo';

export type RootStackParamList = {
  Home: undefined;
  ProductInfo: {productID: number};
  Cart: undefined;
};

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
