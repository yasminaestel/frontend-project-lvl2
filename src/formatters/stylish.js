import stringify from '../stringify/stringifyForStylish.js';
import { getSpacesStylish, getBracketSpaces } from '../getSpaces.js';

const symbol = {
  unchanged: '  ',
  deleted: '- ',
  added: '+ ',
};

const stylish = (diff, level = 1) => {
  const linesArray = diff.map((infoObject) => {
    const buildLine = (value, status) => `${getSpacesStylish(level, 2)}${symbol[status]}${infoObject.key}: ${stringify(value, level + 1)}`;
    if (infoObject.status === 'hasValueObject') {
      const value = stylish(infoObject.value, level + 1);
      return buildLine(value, 'unchanged');
    }
    if (infoObject.status === 'unchanged') {
      return buildLine(infoObject.value, 'unchanged');
    }
    if (infoObject.status === 'changed') {
      const line1 = buildLine(infoObject.value1, 'deleted');
      const line2 = buildLine(infoObject.value2, 'added');
      const stringConcatenation = (`${line1}\n${line2}`);
      return stringConcatenation;
    }
    if (infoObject.status === 'deleted') {
      return buildLine(infoObject.value, 'deleted');
    }
    if (infoObject.status === 'added') {
      return buildLine(infoObject.value, 'added');
    }
    throw new Error('Unknown status');
  });

  const result = ['{', ...linesArray, `${getBracketSpaces(level)}}`].join('\n');
  return result;
};

export default stylish;
