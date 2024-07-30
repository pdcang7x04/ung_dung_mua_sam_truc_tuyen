import { configureStore, combineReducers } from '@reduxjs/toolkit';
import appReducer from './Reducer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

// khởi tạo rootReducer, kết hợp tất cả các reducer
const rootReducer = combineReducers({
    authen: appReducer,
});

// khởi tạo store, quản lý state
const store = configureStore({
    reducer: rootReducer,
});

export default store;




