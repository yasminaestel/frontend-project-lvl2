import _ from 'lodash';

const compareObject = (object1, object2) => {
  const keysObject1 = Object.keys(object1);
  const keysObject2 = Object.keys(object2);
  const sortedKeys = _.sortBy(_.uniq([...keysObject1, ...keysObject2]));

  return sortedKeys.flatMap((key) => {
    const value1 = object1[key];
    const value2 = object2[key];
    if (_.isObject(value1) && _.isObject(value2)) {
      return {
        key, value: compareObject(value1, value2), status: 'hasValueObject',
      };
    }
    if (_.has(object1, key) && _.has(object2, key) && _.isEqual(value1, value2)) {
      return {
        key, value: value1, status: 'unchanged',
      };
    }
    if (_.has(object1, key) && _.has(object2, key) && !(_.isEqual(value1, value2))) {
      return {
        key, value1, value2, status: 'changed',
      };
    }
    if (_.has(object1, key)) {
      return {
        key, value: value1, status: 'deleted',
      };
    }
    if (_.has(object2, key)) {
      return {
        key, value: value2, status: 'added',
      };
    }
    throw new Error('Unknown status');
  });
};

export default compareObject;
