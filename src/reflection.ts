const METADATA_KEY = {
  command: 'container-oclif-utils:command'
}

interface CommandMetadata {
  command: string
  target: any
}

export function getCommandMetadata (): CommandMetadata[] {
  return Reflect.getMetadata(
    METADATA_KEY.command,
    Reflect
  ) || []
}

export function addCommandMetadata (newMetadata: CommandMetadata): void {
  Reflect.defineMetadata(
    METADATA_KEY.command,
    [newMetadata, ...getCommandMetadata()],
    Reflect
  )
}
