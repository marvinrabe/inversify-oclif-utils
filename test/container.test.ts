import * as expect from 'expect'
import Container from '../src/container'
import { Container as InversifyContainer } from 'inversify'

describe('Container', () => {
  it('returns configs', () => {
    const commands = Container.configs.map(x => x.command)

    expect(commands).toContain('simple')
    expect(commands).toContain('complex:foo')
  })

  it('returns IoC container', () => {
    expect(Container.inversify instanceof InversifyContainer).toBeTruthy()
  })

  it('assigns own IoC container', () => {
    const myContainer = new InversifyContainer()

    Container.inversify = myContainer

    expect(Container.inversify).toBe(myContainer)
  })
})
