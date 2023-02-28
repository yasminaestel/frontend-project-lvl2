const spaces = (depth) => ' '.repeat(depth * 4);
const bracketSpaces = (depth) => {
  const count = depth * 4 - 4;
  return ' '.repeat(count);
};

const stringify = (value, level) => {
  const iter = (data, depth) => {
    let result = '';
    if (typeof data !== 'object' || data === null) {
      result = (`${data}`);
      return result;
    }
    const entries = Object.entries(data);
    const array = entries.map(([key, meaning]) => (`${spaces(depth)}${key}: ${iter(meaning, depth + 1)}`));
    const countSpec = bracketSpaces(depth);
    result = ['{', ...array, `${countSpec}}`].join('\n');
    return result;
  };
  return iter(value, level);
};

export default stringify;
