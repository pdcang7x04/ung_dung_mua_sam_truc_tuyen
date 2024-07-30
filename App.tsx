/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screen/Login';
import Register from './src/screen/Register';
import Home from './src/screen/Home';
import ProductDetails from './src/screen/ProductDetails';
import Search from './src/screen/Search';
import ListOfProducts from './src/screen/ListOfProducts';
import BottomNavigation from './src/screen/BottomNavigation';
import { Provider } from 'react-redux';
import store from './src/redux/Store';
import { SafeAreaView, View } from 'react-native';
import AppNavigation from './src/navifation/AppNavigation';


const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <AppNavigation/>
      </SafeAreaView>
    </Provider>
  );
}


export default App;
