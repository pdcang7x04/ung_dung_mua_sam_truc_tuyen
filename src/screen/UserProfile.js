import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppUser from '../commons/AppUser'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/AppStyles2'
import AppInformation from '../commons/AppInformation'

const useAppDispatcher = () => useDispatch();
const useAppSelector = useSelector;


const UserProfile = (props) => {
  const {navigation} = props;

  const dispatch = useAppDispatcher();
  const appState = useAppSelector((state) => state.authen);

  console.log('name: ', appState.user.username)
  return (
    <View>
      <AppUser
        images={'https://i.pinimg.com/236x/06/bb/be/06bbbeceb0a4de2465ddb118b56d0723.jpg'}
        text1={appState.user.username}
        text2={appState.user.email}
        styles={{
          images: { ...styles.imagePruduct3, ...styles.borderRadius50 },
          horizontal: { ...styles.containerHorizontal4, ...styles.marginTop68, ...styles.margiLeft25 },
          text1: { ...styles.textSize16, ...styles.textColorBlack, ...styles.margiLeft25 },
          text2: { ...styles.textSize16, ...styles.textColorBlack, ...styles.margiLeft25 },
        }}
      />

      <AppInformation
        text1={'Chỉnh sửa thông tin'}
        onPress={() => navigation.navigate('UserProfile2')}
        styles={{
          container: {...styles.marginTop10, ...styles.margiLeft25},
          text1: {...styles.textSize16, ...styles.textColorBlack}
        }}
      />

    </View>
  )
}

export default UserProfile

