import fs from 'fs';
import path from 'path';
import getDataByParcing from './data/parsers.js';
import format from './formatters/index.js';
import buildTree from './buildTree.js';

const readFile = (filename) => fs.readFileSync(path.resolve(process.cwd(), filename.trim()), 'utf-8');
const extractFormat = (filename) => path.extname(filename).slice(1);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const file1format = extractFormat(filepath1);
  const file2format = extractFormat(filepath2);
  const fileContent1 = readFile(filepath1);
  const fileContent2 = readFile(filepath2);
  const data1 = getDataByParcing(file1format, fileContent1);
  const data2 = getDataByParcing(file2format, fileContent2);
  const innerTree = buildTree(data1, data2);
  return format(innerTree, formatName);
};
export default genDiff;
