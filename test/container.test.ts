import * as expect from 'expect'
import { getContainer, resolve, useContainer } from '../src/container'
import { Container as InversifyContainer, injectable } from 'inversify'

@injectable()
class MyClass {}

describe('Container', () => {

  it('returns container', () => {
    expect(getContainer() instanceof InversifyContainer).toBeTruthy()
  })

  it('assigns own container', () => {
    const myContainer = new InversifyContainer()

    useContainer(myContainer)

    expect(getContainer()).toBe(myContainer)
  })

  it('resolves a class', () => {
    const object = resolve(MyClass)

    expect(object instanceof MyClass).toBeTruthy()
  })

})
