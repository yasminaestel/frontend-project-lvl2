import compareObject from './compareObject.js';
import formater from './formater.js';
import getFile from './getFile.js';

const genDiff = (filepath1, filepath2) => {
  const file1 = getFile(filepath1);
  const file2 = getFile(filepath2);
  const diff = compareObject(file1, file2);
  const stringResult = formater(diff);
  return stringResult;
};

export default genDiff;
