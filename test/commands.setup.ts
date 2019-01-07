import { injectable } from 'inversify'
import { command, container, inject, Command } from '../src'

@injectable()
export class FooService {
  message () {
    return 'Hello World from FooService.'
  }
}

container.inversify.bind<FooService>('FooService').to(FooService)

@command('simple')
export class SimpleCommand extends Command {
  async run () {
    this.log('Hello World.')
    return true
  }
}

@command('complex:foo')
export class ComplexCommand extends Command {

  @inject('FooService')
  protected fooService!: FooService

  async run () {
    this.log(this.fooService.message())
    return true
  }
}
