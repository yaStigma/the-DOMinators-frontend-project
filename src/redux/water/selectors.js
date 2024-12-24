// export const selectDailyNorm = state => state.water.dailyNorm || 0;

// export const selectWaterRate = state => state.auth.user.waterRate;
export const selectWaterRecords = state => state.water.waterRecords;
export const selectTodayRecords = state => state.water.recordsToday;
export const selectDaysArray = state => state.water.daysArray;
export const selectIsLoading = state => state.water.loading;
export const selectSelectedMonthIndex = state => state.water.selectedMonthIndex;
export const selectSelectedYear = state => state.water.selectedYear;
export const selectError = state => state.water.error;
