import { handleActions, combineActions } from "redux-actions";
import types from './types';

const INITIAL_STATE = {
  isLoading: false,
  customers: [],
  total: 0,
};

const beginLoading = combineActions(
  types.GET_CUSTOMERS,
  types.GET_TOTAL_CUSTOMERS,
);

const stopLoading = combineActions(
  types.GET_CUSTOMERS_SUCCESS,
  types.GET_CUSTOMERS_FAIL,
  types.GET_TOTAL_CUSTOMERS_SUCCESS,
  types.GET_TOTAL_CUSTOMERS_FAIL,
);

const reducer = handleActions(
  {
    [beginLoading]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [stopLoading]: (state) => ({
      ...state,
      isLoding: false,
    }),
    [types.GET_CUSTOMERS_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      customers: data,
    }),
    [types.GET_TOTAL_CUSTOMERS_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      total: data.length,
    }),
  },
  INITIAL_STATE
);

export default reducer;
