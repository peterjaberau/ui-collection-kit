
import * as Chakra from "@chakra-ui/react"
import * as Icons from '@ui-collection-kit/icons'

const iconNames = Object.keys(Icons);
type IconName = (typeof iconNames)[number]
type IconsExposed = typeof Icons



type IconRegistry = Partial<Record<IconName, IconsExposed[keyof IconsExposed]>>

function buildIconRegistry(names: readonly IconName[]) {
  const registry: IconRegistry = {}

  for (const name of names) {
    const maybeIcon = Icons[name as keyof IconsExposed]

    registry[name] = maybeIcon
  }

  return registry
}

//@ts-ignore
export const iconsRegistry: any = buildIconRegistry(iconNames)
