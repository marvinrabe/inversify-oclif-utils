export const METADATA_KEY = {
  command: 'container-oclif-utils:command'
}

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
