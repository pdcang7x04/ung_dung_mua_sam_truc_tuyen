import { getAllCategory } from "./CategoryAPI";


export const builderCategory = (builder) => {
    builder.addCase(getAllCategory.pending, (state) => {
        state.loading = true;
        console.log('>>>>> product.pending: ')
    });
    builder.addCase(getAllCategory.fulfilled, (state, action) => {
        state.loading = false;
        console.log('>>>>> product.fulfilled: ', action.payload);
        state.category.push(action.payload);
    });
    builder.addCase(getAllCategory.rejected, (state, action) => {
        state.loading = false;
        console.log('>>>>> product.rejected: ', action.payload);
    });
}

