import { ICustomEvent } from '#packages/shared'
import { AbstractMutationNodeEvent } from './AbstractMutationNodeEvent'

export class CloneNodeEvent
  extends AbstractMutationNodeEvent
  implements ICustomEvent
{
  type = 'clone:node'
}
