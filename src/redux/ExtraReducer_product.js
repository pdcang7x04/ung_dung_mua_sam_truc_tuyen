import { getProduct, getProductName } from "./ProductAPI";


export const builderProduct = (builder) => {
    builder.addCase(getProduct.pending, (state) => {
        state.loading = true;
        console.log('>>>>> product.pending: ')
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false;
        console.log('>>>>> product.fulfilled: ', action.payload);
        state.product.push(action.payload);
    });
    builder.addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        console.log('>>>>> product.rejected: ', action.payload);
    });
}


export const builderProductName = (builder) => {
    builder.addCase(getProductName.pending, (state) => {
        state.loading = true;
        console.log('>>>>> product.pending: ')
    });
    builder.addCase(getProductName.fulfilled, (state, action) => {
        state.loading = false;
        console.log('>>>>> product.fulfilled: ', action.payload);
        state.product.push(action.payload);
    });
    builder.addCase(getProductName.rejected, (state, action) => {
        state.loading = false;
        console.log('>>>>> product.rejected: ', action.payload);
    });
}


