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

const fileJson1 = 'file1.json';
const fileJson2 = 'file2.json';

const fileYml1 = 'file1.yml';
const fileYaml2 = 'file2.yaml';

const result = readFile(getPath('resultFlat.txt'));

test('genDiffJson', () => {
  expect(genDiff(getPath(fileJson1), getPath(fileJson2))).toEqual(result);
});
test('genDiffYml', () => {
  expect(genDiff(getPath(fileYml1), getPath(fileYaml2))).toEqual(result);
});
