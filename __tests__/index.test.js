import genDiff from '../src/index.js';
import fs from 'fs';
import path from 'node:path';

const fileJson1 = '../__fixtures__/file1.json';
const fileJson2 = '../__fixtures__ /file1.json';
const resultPath = path.resolve('../__fixtures__/resultJson.txt');
const resultJson = fs.readFileSync(resultPath);

test('genDiffJson', () => {
  expect(genDiff(fileJson1, fileJson2)).toEqual(resultJson);
});