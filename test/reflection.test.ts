import * as expect from 'expect'
import { addCommandMetadata, getCommandMetadata } from '../src/reflection'

describe('Reflection', () => {
  it('returns metadata', () => {
    const commands = getCommandMetadata().map(x => x.command)

    expect(commands).toContain('simple')
    expect(commands).toContain('complex:foo')
  })

  it('adds metadata', () => {
    const length = getCommandMetadata().length

    addCommandMetadata({
      command: 'my-funky-command',
      target: null
    })

    const metadata = getCommandMetadata()

    expect(metadata.length).toBe(length + 1)

    const commands = metadata.map(x => x.command)

    expect(commands).toContain('my-funky-command')
  })

})
