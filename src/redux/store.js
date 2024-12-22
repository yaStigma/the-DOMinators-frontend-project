import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import { userInfoReducer } from './user/slice';
import waterReducer from './water/slice';
import { loaderReducer } from './loader/slice';
import { ManthReduser } from './water/slice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'user'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    userInfo: userInfoReducer,
    water: waterReducer,
    manth: ManthReduser,
    loader: loaderReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
export const persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';
// import { authReducer } from './auth/slice';
// import { userInfoReducer } from './user/slice';
// import waterReducer from './water/slice';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['accessToken', 'user'],
// };

// const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authReducer),
//     userInfo: userInfoReducer,
//     water: waterReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   devTools: process.env.NODE_ENV === 'development',
// });

// export default store;
// export const persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';
// import { authReducer } from './auth/slice';
// import { userInfoReducer } from './user/slice';
// import storage from "redux-persist/lib/storage";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// // Конфігурація persist для збереження токену
// const authPersistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["accessToken", "user"],
// };

// const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authReducer),
//     userInfo: userInfoReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   devTools: process.env.NODE_ENV === "development",
// });

// export default store;
// export const persistor = persistStore(store);
