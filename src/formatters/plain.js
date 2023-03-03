import stringify from '../stringify/stringifyForPlain.js';

const formatDiff = (node, ancestry = '') => node.flatMap((infoObject) => {
  const newAncesty = ancestry === '' ? `${infoObject.key}` : `${ancestry}.${infoObject.key}`;
  if (infoObject.status === 'hasValueObject') {
    return formatDiff(infoObject.value, newAncesty);
  }
  if (infoObject.status === 'bothNoChange') {
    return null;
  }
  if (infoObject.status === 'bothChange') {
    return `Property '${newAncesty}' was updated. From ${stringify(infoObject.value1)} to ${stringify(infoObject.value2)}`;
  }
  if (infoObject.status === 'onlyObject1') {
    return `Property '${newAncesty}' was removed`;
  }
  if (infoObject.status === 'onlyObject2') {
    return `Property '${newAncesty}' was added with value: ${stringify(infoObject.value)}`;
  }
  throw new Error('Unknown type node');
});

const plain = (diff) => {
  const result = formatDiff(diff).filter((element) => element !== null);
  return result.join('\n');
};

export default plain;
