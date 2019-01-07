import * as expect from 'expect'
import { getCommandMetadata } from '../src/reflection'

describe('Reflection', () => {
  it('returns metadata', () => {
    const commands = getCommandMetadata().map(x => x.command)

    expect(commands).toContain('simple')
    expect(commands).toContain('complex:foo')
  })
})
