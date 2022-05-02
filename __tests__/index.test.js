import genDiff from '../src/index.js';

const result = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

const result2 = `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow:
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`;

test('genDiff JSON', () => {
  const filepath1 = './__fixtures__/filepath1.json';
  const filepath2 = './__fixtures__/filepath2.json';
  expect(genDiff(filepath1, filepath2)).toEqual(result2);
});

test('genDiff YAML', () => {
  const fileYaml1 = './__fixtures__/filepath1.yml';
  const fileYaml2 = './__fixtures__/filepath2.yml';
  expect(genDiff(fileYaml1, fileYaml2)).toBe(result);
});
