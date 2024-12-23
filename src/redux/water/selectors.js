
export const selectDailyNorm = (state) => state.water.dailyNorm || 0;

export const selectWaterRate = state => state.auth.user.waterRate;
export const selectMonth = state => state.month.daysArray;
