import { useSelector } from '@xstate/react'
import { GlobalContext } from '../provider'
import { useFlyoutActor } from "#actors/hooks/useFlyoutActor"


export function useFlyoutManagerActor() {
  const flyoutManagerActorRef = GlobalContext.useActorRef().system.get('flyout-manager');
  const flyoutManagerState: any = useSelector(flyoutManagerActorRef, state => state)
  const sendToFlyoutManager = flyoutManagerActorRef.send

  const flyouts = flyoutManagerState.context.plugins

  const flayoutManager = flyoutManagerState.context.plugin

  const props = flayoutManager.props
  const fixtures = flayoutManager.fixtures

  const getFlyoutActor = ({ id }: any) => {
    return flyouts.find((flyout: any) => flyout.id === id)
  }
  const getFixture = ({ id }: any) => {
    return fixtures[id]
  }
  const isReady = flyoutManagerState.context.status.isReady || false


  return {
    flyoutManagerActorRef,
    flyoutManagerState,
    sendToFlyoutManager,

    flyouts,
    getFlyoutActor,
    isReady,

    props,
    fixtures,
    getFixture
  }
}
