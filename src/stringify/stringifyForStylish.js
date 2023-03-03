import { getSpacesStringify, getBracketSpaces } from '../getSpaces.js';

const stringifyForStylish = (value, level) => {
  const iter = (data, depth) => {
    if (typeof data !== 'object' || data === null) {
      return (`${data}`);
    }
    const entries = Object.entries(data);
    const array = entries.map(([key, meaning]) => (`${getSpacesStringify(depth)}${key}: ${iter(meaning, depth + 1)}`));
    const countSpec = getBracketSpaces(depth);
    return ['{', ...array, `${countSpec}}`].join('\n');
  };
  return iter(value, level);
};

export default stringifyForStylish;
