function Builder(input) {
  // eslint-disable-next-line new-cap
  const object = typeof input === 'function' ? new input() : input;
  if (object.build !== undefined && typeof object.build !== 'function') {
    throw new Error(
      'word "build" reserved by Builder and could not be used as variable in object',
    );
  }
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
