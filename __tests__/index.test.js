import genDiff from '../src/index.js';
import { readFile } from 'node:fs/promises';

const fileJson1 = '../__fixtures__/file1.json';
const fileJson2 = '../__fixtures__ /file1.json';
const resultJson = '../__fixtures__/resultJson.txt';

test('genDiffJson', () => {
  expect(genDiff(fileJson1, fileJson2)).toEqual(readFile(resultJson, { encoding: 'utf8' }));
});