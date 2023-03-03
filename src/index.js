import compareObject from './compareObject.js';
import parse from './parse.js';
import readFile from './readFile.js';
import getDiffInForm from './formatters/index.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const dataFile1 = readFile(filepath1);
  const dataFile2 = readFile(filepath2);
  const extentionFile1 = filepath1.split('.').pop().toLowerCase();
  const extentionFile2 = filepath2.split('.').pop().toLowerCase();
  const parsedFile1 = parse(extentionFile1, dataFile1);
  const parsedFile2 = parse(extentionFile2, dataFile2);
  const diff = compareObject(parsedFile1, parsedFile2);
  const stringResult = getDiffInForm(diff, formatName);
  return stringResult;
};

export default genDiff;
