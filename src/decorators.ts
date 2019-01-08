import { addCommandMetadata } from './reflection'

export function command (command: string) {
  return function (target: any) {

    addCommandMetadata({
      command: command,
      target: target
    })

  }
}
