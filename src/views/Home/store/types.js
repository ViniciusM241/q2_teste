import createTypes from "~/utils/createTypes";
import async from '~/utils/async';

export default createTypes('CUSTOMERS', [
  ...async('GET_CUSTOMERS'),
  ...async('GET_TOTAL_CUSTOMERS'),
]);
