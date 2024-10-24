import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import userSlice from './userSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
