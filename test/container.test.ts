import * as expect from 'expect'
import Container from '../src/container'
import { Container as InversifyContainer } from 'inversify'

describe('Container', () => {
  it('returns configs', () => {
    const configs = Container.configs

    expect(configs.filter(x => x.command === 'simple').length).toBe(1)
    expect(configs.filter(x => x.command === 'complex:command').length).toBe(1)
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
