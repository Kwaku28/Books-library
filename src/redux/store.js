import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './home/homeSlice';

const store = configureStore({
  reducer: {
    books: homeReducer,
  },
});

export default store;
