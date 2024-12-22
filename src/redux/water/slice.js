import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTodayWaterRecords,
  updateWaterRecord,
  updateDailyNorma,
  createWaterRecord,
  fetchDailyNorma,
} from './operations';
import { fetchDaysArray } from './operations';

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    waterRecords: [],
  },
  loading: false,
  error: null,
  extraReducers: builder => {
    builder
      .addCase(updateDailyNorma.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateDailyNorma.fulfilled, state => {
        state.loading = false;
      })
      .addCase(updateDailyNorma.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchDailyNorma.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDailyNorma.fulfilled, state => {
        state.loading = false;
      })
      .addCase(fetchDailyNorma.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createWaterRecord.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createWaterRecord.fulfilled, (state, action) => {
        state.loading = false;
        state.waterRecords.push(action.payload);
      })
      .addCase(createWaterRecord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchTodayWaterRecords.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodayWaterRecords.fulfilled, (state, action) => {
        state.loading = false;
        state.waterRecords = action.payload;
      })
      .addCase(fetchTodayWaterRecords.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateWaterRecord.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateWaterRecord.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateWaterRecord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default waterSlice.reducer;

const daysSlice = createSlice({
  name: 'days',
  initialState: {
    daysArray: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDaysArray.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDaysArray.fulfilled, (state, action) => {
        state.isLoading = false;
        state.daysArray = action.payload; // Записуємо отримані дані в стейт
      })
      .addCase(fetchDaysArray.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Переконуємось, що помилка правильно передається
      });
  },
});

export const ManthReduser = daysSlice.reducer;
