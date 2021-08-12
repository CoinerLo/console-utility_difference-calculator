### Hexlet tests and linter status:
[![Actions Status](https://github.com/CoinerLo/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/CoinerLo/frontend-project-lvl2/actions)
[![Node.js CI](https://github.com/CoinerLo/frontend-project-lvl2/actions/workflows/node.js.yml/badge.svg)](https://github.com/CoinerLo/frontend-project-lvl2/actions/workflows/node.js.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/934e49833dad3d2c1bf7/maintainability)](https://codeclimate.com/github/CoinerLo/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/934e49833dad3d2c1bf7/test_coverage)](https://codeclimate.com/github/CoinerLo/frontend-project-lvl2/test_coverage)


## Вычислитель отличий

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, [например как тут](http://www.jsondiff.com/). Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменении в конфигурационных файлах.

Возможности утилиты:

* поддержка разных входных форматов: json, yaml;
* генерация отчета в различных форматах: json, stylish и plain text;

## Установка
---
Для установки выполнить:

    git clone https://github.com/CoinerLo/frontend-project-lvl2.git
    cd frontend-project-lvl2
    make install

Справочная информация:

    gendiff -h

## Описание
---
Старт программы

    gendiff [options] <filepath1> <filepath2>

Options:
* -V, --version [output the version number]
* -f, --format [type] [output format (default: "stylish")]
* -h, --help [display help for command]

## Пример
---
