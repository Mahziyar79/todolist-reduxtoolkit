import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './addProducts/todoSlice'

export const store = configureStore({
  reducer: {todoSlice},
})