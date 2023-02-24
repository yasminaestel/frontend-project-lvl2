import fs from 'fs';
import getAbsolutPath from './getAbsolutPath.js';

const readFile = (filename) => fs.readFileSync(getAbsolutPath(filename), 'utf-8');

export default readFile;
