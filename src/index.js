import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import getDiff from './getDiff.js';
import formatter from './formatters/index.js';

const getFileData = (filepath) => {
  const data = fs.readFileSync(path.resolve(process.cwd(), './__fixtures__', filepath), 'utf-8');
  const formatFile = path.extname(filepath);
  return parse(data, formatFile);
};

const resultDiff = (firstFilepath, secondFilepath, format = 'stylish') => {
  const dataOne = getFileData(firstFilepath);
  const dataTwo = getFileData(secondFilepath);
  return formatter(getDiff(dataOne, dataTwo), format);
};

export default resultDiff;
