import fs from 'fs';
import path from 'path';

const readFile = (filename) => {
  const getAbsolutPath = (filepath) => path.resolve(process.cwd(), filepath);
  return (fs.readFileSync(getAbsolutPath(filename), 'utf-8'));
};

export default readFile;
