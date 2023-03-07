import stringify from '../stringify/stringifyForPlain.js';

const formatDiff = (node, ancestry = '') => node.flatMap((infoObject) => {
  const newAncesty = ancestry === '' ? `${infoObject.key}` : `${ancestry}.${infoObject.key}`;
  if (infoObject.status === 'hasValueObject') {
    return formatDiff(infoObject.value, newAncesty);
  }
  if (infoObject.status === 'unchanged') {
    return null;
  }
  if (infoObject.status === 'changed') {
    return `Property '${newAncesty}' was updated. From ${stringify(infoObject.value1)} to ${stringify(infoObject.value2)}`;
  }
  if (infoObject.status === 'deleted') {
    return `Property '${newAncesty}' was removed`;
  }
  if (infoObject.status === 'added') {
    return `Property '${newAncesty}' was added with value: ${stringify(infoObject.value)}`;
  }
  throw new Error('Unknown type node');
});

const plain = (diff) => {
  const result = formatDiff(diff).filter((element) => element !== null);
  return result.join('\n');
};

export default plain;
