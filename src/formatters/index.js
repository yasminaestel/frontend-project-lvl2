import stylish from './stylish.js';
import plain from './plain.js';
import json from './jsonFormatter.js';

const getDiffInForm = (diff, formatter) => {
  if (formatter === 'plain') return plain(diff);
  if (formatter === 'stylish') return stylish(diff);
  if (formatter === 'json') return json(diff);
  return 'formatter not supported';
};

export default getDiffInForm;
