import * as Config from '@oclif/config'
import { CommandMetadata, getCommandMetadata } from './reflection'

export default class InversifyPlugin extends Config.Plugin {
  get hooks () {
    return {}
  }

  get topics () {
    return []
  }

  get commands (): Config.Command.Plugin[] {
    return getCommandMetadata().map((x: CommandMetadata) => {
      let command = x.target
      command.id = x.command
      command.load = () => {
        return command
      }
      return command
    })
  }
}
