import fs from 'fs';
import path from 'path';

const getAbsolutPath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filename) => fs.readFileSync(getAbsolutPath(filename), 'utf-8');

export default readFile;
