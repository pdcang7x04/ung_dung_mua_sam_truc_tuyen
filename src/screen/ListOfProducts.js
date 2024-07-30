import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import styles from '../styles/AppStyles2'
import AppStatusbar from '../commons/AppStatusbar'
import AppHeader from '../commons/AppHeader'
import AppFlatViewCategory from '../commons/AppFlatViewCategory'
import ListProduct from '../commons/ListProduct'
import AppFlatViewProduct from '../commons/AppFlatViewProduct'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/ProductAPI'
import { getAllCategory } from '../redux/CategoryAPI'


const useAppDispatcher = () => useDispatch();
const useAppSelector = useSelector;

const ListOfProducts = (props) => {
    const {route} = props;
    const {params} = route;


    const dispatch = useAppDispatcher();
    const appState = useAppSelector((state) => state.authen);

    useEffect(() => {
        try {
            const page = 1;
            const limit = 20;
            dispatch(getProduct(page, limit))
        } catch (error) {
            console.log(error)
        }
        return () => {

        }
    }, [])

    const styleContainerHeader = () => {
        return {
            ...styles.containerHeader,
            ...styles.marginTop44,
            ...styles.containerHorizontal,

        }
    }

    const styleIconHeader = () => {
        return {
            ...styles.icon24,
            ...styles.marginHorizontal25
        }
    }

    const styleTextTitle = () => {
        return {
            ...styles.textSize16,
            ...styles.textColorBlack,
        }
    }

    return (
        <ScrollView style={{ ...styles.container }}>
            <View style={{ alignItems: 'center' }}>
                <AppStatusbar dark={true} />
                <AppHeader
                    iconLeft={require('../images/icon_back2.png')}
                    iconRight={require('../images/icon_cart.png')}
                    title={'Products'}
                    styles={{
                        container: styleContainerHeader(),
                        icon: styleIconHeader(),
                        title: styleTextTitle()
                    }}
                />
                <View style={{ marginStart: 20, height: 40 }}>
                    <FlatList
                        data={appState.category[0]}
                        keyExtractor={item => item._id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <AppFlatViewCategory item={item} />}
                    />
                </View>

                <FlatList
                    data={appState.product[0]}
                    key={item => item._id}
                    numColumns={2}
                    renderItem={({ item }) => <AppFlatViewProduct item={item} />}
                />

            </View>
        </ScrollView>
    )
}

export default ListOfProducts

const Category = [
    { id: 1, title: 'Sofa' },
    { id: 2, title: 'Sofa góc' },
    { id: 3, title: 'Sofa da' },
    { id: 4, title: 'Ghế thư giản' },
    { id: 5, title: 'Amchair' },
    { id: 6, title: 'Ghế dài & đôn' },
]