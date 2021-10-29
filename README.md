## Difference calculator

### Hexlet tests and linter status:
[![Actions Status](https://github.com/CoinerLo/console-utility_difference-calculator/workflows/hexlet-check/badge.svg)](https://github.com/CoinerLo/console-utility_difference-calculator/actions)
[![Node.js CI](https://github.com/CoinerLo/console-utility_difference-calculator/actions/workflows/node.js.yml/badge.svg)](https://github.com/CoinerLo/console-utility_difference-calculator/actions/workflows/node.js.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/934e49833dad3d2c1bf7/maintainability)](https://codeclimate.com/github/CoinerLo/console-utility_difference-calculator/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/934e49833dad3d2c1bf7/test_coverage)](https://codeclimate.com/github/CoinerLo/console-utility_difference-calculator/test_coverage)



Difference Calculator - a program that determines the difference between two data structures. This is a popular task, for which there are many online services, for example, [as here](http://www.jsondiff.com/). A similar mechanism is used when outputting tests or when automatically tracking changes in configuration files.

Utility features:

* support for different input formats: json, yaml;
* generating reports in various formats: json, stylish и plain text;

## Installation
---
To install, run:

    git clone https://github.com/CoinerLo/console-utility_difference-calculator.git
    cd console-utility_difference-calculator
    make install

Information:

    gendiff -h

## Description
---
Get started

    gendiff [options] <filepath1> <filepath2>

Options:
* -V, --version [output the version number]
* -f, --format [type] [output format (default: "stylish")]
* -h, --help [display help for command]

## Example
---
JSON and YML to stylish:

[![asciicast](https://asciinema.org/a/DCEsyGpTNUM5xO4pUZGL8VSgu.svg)](https://asciinema.org/a/DCEsyGpTNUM5xO4pUZGL8VSgu)


JSON and YML to json:

[![asciicast](https://asciinema.org/a/430200.svg)](https://asciinema.org/a/430200)


JSON and YML to plain:

[![asciicast](https://asciinema.org/a/430202.svg)](https://asciinema.org/a/430202)