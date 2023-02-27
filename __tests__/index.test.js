import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';
import readFile from '../src/readFile.js';

const getPath = (fileName) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const getFixturePath = path.join(__dirname, '..', '__fixtures__', fileName);
  return getFixturePath;
};

test('genDiffFlat', () => {
  expect(genDiff(getPath('file1.json'), getPath('file2.json'))).toEqual(readFile(getPath('resultFlat.txt')));
  expect(genDiff(getPath('file1.yml'), getPath('file2.yaml'))).toEqual(readFile(getPath('resultFlat.txt')));
});
test('genDiffTree', () => {
  expect(genDiff(getPath('file3.json'), getPath('file4.json'))).toEqual(readFile(getPath('resultTree.txt')));
  expect(genDiff(getPath('file3.yml'), getPath('file4.yaml'))).toEqual(readFile(getPath('resultTree.txt')));
});
