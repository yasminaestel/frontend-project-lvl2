import compareObject from './compareObject.js';
import formater from './formater.js';
import parsers from './parsers.js';

const genDiff = (filepath1, filepath2) => {
  const file1 = parsers(filepath1);
  const file2 = parsers(filepath2);
  const diff = compareObject(file1, file2);
  const stringResult = formater(diff);
  return stringResult;
};

export default genDiff;
