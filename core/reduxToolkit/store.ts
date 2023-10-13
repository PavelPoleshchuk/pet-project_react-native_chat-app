import { configureStore } from '@reduxjs/toolkit';
import myReducer from './slices';

export const store = configureStore({
  reducer: {
    mySlice: myReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


