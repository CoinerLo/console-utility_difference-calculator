import _ from 'lodash';
import formatterPlain from './plain.js';
import formatterStylish from './stylish.js';

const formats = {
  stylish: formatterStylish,
  plain: formatterPlain,
  json: (diff) => JSON.stringify(diff),
};

const formatter = (diff, format) => {
  if (!_.has(formats, format)) {
    throw new Error('the chosen format is not valid');
  }
  const formatType = formats[format];
  return formatType(diff);
};

export default formatter;
