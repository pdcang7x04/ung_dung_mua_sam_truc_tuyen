import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/AppStyles2'
import { AscendingQuantity, DecreaseQuantity, removeItemFromCart } from '../redux/Reducer';
import { useDispatch, useSelector } from 'react-redux'
const useAppDispatcher = () => useDispatch();
const useAppSelector = useSelector;

const AppProductFind = (props) => {
  const {item} = props;

  const dispatch = useAppDispatcher();
  const appState = useAppSelector((state) => state.authen);

  return (
    <View style={styleContainerProduct()}>
      <Image
        source={{ uri: item.images[0] }}
        style={styleImageProduct()}
      />

      <View style={{...styles.margiLeft25}}>
        <Text style={styletextProduct()}>{item.name} | {item.category.category_name}</Text>
        <Text style={styletextProduct()}>{item.price}</Text>
        <Text style={styletextProduct2()}>còn {item.stock} sp</Text>

      </View>
    </View>
  )
}

export default AppProductFind

const styleContainerProduct = () => {
  return{
      ...styles.container4,
      ...styles.containerheight77,
      ...styles.containerHorizontal4,
      ...styles.marginTop50,
  }
}

const styleImageProduct = () => {
  return {
      ...styles.imagePruduct3,
      ...styles.borderRadius8,
  }
}

const styletextProduct = () => {
  return {
      ...styles.textSize16,
      ...styles.textColorBlack
  }
}

const styletextProduct2 = () => {
  return {
      ...styles.textSize14,
      ...styles.textColorBlack,
      ...styles.marginHorizontal15,
  }
}

const stylesIconHeader = () => {
  return {
      ...styles.icon24,
  }
}




