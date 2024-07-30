import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppUser = (props) => {
    const {styles, images, text1, text2} = props;
  return (
    <View style={styles.horizontal}>
      <Image
        source={{uri: images}}
        style={styles.images}/>

        <View>
            <Text style={styles.text1}>{text1} </Text>
            <Text style={styles.text1}>{text2} </Text>
        </View>
    </View>
  )
}

export default AppUser

const styles = StyleSheet.create({})