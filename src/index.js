import readFile from './readFile.js';
import compareObject from './compareObject.js';
import formater from './formater.js';

const genDiff = (filepath1, filepath2) => {
  const file1 = JSON.parse(readFile(filepath1));
  const file2 = JSON.parse(readFile(filepath2));
  const diff = compareObject(file1, file2);
  const stringResult = formater(diff);
  return stringResult;
};

export default genDiff;
