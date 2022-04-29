import genDiff from '../src/index.js';

const file1 = filepath1.json;
const file2 = filepath2.json;

test('gendiff', () => {
  expect(genDiff(file1, file2)).toBe({
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
  });
});