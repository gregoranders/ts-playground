# ts-playground

<!-- markdownlint-disable-next-line MD033 -->
## [<img src="./typescript.svg" />][typescript-url] <center style="color: #007ACC;">Playground</center>

<!-- markdownlint-disable-next-line MD013 MD033 -->
## <center>This project is a `template` and as such `DOES NOT` offer any useful code</center>

## [API Docs](./docs/index.md)

[![License][license-image]][license-url]
[![Issues][issues-image]][issues-url]
<!-- markdownlint-disable-next-line MD013 -->
[![Code maintainability][code-maintainability-image]][code-maintainability-url]
[![Code issues][code-issues-image]][code-issues-url]
[![Code Technical Debt][code-tech-debt-image]][code-tech-debt-url]

[![Codacy Badge][codacy-imge]][codacy-url]

<!-- markdownlint-disable-next-line MD013 -->
[![Main Language][language-image]][code-metric-url]
[![Languages][languages-image]][code-metric-url]
[![Code Size][code-size-image]][code-metric-url]
[![Repository Size][repo-size-image]][code-metric-url]

## Features

- [TypeScript][typescript-url]
- [Jest][jest-url] Unit Tests with Code Coverage
- [API Docs Generation][api-url]
- GitHub CI Integration (feature, development, master, release)
- Code Quality via [Code Climate](./docs/codeclimate.md) and [Codacy](./docs/codacy.md)

<!-- lint disable maximum-line-length -->
| GitHub                                                           | Coveralls                                                                  |                                                                              |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [![Release Build][release-build-image]][release-url]             |                                                                            | [![Release][release-image]][release-url]                                     |
| [![Master Build][master-build-image]][master-url]                | [![Master Coverage][master-coveralls-image]][master-coveralls-url]         | [![Master Version][master-version-image]][master-version-url]                |
| [![Development Build][development-build-image]][development-url] | [![Test Coverage][development-coveralls-image]][development-coveralls-url] | [![Development Version][development-version-image]][development-version-url] |
<!-- lint enable maximum-line-length -->
## Example

```ts
const branch = normalizeBranchName(`refs/heads/master`);

expect(branch).toEqual('master');
```

[release-url]: https://github.com/gregoranders/ts-playground/releases
[master-url]: https://github.com/gregoranders/ts-playground/tree/master
[development-url]: https://github.com/gregoranders/ts-playground/tree/development
[code-metric-url]: https://github.com/gregoranders/ts-playground/search?l=TypeScript
[license-url]: https://github.com/gregoranders/ts-playground/blob/master/LICENSE
[license-image]: https://img.shields.io/github/license/gregoranders/ts-playground.svg
[master-version-url]: https://github.com/gregoranders/ts-playground/blob/master/package.json
[master-version-image]: https://img.shields.io/github/package-json/v/gregoranders/ts-playground/master
[development-version-url]: https://github.com/gregoranders/ts-playground/blob/development/package.json
[development-version-image]: https://img.shields.io/github/package-json/v/gregoranders/ts-playground/development
[issues-url]: https://github.com/gregoranders/ts-playground/issues
[issues-image]: https://img.shields.io/github/issues-raw/gregoranders/ts-playground.svg
[release-image]: https://img.shields.io/github/release/gregoranders/ts-playground
[release-build-image]: https://github.com/gregoranders/ts-playground/workflows/Release%20CI/badge.svg
[master-build-image]: https://github.com/gregoranders/ts-playground/workflows/Master%20CI/badge.svg
[development-build-image]: https://github.com/gregoranders/ts-playground/workflows/Development%20CI/badge.svg
[master-coveralls-url]: https://coveralls.io/github/gregoranders/ts-playground?branch=master
[master-coveralls-image]: https://img.shields.io/coveralls/github/gregoranders/ts-playground/master
[development-coveralls-image]: https://img.shields.io/coveralls/github/gregoranders/ts-playground/development
[development-coveralls-url]: https://coveralls.io/github/gregoranders/ts-playground?branch=development
[code-maintainability-url]: https://codeclimate.com/github/gregoranders/ts-playground/maintainability
[code-maintainability-image]: https://img.shields.io/codeclimate/maintainability/gregoranders/ts-playground
[code-issues-url]: https://codeclimate.com/github/gregoranders/ts-playground/maintainability
[code-issues-image]: https://img.shields.io/codeclimate/issues/gregoranders/ts-playground
[code-tech-debt-url]: https://codeclimate.com/github/gregoranders/ts-playground/maintainability
[code-tech-debt-image]: https://img.shields.io/codeclimate/tech-debt/gregoranders/ts-playground
[language-image]: https://img.shields.io/github/languages/top/gregoranders/ts-playground
[languages-image]: https://img.shields.io/github/languages/count/gregoranders/ts-playground
[code-size-image]: https://img.shields.io/github/languages/code-size/gregoranders/ts-playground
[repo-size-image]: https://img.shields.io/github/repo-size/gregoranders/ts-playground
[typescript-url]: http://www.typescriptlang.org/
[jest-url]: https://jestjs.io/
[codacy-imge]: https://app.codacy.com/project/badge/Grade/ba567567ab7c45eeab91ca4fe03011d4
[codacy-url]: https://app.codacy.com/gh/gregoranders/ts-playground
[api-url]: https://api-extractor.com/
