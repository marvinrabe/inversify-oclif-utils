export const TYPE = {
  Command: Symbol.for('Command')
}

export const METADATA_KEY = {
  command: 'inversify-oclif-utils:command'
}

export const DUPLICATED_COMMAND_NAME = (name: string) =>
  `Two commands cannot have the same name: ${name}`
