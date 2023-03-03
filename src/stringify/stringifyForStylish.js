import { getSpacesStringify, getBracketSpaces } from '../getSpaces.js';

const stringifyForStylish = (value, level) => {
  if (typeof value !== 'object' || value === null) {
    return (`${value}`);
  }
  const entries = Object.entries(value);
  const arrayStr = entries.map(([key, meaning]) => (`${getSpacesStringify(level)}${key}: ${stringifyForStylish(meaning, level + 1)}`));
  const countSpec = getBracketSpaces(level);
  return ['{', ...arrayStr, `${countSpec}}`].join('\n');
};

export default stringifyForStylish;
