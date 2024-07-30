import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, registerAPI } from "./UserAPI";
import { builderLogin, builderRegister } from "./ExtraReducer_user";
import { builderProduct } from "./ExtraReducer_product";
import { getProduct } from "./ProductAPI";
import { builderCategory } from "./ExtraReducer_category";
import { getAllCategory } from "./CategoryAPI";
// Slice = action + reducer


const appSlice = createSlice({
    name: "authen",
    initialState: {
        loading: false,
        cart: [],
        user: null, // chưa login
        product: [],
        category: [],
    },
    reducers: {
        addItemToCart: (state, action) => {
            // kiểm tra giỏ hàng đã tồn tại sản phẩm chưa
            const index = state.cart
                .findIndex((item) => item._id.toString()
                    == action.payload._id.toString());
            if (index >= 0) {
                state.cart[index].quantity += action.payload.quantity;
            }
            else {
                state.cart.push(action.payload);
            }
        },
        removeItemFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item._id.toString() != action.payload._id.toString())
        },
        AscendingQuantity: (state, action) => {
            const index = state.cart
                .findIndex((item) => item._id.toString()
                    == action.payload._id.toString());
            if (state.cart[index].quantity < state.cart[index].stock){
                state.cart[index].quantity++;
            }else{
                return;
            }
        },
        DecreaseQuantity: (state, action) => {
            const index = state.cart
                .findIndex((item) => item._id.toString()
                    == action.payload._id.toString());
            if (state.cart[index].quantity > 1){
                state.cart[index].quantity--;
            }else{
                return;
            }
        },
        clearCart: (state, action) => {
            state.cart = [];
        }

    },
    extraReducers: (builder) => {
        builderLogin(builder);
        builderRegister(builder);
        builderProduct(builder);
        builderCategory(builder);
    },
});

// export { appSlice, loginAPI, registerAPI, getProduct, getAllCategory }

export const { addItemToCart, AscendingQuantity, DecreaseQuantity, removeItemFromCart, clearCart } = appSlice.actions;
export default appSlice.reducer;
