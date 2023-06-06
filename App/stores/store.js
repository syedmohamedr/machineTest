import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './action';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;