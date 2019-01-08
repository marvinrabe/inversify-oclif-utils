import { SimpleCommand } from './commands.setup'
import InversifyPlugin from '../src/plugin'
import * as expect from 'expect'

describe('Oclif plugin', () => {

  it('returns commands', () => {
    const plugin = new InversifyPlugin({ root: '' })

    expect(plugin.commands).toContain(SimpleCommand)
  })

})
