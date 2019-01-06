oclif-plugin-inversify
======================

Create commands with inversify

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-plugin-inversify.svg)](https://npmjs.org/package/oclif-plugin-inversify)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-plugin-inversify.svg)](https://npmjs.org/package/oclif-plugin-inversify)
[![License](https://img.shields.io/npm/l/oclif-plugin-inversify.svg)](https://github.com/marvinrabe/oclif-plugin-inversify/blob/master/package.json)
[![CircleCI](https://circleci.com/gh/marvinrabe/inversify-oclif-utils/tree/master.svg?style=shield)](https://circleci.com/gh/marvinrabe/inversify-oclif-utils/tree/master)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g oclif-plugin-inversify
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
oclif-plugin-inversify/1.0.0 darwin-x64 node-v11.3.0
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-example hello [FILE]`](#oclif-example-hello-file)

## `oclif-example hello [FILE]`

describe the command here

```
USAGE
  $ oclif-example hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ oclif-example hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/marvinrabe/oclif-plugin-inversify/blob/v1.0.0/src/commands/hello.ts)_
<!-- commandsstop -->
