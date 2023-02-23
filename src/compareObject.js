import _ from 'lodash';

const compareObject = (object1, object2) => {
  const keysObject1 = Object.keys(object1);
  const keysObject2 = Object.keys(object2);
  const keys = _.uniq([...keysObject1, ...keysObject2]);

  const result = keys.map((key) => {
    const value1 = object1[key];
    const value2 = object2[key];
    if (_.has(object1, key) && _.has(object2, key) && _.isEqual(value1, value2)) {
      return { key: key, value: value1, status: 'bothNoChange' };
    }
    if (_.has(object1, key) && _.has(object2, key) && !(_.isEqual(value1, value2))) {
      return { key: key, value1: value1, value2: value2, status: 'bothChange' };
    }
    if (_.has(object1, key)) {
      return { key: key, value: value1, status: 'onlyObject1' };
    }
    if (_.has(object2, key)) {
      return { key: key, value: value2, status: 'onlyObject2' };
    }
  });
  return result;
};

export default compareObject;