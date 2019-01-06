import './commands.setup'
import { expect, test } from '@oclif/test'

describe('Integration', () => {
  test
    .stdout()
    .command(['simple'])
    .it('runs commands', ctx => {
      expect(ctx.stdout).to.equal('Hello World.\n')
    })

  test
    .stdout()
    .command(['complex:command'])
    .it('prints message from FooService', ctx => {
      expect(ctx.stdout).to.equal('Hello World from FooService.\n')
    })
})
