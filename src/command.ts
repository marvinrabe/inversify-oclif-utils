import { inject, injectable } from 'inversify'
import { Command as OclifCommand } from '@oclif/command'
import * as Config from '@oclif/config'
import Container from './container'
import { TYPE } from './constants'

@injectable()
export abstract class Command extends OclifCommand {
  constructor (
    @inject(TYPE.OclifArgv) argv: string[],
    @inject(TYPE.OclifConfig) config: Config.IConfig
  ) {
    super(argv, config)
  }

  static run: Config.Command.Class['run'] = async function (this: Config.Command.Class, argv?: string[], opts?) {

    const args = argv || process.argv.slice(2)

    Container.bindConstant(TYPE.OclifArgv, args)
    Container.bindConstant(TYPE.OclifConfig, await Config.load(opts || module.parent && module.parent.parent && module.parent.parent.filename || __dirname))

    return Container.inversify.resolve(this)._run(args)
  }
}
