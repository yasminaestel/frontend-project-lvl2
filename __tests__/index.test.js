import genDiff from '../src/index.js';
import readFile from '../src/readFile.js';

const fileJson1 = await readFile('../__fixtures__/file1.json');
const fileJson2 = await readFile('../__fixtures__/file1.json');

const resultJson = await readFile('/../__fixtures__/resultJson.txt');

test('genDiffJson', () => {
  expect(genDiff(fileJson1, fileJson2)).toEqual(resultJson);
});
