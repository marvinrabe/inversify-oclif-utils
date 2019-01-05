import { decorate, injectable } from 'inversify'
import { interfaces } from './interfaces'
import { METADATA_KEY } from './constants'

export function command () {
  return function (target: any) {

    let currentMetadata: interfaces.CommandMetadata = {
      target: target
    }

    decorate(injectable(), target)
    Reflect.defineMetadata(METADATA_KEY.command, currentMetadata, target)

    // We need to create an array that contains the metadata of all
    // the controllers in the application, the metadata cannot be
    // attached to a controller. It needs to be attached to a global
    // We attach metadata to the Reflect object itself to avoid
    // declaring additonal globals. Also, the Reflect is avaiable
    // in both node and web browsers.
    const previousMetadata: interfaces.CommandMetadata[] = Reflect.getMetadata(
      METADATA_KEY.command,
      Reflect
    ) || []

    const newMetadata = [currentMetadata, ...previousMetadata]

    Reflect.defineMetadata(
      METADATA_KEY.command,
      newMetadata,
      Reflect
    )

  }
}
