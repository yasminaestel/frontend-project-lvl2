import _ from 'lodash';
import readFile from './readFile.js';

const filepath1 = '../__fixtures__/file1.json';
const filepath2 = '../__fixtures__/file2.json';

const genDiff = (filepath1, filepath2) => {
  const file1 = JSON.parse(readFile(filepath1));
  const file2 = JSON.parse(readFile(filepath2));

  const entriesFile1 = Object.entries(file1);
  const entriesFile2 = Object.entries(file2);

};
genDiff(filepath1, filepath2);

export default genDiff;
