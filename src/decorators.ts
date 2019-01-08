import { CommandMetadata } from './reflection'
import { METADATA_KEY } from './constants'

export function command (command: string) {
  return function (target: any) {

    let currentMetadata: CommandMetadata = {
      command: command,
      target: target
    }

    Reflect.defineMetadata(METADATA_KEY.command, currentMetadata, target)

    // We need to create an array that contains the metadata of all
    // the commands in the application, the metadata cannot be
    // attached to a command. It needs to be attached to a global.
    // We attach metadata to the Reflect object itself to avoid
    // declaring additonal globals. Also, the Reflect is avaiable
    // in both node and web browsers.
    const previousMetadata: CommandMetadata[] = Reflect.getMetadata(
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
