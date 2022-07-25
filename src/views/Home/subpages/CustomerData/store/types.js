import createTypes from "~/utils/createTypes";
import async from "~/utils/async";

export default createTypes('CUSTOMER', [
  ...async('GET_CUSTOMER'),
  'SET_CUSTOMER',
]);
