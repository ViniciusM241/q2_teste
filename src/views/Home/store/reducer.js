import { handleAction, combineActions } from "redux-actions";
import types from './types';

const INITIAL_STATE = {
  isLoading: false,
  customers: [],
};

const beginLoading = combineActions(types.GET_CUSTOMERS);

const stopLoading = combineActions(
  types.GET_CUSTOMERS_SUCCESS,
  types.GET_CUSTOMERS_FAIL,
);

const reducer = handleAction(
  {
    [beginLoading]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [stopLoading]: (state) => ({
      ...state,
      isLoding: false,
    }),
    [types.GET_CUSTOMERS]: (state, { payload: { data } }) => ({
      ...state,
      customers: data,
    }),
  },
  INITIAL_STATE
);

export default reducer;
