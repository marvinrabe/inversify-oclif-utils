import { Command as OclifCommand } from '@oclif/command'

namespace interfaces {

  export interface CommandMetadata {
    command: string;
    target: any;
  }

  export interface Command extends OclifCommand {

  }

}

export { interfaces }
