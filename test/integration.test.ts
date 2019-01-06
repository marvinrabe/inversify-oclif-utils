import 'reflect-metadata'
import { expect, test } from '@oclif/test'
import Command from '@oclif/command/lib/command'
import { command } from '../src'
import { inject } from 'inversify'

class FooService {
  message () {
    return 'Hello World from FooService.'
  }
}

@command('my:command')
class TestCommand extends Command {

  @inject(FooService)
  protected fooService: FooService = { message () { return 'FooService not injected.' } }

  async run () {
    this.log(this.fooService.message())
    return true
  }
}

describe('inversify integration', () => {
  test
    .stdout()
    .command(['my:command'])
    .it('prints message from FooService', ctx => {
      expect(ctx.stdout).to.equal('Hello World from FooService.\n')
    })
})
