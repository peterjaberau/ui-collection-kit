import { VStack } from "@chakra-ui/react"
import { GenericLayoutProps } from './common.types'
import { appShellConstants } from "./common.constants"

export const PageLeftAside = (props: GenericLayoutProps) => {
  return (
    <VStack width={`${appShellConstants.pageLeftAside.width}px`} bg='gray.500' h={'full'}>
      {props.children}
    </VStack>
  );
};
