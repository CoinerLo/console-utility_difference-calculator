import _ from 'lodash';

const getDiff = (object1, object2) => {
  const getKeys = _.sortBy(_.union(
    Object.keys(object1),
    Object.keys(object2),
  ));

  return getKeys.map((key) => {
    if (!_.has(object1, key)) {
      return { key, type: 'added', value: object2[key] };
    }
    if (!_.has(object2, key)) {
      return { key, type: 'removed', value: object1[key] };
    }
    if (_.isObject(object1) && _.isObject(object2)) {
      return { key, type: 'nested', children: getDiff(object1[key], object2[key]) };
    }
    if (!_.isEqual(object1, object2)) {
      return {
        key,
        type: 'changed',
        beforValue: object1[key],
        afterValue: object2[key],
      };
    }
    return { key, type: 'unchanged', value: object1[key] };
  });
};

export default getDiff;
