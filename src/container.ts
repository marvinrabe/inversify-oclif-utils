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

export function bindConstant<T> (symbol: symbol, value: T) {
  if (getContainer().isBound(symbol)) {
    getContainer().rebind<T>(symbol).toConstantValue(value)
  } else {
    getContainer().bind<T>(symbol).toConstantValue(value)
  }
}
