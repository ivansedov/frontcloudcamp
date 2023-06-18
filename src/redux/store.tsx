import { combineReducers, configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/formSlice';
import { cloudAPI } from '../services/api';

const rootReducer = combineReducers({
  form: formReducer,
  [cloudAPI.reducerPath]: cloudAPI.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cloudAPI.middleware),
});

export default store;
