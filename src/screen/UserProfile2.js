import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/AppStyles2'
import { useDispatch, useSelector } from 'react-redux'
import AppTextInput from '../commons/AppTextInput';


const useAppDispatcher = () => useDispatch();
const useAppSelector = useSelector;


const UserProfile2 = () => {

    const dispatch = useAppDispatcher();
    const appState = useAppSelector((state) => state.authen);

    const [Username, setUsername] = useState(appState.user.username);
    const [Email, setEmail] = useState(appState.user.email);
    const [PhoneNumber, setPhoneNumber] = useState('0'+appState.user.phoneNumber);
    console.log(appState.user)
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={{ uri: 'https://i.pinimg.com/236x/06/bb/be/06bbbeceb0a4de2465ddb118b56d0723.jpg' }}
                style={[{ width: 100, height: 100, borderRadius: 50, marginTop: 50 }]} />


            <AppTextInput
                value={Username}
                onChangeText={value => setUsername(value)}
                styles={{
                    container: styleInput(),
                    textInput: styleTextInput(),
                }}
            />
            <AppTextInput
                value={Email}
                onChangeText={value => setEmail(value)}
                styles={{
                    container: styleInput(),
                    textInput: styleTextInput(),
                }}
            />
            <AppTextInput
                value={PhoneNumber}
                onChangeText={value => setPhoneNumber(value)}
                styles={{
                    container: styleInput(),
                    textInput: styleTextInput(),
                }}
            />

        </View>
    )
}

export default UserProfile2

const styleInput = () => {
    return {
        ...styles.container4,
        ...styles.containerHeight40,
        ...styles.containerHorizontal2,
        ...styles.borderWidthBottom,

    }
}

const styleTextInput = () => {
    return {
        ...styles.textSize16,
        ...styles.textColorBlack,
    }
}
