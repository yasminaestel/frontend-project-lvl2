import { getSpacesStringify, getBracketSpaces } from '../getSpaces.js';

const stringifyForStylish = (value, level) => {
  const iter = (data, depth) => {
    let result = '';
    if (typeof data !== 'object' || data === null) {
      result = (`${data}`);
      return result;
    }
    const entries = Object.entries(data);
    const array = entries.map(([key, meaning]) => (`${getSpacesStringify(depth)}${key}: ${iter(meaning, depth + 1)}`));
    const countSpec = getBracketSpaces(depth);
    result = ['{', ...array, `${countSpec}}`].join('\n');
    return result;
  };
  return iter(value, level);
};

export default stringifyForStylish;
