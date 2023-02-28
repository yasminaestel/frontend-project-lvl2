import stringify from './stringify.js';

const spaces = (depth, shiftToTheLeft) => ' '.repeat(depth * 4 - shiftToTheLeft);
const bracketSpaces = (depth) => {
  const count = depth * 4 - 4;
  return ' '.repeat(count);
};
const symbol = {
  bothNoChange: '  ',
  onlyObject1: '- ',
  onlyObject2: '+ ',
};

const stylish = (diff, level = 1) => {
  const array = diff.map((infoObject) => {
    if (infoObject.status === 'hasValueObject') {
      const value = stylish(infoObject.value, level + 1);
      return (`${spaces(level, 2)}${symbol.bothNoChange}${infoObject.key}: ${stringify(value, level + 1)}`);
    }
    const value = stringify(infoObject.value, level + 1);
    if (infoObject.status === 'bothNoChange') {
      return (`${spaces(level, 2)}${symbol.bothNoChange}${infoObject.key}: ${value}`);
    }
    if (infoObject.status === 'bothChange') {
      const line1 = `${spaces(level, 2)}${symbol.onlyObject1}${infoObject.key}: ${stringify(infoObject.value1, level + 1)}`;
      const line2 = `${spaces(level, 2)}${symbol.onlyObject2}${infoObject.key}: ${stringify(infoObject.value2, level + 1)}`;
      const stringConcatenation = (`${line1}\n${line2}`);
      return stringConcatenation;
    }
    if (infoObject.status === 'onlyObject1') {
      return (`${spaces(level, 2)}${symbol.onlyObject1}${infoObject.key}: ${value}`);
    }
    if (infoObject.status === 'onlyObject2') {
      return (`${spaces(level, 2)}${symbol.onlyObject2}${infoObject.key}: ${value}`);
    }
    return ('error');
  });
  const result = ['{', ...array, `${bracketSpaces(level)}}`].join('\n');
  return result;
};

export default stylish;
