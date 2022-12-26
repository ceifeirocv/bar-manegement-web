import { configureStore } from "@reduxjs/toolkit";
import productsSlice from '../slice/productSlice'
import authSlice from "../slice/authSlice";

export default configureStore({
  reducer:{
    products: productsSlice,
    auth: authSlice
  }
})
