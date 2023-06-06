import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
  isloading: false,
};

const URL = 'https://www.googleapis.com/books/v1/volumes?q=';
const apiKey = 'AIzaSyAkrEYBYl6xrkA2iD8hpooqC27MRhgkL8U';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (search) => {
    try {
      const response = await axios.get(`${URL}${search}&key=${apiKey}&maxResults=40`);
      return response.data.items;
    } catch (error) {
      return isRejectedWithValue(error.response.data.items);
    }
  },
);

const homeSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
        state.isloading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
        state.isloading = false;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default homeSlice.reducer;
