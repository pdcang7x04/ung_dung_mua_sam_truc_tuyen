import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../helpers/AxiosInstance";

export const loginAPI = createAsyncThunk(
    "/users/login",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosInstance().post("/users/login", data);
            console.log('>>>>> login response: ', response);
            const result = response.data;
            return result;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const registerAPI = createAsyncThunk(
    "/users/register",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosInstance().post("/users/register", data);
            console.log('>>>>> login response: ', response);
            const result = response.data;
            return result;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

