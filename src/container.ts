import { interfaces as inversifyInterfaces } from 'inversify'

let _container: inversifyInterfaces.Container

export function useContainer (container: inversifyInterfaces.Container) {
  _container = container
}

export function getContainer () {
  if (!_container) {
    throw new Error('Container is not specified. Set it up with useContainer().')
  }
  return _container
}

export function resolve<T> (command: inversifyInterfaces.Newable<T>) {
  return getContainer().resolve<T>(command)
}
