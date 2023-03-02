const stringifyToPlain = (value) => {
  if (typeof value === 'object' && value !== null) {
    return ('[complex value]');
  } if (typeof value === 'string') {
    return (`'${value}'`);
  }
  return value;
};

export default stringifyToPlain;
