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

test('genDiffTree', () => {
  expect(genDiff(getPath('file3.json'), getPath('file4.json'))).toEqual(readFile(getPath('resultTree.txt')));
  expect(genDiff(getPath('file3.yml'), getPath('file4.yaml'))).toEqual(readFile(getPath('resultTree.txt')));
});
test('genDiffPlain', () => {
  expect(genDiff(getPath('file3.json'), getPath('file4.json'), 'plain')).toEqual(readFile(getPath('resultPlain.txt')));
  expect(genDiff(getPath('file3.yml'), getPath('file4.yaml'), 'plain')).toEqual(readFile(getPath('resultPlain.txt')));
});
