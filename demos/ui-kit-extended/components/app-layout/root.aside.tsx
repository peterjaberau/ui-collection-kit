import { VStack } from "@chakra-ui/react"
import { LayoutThreePartsProps } from "#components/app-layout/types"
import { FlyoutPanel } from "#components/atlaskit-resize/flyout-panel"

export const RootAside = (props: LayoutThreePartsProps) => {
  const { side, start, center, end, css, propSizes, ...rest } = props

  console.log("side", side)

  const AsideRenderer = () => (
    <VStack css={css} {...rest}>
      {start && <>{start}</>}
      {center && <>{center}</>}
      {end && <>{end}</>}
    </VStack>
  )

  return (
    <>
      {side && (
        <FlyoutPanel propSizes={propSizes} side={side || "left"}>
          <AsideRenderer />
        </FlyoutPanel>
      )}
      {!side && <AsideRenderer />}
    </>
  )
}
