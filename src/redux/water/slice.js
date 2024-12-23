import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTodayWaterRecords,
  updateWaterRecord,
  updateDailyNorma,
  createWaterRecord,
  fetchDailyNorma,
  deleteWaterRecord,
} from './operations';
import { fetchDaysArray } from './operations';

const waterSlice = createSlice({
    name: 'water',
    initialState: {
      records: [], 
      percentageOfGoal: 0,  
      loading: false,
      error: null,
    },
    extraReducers: (builder) => {
      builder
        .addCase(updateDailyNorma.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(updateDailyNorma.fulfilled, (state, action) => {
          state.loading = false;
        
          // Обновляем состояние на основе нового payload
          state.dailyInfo = {
            ...state.dailyInfo,
            dailyNorm: action.payload.amount / 1000,
            userId: action.payload.userId,          
            date: action.payload.date,              
          };
        })
        .addCase(updateDailyNorma.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(fetchDailyNorma.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchDailyNorma.fulfilled, (state, action) => {
          state.loading = false;
          if (!state.dailyInfo) {
            state.dailyInfo = action.payload; // Обновляем дневную норму из ответа
          } else {
            state.dailyInfo.dailyNorm = action.payload.dailyNorm;
            state.dailyInfo.percentageOfGoal = action.payload.percentageOfGoal;
          }
        })
        .addCase(fetchDailyNorma.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(createWaterRecord.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(createWaterRecord.fulfilled, (state, action) => {
            state.loading = false;
            state.records.push(action.payload); // Добавляем новую запись в список
          })
          .addCase(createWaterRecord.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
        .addCase(fetchTodayWaterRecords.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchTodayWaterRecords.fulfilled, (state, action) => {
            state.loading = false;
            state.records = action.payload.records; // Обновляем записи о воде
            state.percentageOfGoal = action.payload.percentageOfGoal; // Обновляем процент
          })
          .addCase(fetchTodayWaterRecords.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
        .addCase(updateWaterRecord.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(updateWaterRecord.fulfilled, (state, action) => {
          state.loading = false;
          const updatedIndex = state.records.findIndex(
            (record) => record._id === action.payload._id
          );
          if (updatedIndex !== -1) {
            state.records[updatedIndex] = action.payload; // Обновляем запись
            if (state.dailyInfo) {
              state.dailyInfo.percentageOfGoal = action.payload.percentageOfGoal; // Обновляем процент
            }
          }
        })
        .addCase(updateWaterRecord.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(deleteWaterRecord.pending, (state) => {
            state.isLoading = true;
          })
        .addCase(deleteWaterRecord.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            // Ищем запись по userId и date, если id отсутствует
            const index = state.records.findIndex(
              (record) =>
                record.userId === action.payload.userId &&
                record.date === action.payload.date
            );
            if (index !== -1) {
              state.records.splice(index, 1); // Удаляем запись из массива
            }
          })
        .addCase(deleteWaterRecord.rejected, (state, action) => {
        state.isLoading = false;
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

export const MonthReduser = daysSlice.reducer;
