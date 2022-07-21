import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import userSlice from './features/userSlice';
import reservationSlice from './features/reservationSlice';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({ 
  user: userSlice,
  reservation: reservationSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;