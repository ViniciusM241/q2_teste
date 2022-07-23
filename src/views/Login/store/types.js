import createTypes from "~/utils/createTypes";
import async from "~/utils/async";

export default createTypes('LOGIN', [
  ...async('LOGIN'),
  ...async('GET_USER_BY_TOKEN'),
  'SET_USER',
]);
