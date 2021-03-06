import { decorate, injectable, unmanaged } from 'inversify'
import { Command as OclifCommand } from '@oclif/command'
import * as Config from '@oclif/config'
import { resolve } from './container'

decorate(injectable(), OclifCommand)
decorate(unmanaged() as ParameterDecorator, OclifCommand, 0)
decorate(unmanaged() as ParameterDecorator, OclifCommand, 1)

export abstract class Command extends OclifCommand {
  constructor () {
    super([], {} as Config.IConfig)
  }

  static run: Config.Command.Class['run'] = async function (this: Config.Command.Class, argv?: string[], opts?) {
    const command = resolve(this) as Command

    command.argv = argv || process.argv.slice(2)
    command.config = await Config.load(opts || module.parent && module.parent.parent && module.parent.parent.filename || __dirname)

    return command._run()
  }
}
