import * as Config from '@oclif/config'
import { interfaces } from './interfaces'
import Container from './container'

export default class InversifyPlugin extends Config.Plugin {
  get hooks () {
    return {}
  }

  get topics () {
    return []
  }

  get commandIDs (): string[] {
    return Container.configs.map((c: interfaces.CommandMetadata) => c.command)
  }

  get commands (): Config.Command.Plugin[] {
    return Container.configs.map((x: interfaces.CommandMetadata) => {
      let command = x.target
      command.id = x.command
      command.load = () => {
        return command
      }
      return command
    })
  }
}
