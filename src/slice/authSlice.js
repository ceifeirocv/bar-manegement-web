import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../services/axios";


const initialState =  {
  user: null,
  status: 'idle',
  error: null
}

export const authSlice = createSlice ({
  name: 'auth',
  initialState,
  reducers: {
    loading: (state) => {
      console.log('LOADING');
      state.status = 'loading'
    },
    errorMessage: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
      console.log('ERROR', action.error)
    },
    success: (state, action) => {
      state.user = action.payload;
      state.status = 'succeeded'
      localStorage.setItem('user', JSON.stringify(action.payload));
      const AUTH_TOKEN = `Bearer ${action.payload.token}`
      axiosInstance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
      console.log(state.user);
    },
    setUser: (state, action) => {
      console.log('SETUSER TOKEN', action.payload.token);
      const AUTH_TOKEN = `Bearer ${action.payload.token}`
      axiosInstance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
      localStorage.removeItem('user')
    }
  },
  // extraReducers(builder){
  //   builder
  //   .addCase(createSession.pending, (state, action) => {
  //     console.log('LOADING');
  //     state.status = 'loading'
  //   })
  //   .addCase(createSession.rejected, (state, action) => {
  //     state.status = 'failed'
  //     state.error = action.error.message
  //     console.log('ERROR', action.error)
  //   })
  //   .addCase(createSession.fulfilled, (state, action) => {
  //     state.user = action.payload;
  //     localStorage.setItem('user', JSON.stringify(action.payload));
  //     console.log(state.user);
  //   })
  // }
})

export const {setUser, loading, errorMessage, success, logout} = authSlice.actions

export const createSession = createAsyncThunk ('auth/createSession', async (credentials, {dispatch}) => {
  console.log(credentials);
  dispatch(loading())
  try {
    const response = await axiosInstance.post('/sessions', credentials)
    dispatch(success(response.data))
  } catch (error) {
    console.log(error.response);
    
  }
})

export default authSlice.reducer