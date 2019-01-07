import { injectable } from 'inversify'
import { Command as OclifCommand } from '@oclif/command'
import * as Config from '@oclif/config'

@injectable()
export abstract class Command extends OclifCommand {
  constructor (argv: string[], config: Config.IConfig) {
    super(argv, config)
  }

  static run: Config.Command.Class['run'] = async function (this: Config.Command.Class, argv?: string[], opts?) {
    if (!argv) argv = process.argv.slice(2)
    // Register argv

    const config = await Config.load(opts || module.parent && module.parent.parent && module.parent.parent.filename || __dirname)
    // Register config

    let cmd = new this(argv, config)
    // load from container

    return cmd._run(argv)
  }
}
