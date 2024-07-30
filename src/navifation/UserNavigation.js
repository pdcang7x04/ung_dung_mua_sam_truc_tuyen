import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../screen/Register';
import Login from '../screen/Login';


const Stack = createNativeStackNavigator();

const UserNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  )
}

export default UserNavigation

