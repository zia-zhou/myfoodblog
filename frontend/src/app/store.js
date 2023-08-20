import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import postReducer from '../features/posts/postSlice'

//store holds slices
export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer
  },
});
