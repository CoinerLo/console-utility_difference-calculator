import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import getDiff from './getDiff.js';
import formatter from './formatters/index.js';

const getFileData = (filepath) => {
  const corrrectFilePath = path.resolve(process.cwd(), filepath);
  const data = fs.readFileSync(corrrectFilePath, 'utf-8');
  const formatFile = path.extname(filepath);
  return parse(data, formatFile);
};

const genDiff = (firstFilepath, secondFilepath, format = 'stylish') => {
  const dataOne = getFileData(firstFilepath);
  const dataTwo = getFileData(secondFilepath);
  return formatter(getDiff(dataOne, dataTwo), format);
};

export default genDiff;
