import types from "./types"

export function getCustomers(query) {
  return async (dispatch) => {
    try {
      const data = await dispatch({
        type: types.GET_CUSTOMERS,
        payload: {
          request: {
            url: `/customers?${query}`,
            method: 'GET',
          },
        },
      });

      console.log('payload', data);
    } catch(err) {
      console.log('err', err);
    }
  };
}

export function getTotalCustomers() {
  return async (dispatch) => {
    try {
      const data = await dispatch({
        type: types.GET_TOTAL_CUSTOMERS,
        payload: {
          request: {
            url: `/customers`,
            method: 'GET',
          },
        },
      });

      console.log('payload', data);
    } catch(err) {
      console.log('err', err);
    }
  };
}
