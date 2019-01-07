import { Container as InversifyContainer, interfaces as inversifyInterfaces } from 'inversify'
import { METADATA_KEY } from './constants'
import { CommandMetadata } from './interfaces'

class Container {

  private _container: inversifyInterfaces.Container | null = null

  get inversify () {
    if (!this._container) {
      this._container = new InversifyContainer()
    }
    return this._container
  }

  set inversify (container: inversifyInterfaces.Container) {
    this._container = container
  }

  get configs (): CommandMetadata[] {
    return Reflect.getMetadata(
      METADATA_KEY.command,
      Reflect
    ) || []
  }

  bindConstant<T> (symbol: symbol, value: T) {
    if (this.inversify.isBound(symbol)) {
      this.inversify.rebind<T>(symbol).toConstantValue(value)
    } else {
      this.inversify.bind<T>(symbol).toConstantValue(value)
    }
  }

}

export const container = new Container()

export default container
