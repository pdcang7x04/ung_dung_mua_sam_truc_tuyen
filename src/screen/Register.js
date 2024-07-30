import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/AppStyles'
import AppStatusbar from '../commons/AppStatusbar'
import AppTextInput from '../commons/AppTextInput'
import AppButton from '../commons/AppButton'
import AppButtonLogin from '../commons/AppButtonLogin'
import { useDispatch, useSelector } from 'react-redux'
import { registerAPI } from '../redux/UserAPI'


const useAppDispatcher = () => useDispatch();
const useAppSelector = useSelector;


const Register = (props) => {
    const { navigation } = props;
    const [Name, setName] = useState('Phạm Đình Cang');
    const [Email, setEmail] = useState('cang123@gmail.com');
    const [PhoneNumber, setPhoneNumber] = useState('0388038350');
    const [Password, setPassword] = useState('cang@123');
    const [Confirm, setConfirm] = useState('cang@123')
    const [ErrorMessage, setErrorMessage] = useState('');


    
    const dispatch = useAppDispatcher();
    const appState = useAppSelector((state) => state.authen);


    const handleRegister = () => {
        try {
            const body = {
                username: Name,
                email: Email,
                phoneNumber: PhoneNumber,
                password: Password,
                confirm: Confirm,
            }
            dispatch(registerAPI(body));
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <ScrollView style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <AppStatusbar
                    light={true}
                />

                <Image
                    source={require('../images/background_02.png')}
                    style={[styles.backgroundImage, { position: 'relative', marginTop: -210 }]}
                />

                <Text style={[styles.text30px, { position: 'absolute', marginTop: 200 }]}>Đăng ký</Text>
                <Text style={styles.text18px}>Tạo tài khoản</Text>


                <AppTextInput
                    value={Name}
                    onChangeText={value => setName(value)}
                    placeholder={'Họ tên'}
                    error={ErrorMessage}
                    styles={{
                        container: styles.containerTextInput,
                        border: styles.borderTextInput,
                        marginTop: styles.marginTop18px,
                        textInput: styles.textInput,
                        error: { ...styles.error, ...styles.text11px },
                    }}
                />

                <AppTextInput
                    value={Email}
                    onChangeText={value => setEmail(value)}
                    placeholder={'Email'}
                    error={ErrorMessage}
                    styles={{
                        container: styles.containerTextInput,
                        border: styles.borderTextInput,
                        marginTop: styles.marginTop10px,
                        textInput: styles.textInput,
                        error: { ...styles.error, ...styles.text11px },
                    }}
                />

                <AppTextInput
                    value={PhoneNumber}
                    onChangeText={value => setPhoneNumber(value)}
                    placeholder={'Số điện thoại'}
                    error={ErrorMessage}
                    styles={{
                        container: styles.containerTextInput,
                        border: styles.borderTextInput,
                        marginTop: styles.marginTop10px,
                        textInput: styles.textInput,
                        error: { ...styles.error, ...styles.text11px },
                    }}
                />

                <AppTextInput
                    value={Password}
                    onChangeText={value => setPassword(value)}
                    placeholder={'Mật khẩu'}
                    error={ErrorMessage}
                    styles={{
                        container: styles.containerTextInput,
                        border: styles.borderTextInput,
                        marginTop: styles.marginTop10px,
                        textInput: styles.textInput,
                        error: { ...styles.error, ...styles.text11px },
                    }}
                />

                <AppTextInput
                    value={Confirm}
                    onChangeText={value => setConfirm(value)}
                    placeholder={'Nhập lại mật khẩu'}
                    error={ErrorMessage}
                    styles={{
                        container: styles.containerTextInput,
                        border: styles.borderTextInput,
                        marginTop: styles.marginTop10px,
                        textInput: styles.textInput,
                        error: { ...styles.error, ...styles.text11px },
                    }}
                />



                <Text style={[styles.text11px, styles.marginTop18px, { width: 280, textAlign: 'center' }]}>
                    Để đăng ký tài khoản, bạn đăng ký
                    <Text style={styles.text11pxGreen}> Term & Condition </Text>
                    and
                    <Text style={styles.text11pxGreen}> Privacy Policy</Text>
                </Text>

                <AppButton
                    title={appState.loading ? 'Loading...' : 'Đăng ký'}
                    onClick={handleRegister}
                    styles={{
                        container: { ...styles.containerButtonLogin },
                        backgroundButton: { ...styles.backgroundButton },
                        textButton: { ...styles.text20White }
                    }}
                />

                <AppButtonLogin
                    iconGoogle={require('../images/icon_google.png')}
                    iconFacebook={require('../images/icon_facebook.png')}
                    text={'Tôi đã có tài khoản '}
                    textChild={'Đăng nhập'}
                    onPress={() => navigation.navigate('Login')}
                    styles={{
                        container: { ...styles.containerButtonLogin },
                        containerHorizontal: { ...styles.containerHorizontal },
                        line: { ...styles.line },
                        iconLogin: { ...styles.iconLogin, marginTop: 36, },
                        text: { ...styles.text11px, marginTop: 41 },
                        textChild: { ...styles.text11pxGreen },
                    }}
                />

            </View>
        </ScrollView>
    )
}

export default Register

