export default (name, types) => {
  return types.reduce((acc, type) => {
    return {
      ...acc,
      [type]: `${name}_${type}`,
    };
  }, {});
};
