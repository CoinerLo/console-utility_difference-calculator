import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);

const jsonFilepath1 = getFixturePath('filepath1.json');
const jsonFilepath2 = getFixturePath('filepath2.json');
const ymlFilepath1 = getFixturePath('filepath1.yml');
const ymlFilepath2 = getFixturePath('filepath2.yml');

const expectedJson = readFileSync(getFixturePath('expectJSON.json'), 'utf-8');
const expectedStylish = readFileSync(getFixturePath('expectStylish.txt'), 'utf-8');
const expectedPlain = readFileSync(getFixturePath('expectPlain.txt'), 'utf-8');

test('genDiff JSON and YML to json', () => {
  expect(genDiff(jsonFilepath1, jsonFilepath2, 'json')).toEqual(expectedJson);
  expect(genDiff(ymlFilepath1, ymlFilepath2, 'json')).toEqual(expectedJson);
});

test('genDiff JSON and YML to stylish', () => {
  expect(genDiff(jsonFilepath1, jsonFilepath2)).toEqual(expectedStylish);
  expect(genDiff(ymlFilepath1, ymlFilepath2)).toEqual(expectedStylish);
});

test('genDiff JSON and YML to plain', () => {
  expect(genDiff(jsonFilepath1, jsonFilepath2, 'plain')).toEqual(expectedPlain);
  expect(genDiff(ymlFilepath1, ymlFilepath2, 'plain')).toEqual(expectedPlain);
});
