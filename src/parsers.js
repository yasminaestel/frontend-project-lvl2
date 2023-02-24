import YAML from 'yaml';
import readFile from './readFile.js';

const parsers = (nameFile) => {
  const formate = nameFile.split('.').pop().toLowerCase();
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

export default parsers;
