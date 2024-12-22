export const selectIsLoggedIn = state => state.user.isLoggedIn;

export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.accessToken
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectWaterRate = state => state.auth.user.waterRate;