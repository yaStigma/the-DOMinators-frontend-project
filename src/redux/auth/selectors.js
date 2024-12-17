export const selectIsLoggedIn = (state) => state.user.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectIsRefreshing = (state) => state.user.isRefreshing;