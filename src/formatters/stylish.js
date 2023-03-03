import stringify from '../stringify/stringifyForStylish.js';
import { getSpacesStylish, getBracketSpaces } from '../getSpaces.js';

const symbol = {
  bothNoChange: '  ',
  onlyObject1: '- ',
  onlyObject2: '+ ',
};

const stylish = (diff, level = 1) => {
  const linesArray = diff.map((infoObject) => {
    const buildLine = (value, status) => `${getSpacesStylish(level, 2)}${symbol[status]}${infoObject.key}: ${stringify(value, level + 1)}`;
    if (infoObject.status === 'hasValueObject') {
      const value = stylish(infoObject.value, level + 1);
      return buildLine(value, 'bothNoChange');
    }
    if (infoObject.status === 'bothNoChange') {
      return buildLine(infoObject.value, 'bothNoChange');
    }
    if (infoObject.status === 'bothChange') {
      const line1 = buildLine(infoObject.value1, 'onlyObject1');
      const line2 = buildLine(infoObject.value2, 'onlyObject2');
      const stringConcatenation = (`${line1}\n${line2}`);
      return stringConcatenation;
    }
    if (infoObject.status === 'onlyObject1') {
      return buildLine(infoObject.value, 'onlyObject1');
    }
    if (infoObject.status === 'onlyObject2') {
      return buildLine(infoObject.value, 'onlyObject2');
    }
    throw new Error('Unknown status');
  });

  const result = ['{', ...linesArray, `${getBracketSpaces(level)}}`].join('\n');
  return result;
};

export default stylish;
