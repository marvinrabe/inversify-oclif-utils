inversify-oclif-utils
======================

Create [oclif](https://oclif.io/) commands with [InversifyJS](http://inversify.io/).

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/inversify-oclif-utils.svg)](https://npmjs.org/package/inversify-oclif-utils)
[![Downloads/week](https://img.shields.io/npm/dw/inversify-oclif-utils.svg)](https://npmjs.org/package/inversify-oclif-utils)
[![License](https://img.shields.io/npm/l/inversify-oclif-utils.svg)](https://github.com/marvinrabe/inversify-oclif-utils/blob/master/package.json)
[![CircleCI](https://circleci.com/gh/marvinrabe/inversify-oclif-utils/tree/master.svg?style=shield)](https://circleci.com/gh/marvinrabe/inversify-oclif-utils/tree/master)
[![codecov](https://codecov.io/gh/marvinrabe/inversify-oclif-utils/branch/master/graph/badge.svg)](https://codecov.io/gh/marvinrabe/inversify-oclif-utils)

## Getting Started

These instructions will get you up and running.

### Prerequisites

Make sure you have InversifyJS and Oclif installed.

 * [Oclif instructions](https://oclif.io/docs/introduction)
 * [InversifyJS instructions](https://github.com/inversify/InversifyJS/blob/master/wiki/installation.md)

It's best to start with a fresh Oclif installation and add InversifyJS to it. Ofcourse you could install Oclif in an existing project manually (but you have to figure this out on your own).

### Installing

Install this plugin with npm:

```bash
npm install inversify-oclif-utils --save
```

Or with Yarn:

```bash
yarn add inversify-oclif-utils
```

Afterwards add it to your package.json:

```json
{
  ...,
  "oclif": {
    ...,
    "plugins": {
      "inversify-oclif-utils"
    }
  }
}
```

## Creating Commands

Now we will get you started with creating commands.

### ... injecting Services

If you want to inject other services into your commands, you must setup the container like this:

```typescript
import { useContainer } from 'inversify-oclif-utils'
import { Container } from 'inversify'

const container = new Container();
useContainer(container);
```

You do this before running any Oclif commands. For example, at the top of your Oclif "binary" in the `/bin` folder.

Afterwards you can inject other services in your commands like this:

```typescript
import { Command } from 'inversify-oclif-utils'

export class YourCommand extends Command {

  @inject(FooService)
  protected fooService!: FooService

  async run () {
    this.log(this.fooService.message())
    return true
  }
}
```

Please note, that you have to use my implementation of the Command class for it to work.

### ... loading Commands dynamically

If you want to dynamically load your commands into Oclif without putting them in a specified command directory (the default way in Oclif). You can use our `@command()` decorator.

```typescript
import { command } from 'inversify-oclif-utils'
import { Command } from '@oclif/command'

@command('your:command')
export class YourCommand extends Command {
  ...
}
```

The command can then be run by:

```bash
./bin/YOURBIN your:command
```

Make sure you put commands that are loaded with the decorator not into the Oclif command directory. Otherwise it might be loaded twice.

### ... or both

You can do both things at once.

```typescript
import { Command, command } from 'inversify-oclif-utils'

@command()
export class YourCommand extends Command {

  @inject(FooService)
  protected fooService!: FooService

  async run () {
    this.log(this.fooService.message())
    return true
  }
}
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/marvinrabe/inversify-oclif-utils/tags). 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* `command` Decorator is based on work by [inversify-express-utils](https://github.com/inversify/inversify-express-utils)
