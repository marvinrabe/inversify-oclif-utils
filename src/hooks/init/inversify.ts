import { Hook } from '@oclif/config'
import { interfaces as inversifyInterfaces } from 'inversify'
import { METADATA_KEY, TYPE, DUPLICATED_COMMAND_NAME } from '../../constants'
import { getContainer } from '../../index'
import { interfaces } from '../../interfaces'

function getControllersFromContainer (
  container: inversifyInterfaces.Container
) {
  if (container.isBound(TYPE.Command)) {
    return container.getAll<interfaces.Command>(TYPE.Command)
  } else {
    return []
  }
}

function getControllersFromMetadata () {
  let arrayOfControllerMetadata: interfaces.CommandMetadata[] = Reflect.getMetadata(
    METADATA_KEY.command,
    Reflect
  ) || []
  return arrayOfControllerMetadata.map((metadata) => metadata.target)
}

const hook: Hook<'init'> = async function (opts) {

  let constructors = getControllersFromMetadata()

  constructors.forEach((constructor) => {

    const name = constructor.name

    if (getContainer().isBoundNamed(TYPE.Command, name)) {
      throw new Error(DUPLICATED_COMMAND_NAME(name))
    }

    getContainer().bind(TYPE.Command)
      .to(constructor)
      .whenTargetNamed(name)
  })

  let controllers = getControllersFromContainer(
    getContainer()
  )

  controllers.forEach((controller: interfaces.Command) => {

    // ???

  })
}

export default hook
