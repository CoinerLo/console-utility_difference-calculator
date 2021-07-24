import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import getDiff from './getDiff.js';
import formatter from './formatters/index.js';

const getFileData = (filepath) => {
  const data = fs.readFileSync(path.resolve(filepath));
  const formatFile = path.extname(filepath);
  return parse(data, formatFile);
};

const resultDiff = (firstFilepath, secondFilepath, format = 'stylish') => {
  const filepathOne = getFileData(firstFilepath);
  const filepathTwo = getFileData(secondFilepath);
  return formatter(getDiff(filepathOne, filepathTwo), format);
};

export default resultDiff;
