import _ from 'lodash';

const getValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const buildName = (node, parent) => {
  if (parent === '') {
    return `${node.key}`;
  }
  return `${parent}.${node.key}`;
};

const formatterPlain = (diff, parent = '') => {
  const lines = diff
    .filter((node) => node.type !== 'unchanged')
    .map((node) => {
      switch (node.type) {
        case 'added':
          return `Property '${buildName(node, parent)}' was added with value: ${getValue(node.value)}`;
        case 'removed':
          return `Property '${buildName(node, parent)}' was removed`;
        case 'nested':
          return formatterPlain(node.children, buildName(node, parent));
        case 'changed':
          return `Property '${buildName(node, parent)}' was updated. From ${getValue(node.beforValue)} to ${getValue(node.afterValue)}`;
        default:
          throw new Error('This is not a valid type');
      }
    });
  return lines.join('\n');
};

export default formatterPlain;
