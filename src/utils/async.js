export default (type) => {
  return [
    type,
    `${type}_SUCCESS`,
    `${type}_FAIL`
  ];
};
