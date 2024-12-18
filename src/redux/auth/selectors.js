export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.user.user;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;