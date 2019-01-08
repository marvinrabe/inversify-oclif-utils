import * as expect from 'expect'
import { getContainer, resolve, useContainer } from '../src/container'
import { Container as InversifyContainer, injectable } from 'inversify'

@injectable()
class MyClass {}

describe('Container', () => {

  it('throws error when no container is specfied', () => {
    expect(() => {
      getContainer()
    }).toThrow('Container is not specified. Set it up with useContainer().');
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
