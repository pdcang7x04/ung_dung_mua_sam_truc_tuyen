import { Image, StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native'
import React from 'react'

const AppBanner = (props) => {
  const { styles, text, image, iconLeft, iconRight, onPress } = props;
  return (
    <ImageBackground style={styles.container}
      source={image}  
    >
      {
        iconLeft &&
        <Pressable>
          <Image
            source={iconLeft}
            style={styles.icon}
          />
        </Pressable>
      }

      {
      text && <Text style={styles.text} onPress={onPress}>Xem hàng mới về
        <Image
          source={require('../images/xemthem.png')}
          style={styles.icon}
        />
      </Text>
}
      {
        iconRight &&
        <Pressable>
          <Image
            source={iconRight}
            style={styles.icon}
          />
        </Pressable>
      }

    </ImageBackground>
  )
}

export default AppBanner

