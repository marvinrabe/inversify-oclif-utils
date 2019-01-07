import { Container as InversifyContainer, interfaces as inversifyInterfaces } from 'inversify'

let _container!: inversifyInterfaces.Container

export function useContainer (container: inversifyInterfaces.Container) {
  _container = container
}

export function getContainer () {
  if (!_container) {
    _container = new InversifyContainer()
  }
  return _container
}
