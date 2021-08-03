import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);

const expectedJson = readFileSync(getFixturePath('expectJSON.json'), 'utf-8');
const jsonFilepath1 = getFixturePath('filepath1.json');
const jsonFilepath2 = getFixturePath('filepath2.json');

const expectedStylish = readFileSync(getFixturePath('expectStylish.txt'), 'utf-8');
const ymlFilepath1 = getFixturePath('filepath1.yml');
const ymlFilepath2 = getFixturePath('filepath2.yml');
console.log(expectedStylish);
console.log(genDiff(ymlFilepath1, ymlFilepath2));

test('genDiff JSON to json', () => {
  expect(genDiff(jsonFilepath1, jsonFilepath2, 'json')).toEqual(expectedJson);
});

test('genDiff JSON to stylish', () => {
  expect(genDiff(jsonFilepath1, jsonFilepath2)).toEqual(expectedStylish);
});

test('genDiff YML to json', () => {
  expect(genDiff(ymlFilepath1, ymlFilepath2, 'json')).toEqual(expectedJson);
}); // не работает, расходится с консолью

test('genDiff YML to stylish', () => {
  expect(genDiff(ymlFilepath1, ymlFilepath2)).toEqual(expectedStylish);
}); // не работает, расходится с консолью
