import YAML from 'yaml';

const parse = (extention, dataFile) => {
  switch (extention) {
    case 'json':
      return JSON.parse(dataFile);
    case 'yaml':
      return YAML.parse(dataFile);
    case 'yml':
      return YAML.parse(dataFile);
    default:
      return ('Unknown file format');
  }
};

export default parse;
