import _ from 'lodash';

const compareObject = (object1, object2) => {
  const keysObject1 = Object.keys(object1);
  const keysObject2 = Object.keys(object2);
  const result = _.uniq([...keysObject1, ...keysObject2]).flatMap((key) => {
    const value1 = object1[key];
    const value2 = object2[key];
    if (_.isObject(value1) && _.isObject(value2)) {
      return { key, value: compareObject(value1, value2), status: 'hasValueObject' };
    }
    if (_.has(object1, key) && _.has(object2, key) && _.isEqual(value1, value2)) {
      return { key, value: value1, status: 'bothNoChange' };
    }
    if (_.has(object1, key) && _.has(object2, key) && !(_.isEqual(value1, value2))) {
      return {
        key, value1, value2, status: 'bothChange',
      };
    }
    if (_.has(object1, key)) {
      return { key, value: value1, status: 'onlyObject1' };
    }
    if (_.has(object2, key)) {
      return { key, value: value2, status: 'onlyObject2' };
    }
    return ('error');
  });
  return result.sort((x, y) => x.key.localeCompare(y.key));
};

export default compareObject;
