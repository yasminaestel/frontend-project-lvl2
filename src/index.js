import _ from 'lodash';
import fs from 'fs';

const genDiff = (filepath1, filepath2) => {
  const file1 = JSON.parse(fs.readFileSync(filepath1));
  const file2 = JSON.parse(fs.readFileSync(filepath2));


};

export default genDiff;
