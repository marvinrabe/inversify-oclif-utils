import * as expect from 'expect'
import { getContainer, useContainer } from '../src/container'
import { Container as InversifyContainer } from 'inversify'

describe('Container', () => {

  it('returns container', () => {
    expect(getContainer() instanceof InversifyContainer).toBeTruthy()
  })

  it('assigns own container', () => {
    const myContainer = new InversifyContainer()

    useContainer(myContainer)

    expect(getContainer()).toBe(myContainer)
  })

})
