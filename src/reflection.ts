import { METADATA_KEY } from './constants'

export interface CommandMetadata {
  command: string
  target: any
}

export function getCommandMetadata (): CommandMetadata[] {
  return Reflect.getMetadata(
    METADATA_KEY.command,
    Reflect
  ) || []
}
