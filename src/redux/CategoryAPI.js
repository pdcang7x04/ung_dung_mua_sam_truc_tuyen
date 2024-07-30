import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../helpers/AxiosInstance";


export const getAllCategory = createAsyncThunk(
    "/categories/getAllCategory",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosInstance().get(`/categories/getAllCategory`);
            const result = response.data;
            return result;
        } catch (error) {
            return rejectWithValue(err.response.data);
        }
    }
)