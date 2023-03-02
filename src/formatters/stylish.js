import stringify from '../stringify/stringifyToStylish.js';
import { getSpacesStylish, getBracketSpaces } from '../getSpaces.js';

const symbol = {
  bothNoChange: '  ',
  onlyObject1: '- ',
  onlyObject2: '+ ',
};

const stylish = (diff, level = 1) => {
  const array = diff.map((infoObject) => {
    if (infoObject.status === 'hasValueObject') {
      const value = stylish(infoObject.value, level + 1);
      return (`${getSpacesStylish(level, 2)}${symbol.bothNoChange}${infoObject.key}: ${stringify(value, level + 1)}`);
    }
    const value = stringify(infoObject.value, level + 1);
    if (infoObject.status === 'bothNoChange') {
      return (`${getSpacesStylish(level, 2)}${symbol.bothNoChange}${infoObject.key}: ${value}`);
    }
    if (infoObject.status === 'bothChange') {
      const line1 = `${getSpacesStylish(level, 2)}${symbol.onlyObject1}${infoObject.key}: ${stringify(infoObject.value1, level + 1)}`;
      const line2 = `${getSpacesStylish(level, 2)}${symbol.onlyObject2}${infoObject.key}: ${stringify(infoObject.value2, level + 1)}`;
      const stringConcatenation = (`${line1}\n${line2}`);
      return stringConcatenation;
    }
    if (infoObject.status === 'onlyObject1') {
      return (`${getSpacesStylish(level, 2)}${symbol.onlyObject1}${infoObject.key}: ${value}`);
    }
    if (infoObject.status === 'onlyObject2') {
      return (`${getSpacesStylish(level, 2)}${symbol.onlyObject2}${infoObject.key}: ${value}`);
    }
    return ('error');
  });
  const result = ['{', ...array, `${getBracketSpaces(level)}}`].join('\n');
  return result;
};

export default stylish;
