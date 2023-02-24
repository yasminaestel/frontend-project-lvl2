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

const fileJson1 = getPath('file1.json');
const fileJson2 = getPath('file2.json');
const fileYml1 = getPath('file1.yml');
const fileYaml2 = getPath('file2.yaml');
const treeJson1 = getPath('file3.json');
const treeJson2 = getPath('file4.json');

const result = readFile(getPath('resultFlat.txt'));
const resultTree = readFile(getPath('resultTree.txt'));

test('genDiffFlat', () => {
  expect(genDiff(fileJson1, fileJson2)).toEqual(result);
  expect(genDiff(fileYml1, fileYaml2)).toEqual(result);
});
test('genDiffTree', () => {
  expect(genDiff(treeJson1, treeJson2)).toEqual(resultTree);
});
