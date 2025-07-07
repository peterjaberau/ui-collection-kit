import { useSystemRegistry } from "#packages/actors/hooks/useSystemRegistry"
import { useSystemIconsRegistry } from "#packages/actors/hooks/useSystemIconsRegistry"
import { For, Stack, Button, Flex, Wrap, WrapItem, IconButton } from "@chakra-ui/react"

export const DemoRegistryList = () => {
  const { registryNames, registryComponent } = useSystemRegistry()

  return (
    <>
        <Wrap p={2} w={'full'}>
          <For each={registryNames}>{(name) => (
            <WrapItem key={name} >
              <Button  size={'2xs'}>{name}</Button>
            </WrapItem>
          )}</For>
        </Wrap>
    </>
  )
}


export const DemoIconsRegistryList = () => {
  const { iconRegistryNames, iconsRegistry } = useSystemIconsRegistry()

  return (
    <>
      <Wrap p={2} w={'full'}>
        {
          Object.entries(iconsRegistry).map(
            ([name, Icon]: any) => {
              if (!name.endsWith("Icon")) {
                return null
              }
              return (
                <WrapItem key={name}>
                  <IconButton variant='outline'>
                    <Icon width="32" height="32" fill="black" color="black" />
                  </IconButton>
                </WrapItem>
              )
            }
          )
        }
      </Wrap>
    </>
  )
}
