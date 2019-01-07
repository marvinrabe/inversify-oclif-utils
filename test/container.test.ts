import * as expect from 'expect'
import Container from '../src/container'
import { Container as InversifyContainer } from 'inversify'

describe('Container', () => {
  it('returns configs', () => {
    const commands = Container.configs.map(x => x.command)

    expect(commands).toContain('simple')
    expect(commands).toContain('complex:foo')
  })

  it('binds constant values', () => {
    let symbol = Symbol('TEST')

    Container.bindConstant(symbol, 1)

    expect(Container.inversify.get<Number>(symbol)).toBe(1)

    Container.bindConstant(symbol, 2)

    expect(Container.inversify.get<Number>(symbol)).toBe(2)
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
