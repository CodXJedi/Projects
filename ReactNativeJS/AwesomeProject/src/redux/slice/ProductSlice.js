import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  // const res = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772');
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  const final = await res.json();
  return final;
});
const Productslice = createSlice({
  name: 'product',
  initialState: {
    data: null,
    isLoader: false,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default Productslice.reducer;