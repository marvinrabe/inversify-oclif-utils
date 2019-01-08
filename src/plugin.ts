import * as Config from '@oclif/config'
import { getCommandMetadata } from './reflection'

export default class InversifyPlugin extends Config.Plugin {
  get hooks () {
    return {}
  }

  get topics () {
    return []
  }

  get commands (): Config.Command.Plugin[] {
    return getCommandMetadata().map(({ target, command }) => {
      target.id = command
      target.load = () => target
      return target
    })
  }
}
