"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _parsers = _interopRequireDefault(require("./parsers.js"));

var _getDiff = _interopRequireDefault(require("./getDiff.js"));

var _index = _interopRequireDefault(require("./formatters/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getFileData = function getFileData(filepath) {
  var corrrectFilePath = _path["default"].resolve(process.cwd(), filepath);

  var data = _fs["default"].readFileSync(corrrectFilePath, 'utf-8');

  var formatFile = _path["default"].extname(filepath);

  return (0, _parsers["default"])(data, formatFile);
};

var genDiff = function genDiff(firstFilepath, secondFilepath) {
  var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'stylish';
  var dataOne = getFileData(firstFilepath);
  var dataTwo = getFileData(secondFilepath);
  return (0, _index["default"])((0, _getDiff["default"])(dataOne, dataTwo), format);
};

var _default = genDiff;
exports["default"] = _default;