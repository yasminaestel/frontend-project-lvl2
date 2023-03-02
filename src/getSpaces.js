const getSpacesStylish = (depth, shiftToTheLeft) => ' '.repeat(depth * 4 - shiftToTheLeft);

const getSpacesStringify = (depth) => ' '.repeat(depth * 4);

const getBracketSpaces = (depth) => {
  const count = depth * 4 - 4;
  return ' '.repeat(count);
};

export {
  getSpacesStylish,
  getSpacesStringify,
  getBracketSpaces,
};
