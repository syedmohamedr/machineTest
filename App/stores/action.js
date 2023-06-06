import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
  return response.data;
});

const dataSlice = createSlice({
    name: 'data',
    initialState: {
      items: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchData.fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload;
        })
        .addCase(fetchData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default dataSlice.reducer;