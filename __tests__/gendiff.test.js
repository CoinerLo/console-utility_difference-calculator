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

test('genDiff JSON to json', () => {
  expect(genDiff(jsonFilepath1, jsonFilepath2, 'json')).toEqual(expectedJson);
});
