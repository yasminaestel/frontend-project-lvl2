import compareObject from './compareObject.js';
import parse from './parse.js';
import readFile from './readFile.js';
import stylish from './stylish.js';

const genDiff = (filepath1, filepath2, formater = stylish) => {
  const dataFile1 = readFile(filepath1);
  const dataFile2 = readFile(filepath2);
  const extentionFile1 = filepath1.split('.').pop().toLowerCase();
  const extentionFile2 = filepath2.split('.').pop().toLowerCase();
  const parsFile1 = parse(extentionFile1, dataFile1);
  const parsFile2 = parse(extentionFile2, dataFile2);
  const diff = compareObject(parsFile1, parsFile2);
  const stringResult = formater(diff);
  return stringResult;
};

export default genDiff;
