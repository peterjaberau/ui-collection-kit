import { useSelector } from "@xstate/react"
import { useFlyoutManagerActor } from "#actors/hooks/useFlyoutManagerActor"
import { transformNumbersToPixels } from "./utils"

export function useFlyoutActor({ id, actorRef }: any) {
  const { getFlyoutActor, getFixture, fixtures } = useFlyoutManagerActor()

  const flyoutActorRef = id ? getFlyoutActor({ id: id }) : actorRef

  const sendToFlyout = flyoutActorRef?.send
  const flyoutState: any = useSelector(flyoutActorRef, (state) => state)

  const flyoutId = flyoutState.context.id
  const flyout = flyoutState.context.plugin

  const name = flyoutState.context.plugin.name
  const profile = flyout.profile
  const displayName = profile.displayName

  const props = flyout.props

  const flyoutMethodsList = flyout.methods

  const isActive = flyout.active
  const isReadOnly = flyout.readonly

  const isHorizontal = name === "topFlyout" || name === "bottomFlyout"
  const isVertical = name === "leftFlyout" || name === "rightFlyout"

  const isReady = flyoutState.matches("idle")

  const fixture = getFixture({ id: flyoutId })
  const placement = fixture.placement
  const axis = fixture.axis


  // const convertBulkToPixel = (value: any) => {
  //   const keys = Object.keys(value)
  //   return keys.forEach((key) => {
  //     value[key] = value[key] + 'px'
  //   })
  // }


  // const sizes = isVertical
  //   ? {
  //       width: props.width || fixture.sizes.width,
  //       maxWidth: props.maxWidth || fixture.sizes.maxWidth,
  //     }
  //   : {
  //       height: props.height || fixture.sizes.height,
  //       maxHeight: props.maxHeight || fixture.sizes.maxHeight,
  //     }


  const pixelPlacements = transformNumbersToPixels(fixture.placement)
  const pixelSizes = transformNumbersToPixels(fixture.sizes)

  const cursor = isVertical ? "ew-resize" : "ns-resize"

  const handlerPlacement = isVertical ? { top: 0, bottom: 0 } : { left: 0, right: 0 }



  return {
    flyoutActorRef,
    flyoutState,
    sendToFlyout,

    id: flyoutId,
    flyout,

    name,
    profile,
    displayName,

    props,
    flyoutMethodsList,

    placement,
    // sizes,
    axis,
    // allFixtures: fixtures,
    // pixelSizes,
    // pixelPlacements,

    fixture,
    pixelPlacements,
    pixelSizes,
    cursor,
    handlerPlacement,

    isVertical,
    isHorizontal,

    isActive,
    isReadOnly,
    isReady,
  }
}
