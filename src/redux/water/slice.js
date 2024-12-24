import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTodayWaterRecords,
  updateWaterRecord,
  createWaterRecord,
  deleteWaterRecord,
  fetchDaysArray,
} from './operations';

const waterSlice = createSlice({
<<<<<<< update_info
  name: 'water',
=======
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
          state.dailyInfo = {
            ...state.dailyInfo,
            dailyNorm: action.payload.data.daylyNorm / 1000, // Преобразуем в литры
            updatedAt: action.payload.updatedAt,
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
          state.dailyInfo = {
            dailyNorm: action.payload.data.daylyNorm / 1000, // Преобразуем в литры
            percentageOfGoal: 0, // Дополнительная логика, если требуется
            updatedAt: action.payload.updatedAt,
          };
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
>>>>>>> main
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
        state.daysArray = action.payload;
      })
      .addCase(fetchDaysArray.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default waterSlice.reducer;
