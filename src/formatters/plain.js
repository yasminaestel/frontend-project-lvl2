import stringifyToPlain from '../stringify/stringifyToPlain.js';

const plain = (diff) => {
  const iter = (node, ancestry = '') => {
    const array = node.flatMap((infoObject) => {
      const newAncesty = ancestry === '' ? `${infoObject.key}` : `${ancestry}.${infoObject.key}`;
      if (infoObject.status === 'hasValueObject') {
        return iter(infoObject.value, newAncesty);
      }
      if (infoObject.status === 'bothNoChange') {
        return null;
      }
      if (infoObject.status === 'bothChange') {
        return `Property '${newAncesty}' was updated. From ${stringifyToPlain(infoObject.value1)} to ${stringifyToPlain(infoObject.value2)}`;
      }
      if (infoObject.status === 'onlyObject1') {
        return `Property '${newAncesty}' was removed`;
      }
      if (infoObject.status === 'onlyObject2') {
        return `Property '${newAncesty}' was added with value: ${stringifyToPlain(infoObject.value)}`;
      }
      return ('error');
    });
    return array;
  };
  const preResult = iter(diff);
  const result = preResult.filter((element) => element !== null);
  return result.join('\n');
};

export default plain;
