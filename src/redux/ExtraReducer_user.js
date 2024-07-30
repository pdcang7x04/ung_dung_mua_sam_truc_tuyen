import { loginAPI, registerAPI } from "./UserAPI";

export const builderLogin = (builder) => {
    builder.addCase(loginAPI.pending, (state) => {
        state.loading = true;
        console.log('>>>>> login.pending: ')
    });
    builder.addCase(loginAPI.fulfilled, (state, action) => {
        state.loading = false;
        // state.error = null;
        console.log('>>>>> login.fulfilled: ', action.payload);
        state.user = action.payload;
    });
    builder.addCase(loginAPI.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.payload;
        console.log('>>>>> login.rejected: ', action.payload);
    });
}

export const builderRegister = (builder) => {
    builder.addCase(registerAPI.pending, (state) => {
        state.loading = true;
        console.log('>>>>> register.pending: ')
    });
    builder.addCase(registerAPI.fulfilled, (state, action) => {
        state.loading = false;
        // state.error = null;
        console.log('>>>>> register.fulfilled: ', action.payload);
        state.user = action.payload;
    });
    builder.addCase(registerAPI.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.payload;
        console.log('>>>>> register.rejected: ', action.payload);
    });
}