import readFile from './readFile.js';
import YAML from 'yaml';

const getFile = (nameFile) => {
  const formate = nameFile.split('.').pop();
  switch (formate) {
    case 'json':
      return JSON.parse(readFile(nameFile));
    case 'yaml':
      return YAML.parse(readFile(nameFile));
    case 'yml':
      return YAML.parse(readFile(nameFile));
    default:
      return ('Unknown file format');
  }
};

export default getFile;
