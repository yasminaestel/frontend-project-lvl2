const formater = (diff) => {
  const array = diff.map((infoObject) => {
    if (infoObject.status === 'bothNoChange') {
      return (`  ${infoObject.key}: ${infoObject.value}`);
    }
    if (infoObject.status === 'bothChange') {
      const line1 = `- ${infoObject.key}: ${infoObject.value1}`;
      const line2 = `+ ${infoObject.key}: ${infoObject.value2}`;
      const stringConcatenation = (`${line1}\n${line2}`);
      return stringConcatenation;
    }
    if (infoObject.status === 'onlyObject1') {
      return (`- ${infoObject.key}: ${infoObject.value}`);
    }
    if (infoObject.status === 'onlyObject2') {
      return (`+ ${infoObject.key}: ${infoObject.value}`);
    }
    return array;
  });
  const result = ['{', ...array, '}'];
  return result.join('\n');
};

export default formater;
