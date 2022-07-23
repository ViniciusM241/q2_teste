import { configureStore } from "@reduxjs/toolkit";
import axiosMiddleware from "redux-axios-middleware";
import reducers from './reducers';
import thunk from 'redux-thunk';
import client from './client';

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(thunk)
      .concat(axiosMiddleware(client))
});

export default store;
