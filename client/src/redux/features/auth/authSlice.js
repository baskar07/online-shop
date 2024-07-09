import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const getUserFromLocalStorage = localStorage.getItem('user')
 ? JSON.parse(localStorage.getItem('user'))
 : null;


const initialState ={
    user: getUserFromLocalStorage,
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:'',
    expiredAt:null,
};

export const signup = createAsyncThunk(
    "auth/signup",
    async(userData, thunkAPI)=>{
        try {
            return await authService.signup(userData);
        } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)  || error.message || error.toString();
            return  thunkAPI.rejectWithValue(message);
        }
    }
);

export const verifyOTP = createAsyncThunk(
    "auth/verify",
    async(data, thunkAPI)=>{
        try {
            return await authService.verify(data);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message)  || error.message || error.toString();
            return  thunkAPI.rejectWithValue(message);
        }
    }
)

export const resendOTP = createAsyncThunk(
    "auth/resendOTP",
    async(data, thunkAPI)=>{
        try {
            return await authService.resend(data)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message)  || error.message || error.toString();
            return  thunkAPI.rejectWithValue(message);
        }
    }
)


export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        Reset: (state) => {
           state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.expiredAt = null;
        },
        clearErrors: (state)=>{
            state.isSuccess = false;
            state.message = null;
        }
    },
    extraReducers:(builder) =>{
        builder
        .addCase(signup.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(signup.fulfilled, (state, action)=>{
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message;
            state.expiredAt = action.payload.otpExpires;
        })
        .addCase(signup.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(verifyOTP.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(verifyOTP.fulfilled, (state, action)=>{
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload
        })
        .addCase(verifyOTP.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(resendOTP.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(resendOTP.fulfilled, (state, action)=>{
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        })
        .addCase(resendOTP.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
});


export const { Reset, clearErrors } = authSlice.actions;
export default authSlice.reducer;