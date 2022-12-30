import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../services/axios";
import { logout } from "./authSlice";

const initialState =  {
  products:[],
  status: 'idle',
  error: null
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers:{
    loading: (state) => {
      state.status = 'loading'
    },
    errorMessage: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
      console.log(action.payload);
    },
    success: (state) => {
      state.status = 'succeeded'
      state.error = null
    },
    setProducts: (state, action) => {
      return{
        ...state,
        products: action.payload,
        error: null,
        status: 'succeeded'
      }
    }
  },
  extraReducers(builder){
    builder
  //     .addCase(getProducts.pending, (state, action) => {
  //       state.status = 'loading'
  //     })
  //     .addCase(getProducts.fulfilled, (state, action) => {
  //       state.status = 'succeeded'
  //       state.products = action.payload
  //     })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
        console.log('ERROr', action.error);
      })
  //     .addCase(deleteProduct.rejected, (state, action) => {
  //       state.status = 'failed'
  //       state.error = action.error.message
  //       console.log('ERROr', action.error);
  //     })
  //     .addCase(addProduct.fulfilled, (state, action) => {
  //       console.log(action);
        
  //     })
  }
})

export const {loading, errorMessage, success, setProducts} = productsSlice.actions

export const getProducts = createAsyncThunk ('products/getProducts',
  async (_, {dispatch}) => {
    dispatch(loading());
    try {
      const response = await axiosInstance.get('/products');
      dispatch(setProducts(response.data))
    } catch (error) {
      // const {status, statusText} = error.response
      console.log(error.response);
      dispatch(errorMessage(error.response.data))
      dispatch(errorMessage(error.response.data))
      error.response.data.message === 'token invalid' && dispatch(logout())      
    }
  }
)
export const addProduct = createAsyncThunk('products/addProduct', async (productToAdd) => {
  const response = await axiosInstance.post('/products', productToAdd)
  return response.data
}); 
export const deleteProduct = createAsyncThunk('products/addProduct', async (id) => {
  const response = await axiosInstance.delete(`/products/${id}`)
  return response.data
}); 


export default productsSlice.reducer

// console.log(error.response.data);