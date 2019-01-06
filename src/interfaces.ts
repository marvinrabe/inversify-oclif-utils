import { Command as OclifCommand } from '@oclif/command'
import { decorate, injectable } from 'inversify'

namespace interfaces {

  decorate(injectable(), OclifCommand)

  export interface CommandMetadata {
    command: string;
    target: any;
  }

  export interface Command extends OclifCommand {

  }

}

export { interfaces }
