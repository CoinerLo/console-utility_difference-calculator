import _ from 'lodash';

const makeIndent = (spaces, item = '    ') => (item.repeat(spaces));

const makeString = (data, spaces = 0) => {
  if (!_.isObject(data)) {
    return data;
  }
  const lines = _.keys(data).map((key) => `${makeIndent(spaces)}    ${key}: ${makeString(data[key], spaces + 1)}`);
  return `{\n${lines.join('\n')}\n${makeIndent(spaces)}}`;
};

const formatStylish = (diff, spaces = 0) => {
  const buildString = (char, node) => `${makeIndent(spaces)}  ${char} ${node.key}: ${makeString(node.value, spaces + 1)}`;

  const strings = diff.map((node) => {
    switch (node.type) {
      case 'added':
        return buildString('+', node);
      case 'removed':
        return buildString('-', node);
      case 'nested':
        return `${makeIndent(spaces)}    ${node.key}: ${formatStylish(node.children, spaces + 1)}`;
      case 'changed':
        return `${makeIndent(spaces)}  - ${node.key}: ${makeString(node.beforValue, spaces + 1)}\n ${makeIndent(spaces)} + ${node.key}: ${makeString(node.afterValue, spaces + 1)}`;
      case 'unchanged':
        return buildString(' ', node);
      default:
        throw new Error('This "type" is not defined!');
    }
  });
  return `{\n${strings.join('\n')}\n${makeIndent(spaces)}}`;
};

export default formatStylish;
