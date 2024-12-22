/*import { createSlice } from '@reduxjs/toolkit';
import { fetchDailyNorma, updateDailyNorma } from './operations';

const initialState = {
  dailyNorma: 2.0,  // Значение по умолчанию
  loading: false,
  error: null,
};

const dailyNormaSlice = createSlice({
  name: 'dailyNorma',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDailyNorma.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDailyNorma.fulfilled, (state, action) => {
        state.loading = false;
        state.dailyNorma = action.payload;
      })
      .addCase(fetchDailyNorma.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateDailyNorma.fulfilled, (state, action) => {
        state.dailyNorma = action.payload;
      });
  },
});

export default dailyNormaSlice.reducer;*/
