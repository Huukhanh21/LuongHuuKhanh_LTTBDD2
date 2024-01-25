import React from 'react';
import { StyleSheet, View, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './componets/login/Login';
import Home from './componets/Home';
import Register from './componets/login/Register';
import Profile from './componets/profile/Profile';
import Order from './componets/favorite/Order';
import Cart from './componets/cart/Cart';
import Product from './componets/products/Product';
import ProductDetail from './componets/products/ProductDetail';
import Payment from './componets/payment/Payment';
import Succes from './componets/payment/Succes';
import WomenProduct from './componets/WomenProduct';
import ElectronicsProduct from './componets/ElectronicsProduct';
import MenProduct from './componets/MenProduct';
import JeweleryProduct from './componets/JeweleryProduct';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
   
      <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
         name="Home"
         component={Home}
         options={{ headerShown: false }}
        />
        <Stack.Screen
         name="Register"
         component={Register}
         options={{ headerShown: false }}
        />
        <Stack.Screen
         name="Profile"
         component={Profile}
         options={{ headerShown: false }}
        />
        <Stack.Screen
         name="Order"
         component={Order}
         options={{ headerShown: false }}
        />
         <Stack.Screen
         name="Cart"
         component={Cart}
         options={{ headerShown: false }}
        />
        <Stack.Screen
         name="Product"
         component={Product}
         options={{ headerShown: false }}
        />
        <Stack.Screen
         name="ProductDetail"
         component={ProductDetail}
         options={{ headerShown: false }}
        />

        <Stack.Screen
         name="Payment"
         component={Payment}
         options={{ headerShown: false }}
        />
          <Stack.Screen
         name="Succes"
         component={Succes}
         options={{ headerShown: false }}
        />

          <Stack.Screen name="MenProduct" component={MenProduct} options={{ headerShown: false }} />
          <Stack.Screen name="WomenProduct" component={WomenProduct} options={{ headerShown: false }} />
          <Stack.Screen name="ElectronicsProduct" component={ElectronicsProduct} options={{ headerShown: false }} />
          <Stack.Screen name="JeweleryProduct" component={JeweleryProduct} options={{ headerShown: false }} />

    </Stack.Navigator>
    
  
  </NavigationContainer>    
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },


});
