export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.user.user;
export const selectToken = (state) => state.auth.accessToken
export const selectIsRefreshing = (state) => state.auth.isRefreshing;