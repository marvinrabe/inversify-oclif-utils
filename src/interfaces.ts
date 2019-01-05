import { Command as OclifCommand } from '@oclif/command'

namespace interfaces {

  export interface CommandMetadata {
    target: any;
  }

  export interface Command extends OclifCommand {

  }

}

export { interfaces }
