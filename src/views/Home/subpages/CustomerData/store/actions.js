import types from "./types"

export function getCustomerById(id) {
  return async (dispatch) => {
    try {
      const data = await dispatch({
        type: types.GET_CUSTOMER,
        payload: {
          request: {
            url: `customers/${id}`,
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

export function setCustomer(customer) {
  return {
    type: types.SET_CUSTOMER,
    payload: {
      data: customer,
    },
  };
}
