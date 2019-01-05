import { Container, interfaces as inversifyInterfaces } from 'inversify'

let instance: inversifyInterfaces.Container

export function useContainer (container: inversifyInterfaces.Container): void {
  instance = container
}

export function getContainer (): inversifyInterfaces.Container {
  if (!instance) {
    instance = new Container()
  }
  return instance
}

export { command } from './decorators'
export { TYPE } from './constants'
export { interfaces } from './interfaces'
