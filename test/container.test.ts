import * as expect from 'expect'
import { bindConstant, getContainer, useContainer } from '../src/container'
import { Container as InversifyContainer } from 'inversify'

describe('Container', () => {

  it('binds constant values', () => {
    let symbol = Symbol('TEST')

    bindConstant(symbol, 1)

    expect(getContainer().get<Number>(symbol)).toBe(1)

    bindConstant(symbol, 2)

    expect(getContainer().get<Number>(symbol)).toBe(2)
  })

  it('returns IoC container', () => {
    expect(getContainer() instanceof InversifyContainer).toBeTruthy()
  })

  it('assigns own IoC container', () => {
    const myContainer = new InversifyContainer()

    useContainer(myContainer)

    expect(getContainer()).toBe(myContainer)
  })
})
