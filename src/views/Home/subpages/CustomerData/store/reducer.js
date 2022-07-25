import { handleActions, combineActions } from "redux-actions";
import types from "./types";

const INITIAL_STATE = {
  isLoading: false,
  customer: {},
};

const beginLoading = combineActions(types.GET_CUSTOMER);

const stopLoading = combineActions(
  types.GET_CUSTOMER_SUCCESS,
  types.GET_CUSTOMER_FAIL,
);

const reducer = handleActions(
  {
    [beginLoading]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [stopLoading]: (state) => ({
      ...state,
      isLoading: false,
    }),
    [types.GET_CUSTOMER_SUCCESS]: (state, { payload: { data }}) => ({
      ...state,
      customer: data,
    }),
    [types.SET_CUSTOMER]: (state, { payload: { data }}) => ({
      ...state,
      customer: data,
    }),
  },
  INITIAL_STATE
);

export default reducer;
