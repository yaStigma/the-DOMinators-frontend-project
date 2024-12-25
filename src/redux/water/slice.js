import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTodayWaterRecords,
  updateWaterRecord,
  createWaterRecord,
  deleteWaterRecord,
  fetchDaysArray,
} from './operations';

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    waterRecords: [],
    recordsToday: [],
    daysArray: [],
    selectedMonthIndex: new Date().getMonth(),
    selectedYear: new Date().getFullYear(),
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(createWaterRecord.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createWaterRecord.fulfilled, (state, action) => {
        state.loading = false;
        state.waterRecords.push(action.payload); // Добавляем новую запись в массив
        state.daysArray = action.payload.daysArray;
      })
      .addCase(createWaterRecord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateWaterRecord.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateWaterRecord.fulfilled, (state, action) => {
        state.loading = false;
        const updatedRecord = action.payload;
        const index = state.waterRecords.findIndex(
          record => record._id === updatedRecord._id
        );
        if (index !== -1) {
          state.waterRecords[index] = updatedRecord;
        }
      })
      .addCase(updateWaterRecord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteWaterRecord.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteWaterRecord.fulfilled, (state, action) => {
        state.loading = false;
        const deletedId = action.meta.arg;
        state.waterRecords = state.waterRecords.filter(
          record => record._id !== deletedId
        );
      })
      .addCase(deleteWaterRecord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchTodayWaterRecords.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodayWaterRecords.fulfilled, (state, action) => {
        state.loading = false;
        state.recordsToday = action.payload.records;
      })
      .addCase(fetchTodayWaterRecords.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchDaysArray.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDaysArray.fulfilled, (state, action) => {
        state.loading = false;
        state.daysArray = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchDaysArray.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default waterSlice.reducer;
