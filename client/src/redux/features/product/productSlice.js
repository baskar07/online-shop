import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from './productService';


export const getAllProducts = createAsyncThunk(
    "products/getall",
    async(thunkAPI) =>{
        try {
            return await productService.getAllProducts();
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message)  || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const initialState = {
    products: [],
    filterProductCount:0,
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(getAllProducts.pending, (state)=>{
            state.isLoading  = true;
        })
        .addCase(getAllProducts.fulfilled, (state,action)=>{
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.products = action.payload.products;
            state.filterProductCount = action.payload.filterProductCount;
        })
    }
});

export default productSlice.reducer;