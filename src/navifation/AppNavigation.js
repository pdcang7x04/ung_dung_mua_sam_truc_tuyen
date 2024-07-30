import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import MainNaviation from './MainNaviation';
import UserNavigation from './UserNavigation';
const useAppSelector = useSelector;

const AppNavigation = () => {
    const appState = useAppSelector((state) => state.authen);
  return (
    <NavigationContainer>
        {
            appState.user ? <MainNaviation/> :
                <UserNavigation/>
        }
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})