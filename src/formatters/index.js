import stylish from './stylish.js';
import plain from './plain.js';

const getDiffInForm = (diff, formatter) => {
  if (formatter === 'plain') return plain(diff);
  if (formatter === 'stylish') return stylish(diff);
  return 'formatter not supported';
};

export default getDiffInForm;
