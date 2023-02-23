import genDiff from '../src/index.js';
import readFile from '../src/readFile.js';

const fileJson1 = '../__fixtures__/file1.json';
const fileJson2 = '../__fixtures__/file2.json';

const fileYml1 = '../__fixtures__/file1.yml';
const fileYaml2 = '../__fixtures__/file2.yaml';

const result = await readFile('/../__fixtures__/result.txt');

test('genDiffJson', () => {
  expect(genDiff(fileJson1, fileJson2)).toEqual(result);
});
test('genDiffYml', () => {
  expect(genDiff(fileYml1, fileYaml2)).toEqual(result);
});
