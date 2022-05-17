function Builder(input) {
  // eslint-disable-next-line new-cap
  const object = typeof input === 'function' ? new input() : input;
  const result = {};
  const methods = {
    build: () => result,
  };
  Object.entries(object)
    .map(arr => ({ key: arr[0], value: arr[1] }))
    .filter(entry => typeof entry.value !== 'function')
    .map(entry => entry.key)
    .forEach(key => {
      methods[key] = value => {
        result[key] = value;
        return methods;
      };
    });
  return methods;
}

module.exports = Builder;
