import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import { userInfoReducer } from './user/slice';
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// Конфігурація persist для збереження токену
const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

// Створення персистованого ред'юсера
const persistedAuthReducer = persistReducer(persistConfig, authReducer);


const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    userInfo: userInfoReducer,
  },
});

export default store;
export const persistor = persistStore(store);