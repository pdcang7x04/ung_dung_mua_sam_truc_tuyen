import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNavigation from '../screen/BottomNavigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from '../screen/ProductDetails';
import ListOfProducts from '../screen/ListOfProducts';
import Cart from '../screen/Cart';
import UserProfile2 from '../screen/UserProfile2';

const Stack = createNativeStackNavigator();

const MainNaviation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name='BottomNavigation' component={BottomNavigation} />
      <Stack.Screen name='ProductDetails' component={ProductDetails} />
      <Stack.Screen name='ListOfProducts' component={ListOfProducts} />
      <Stack.Screen name='Cart' component={Cart} />
      <Stack.Screen name='UserProfile2' component={UserProfile2} />
    </Stack.Navigator>
  )
}

export default MainNaviation

const styles = StyleSheet.create({})