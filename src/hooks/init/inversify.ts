import { Hook } from '@oclif/config'
import InversifyPlugin from '../../plugin'

const hook: Hook<'init'> = async function (opts) {

  this.config.plugins.push(new InversifyPlugin(this.config))

}

export default hook
