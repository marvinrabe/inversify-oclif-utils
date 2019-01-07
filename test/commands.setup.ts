import 'reflect-metadata'
import { command, container, inject } from '../src'
import Command from '@oclif/command/lib/command'

import getDecorators from 'inversify-inject-decorators'
import { injectable } from 'inversify'

let { lazyInject } = getDecorators(container.inversify)

@injectable()
class FooService {
  message () {
    return 'Hello World from FooService.'
  }
}

@command('simple')
export class SimpleCommand extends Command {
  async run () {
    this.log('Hello World.')
    return true
  }
}

@command('complex:foo')
export class ComplexCommand extends Command {

  @inject(FooService)
  protected fooService: FooService = { message () { return 'FooService not injected.' } }

  async run () {
    this.log(this.fooService.message())
    return true
  }
}
