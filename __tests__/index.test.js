import genDiff from '../src/index.js';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFile(getFixturePath(filename), 'utf-8');

const fileJson1 = '../__fixtures__/file1.json';
const fileJson2 = '../__fixtures__ /file1.json';

const resultJson = await readFile('/../__fixtures__/resultJson');

test('genDiffJson', () => {
  expect(genDiff(fileJson1, fileJson2)).toEqual(resultJson);
});