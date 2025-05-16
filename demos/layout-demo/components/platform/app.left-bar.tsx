import { VStack } from "@chakra-ui/react"
import { GenericLayoutProps } from './common.types'
import { appShellConstants } from "./common.constants"
export const AppLeftBar = (props: GenericLayoutProps) => {
  return (
    <VStack width={`${appShellConstants.appLeftBar.width}px`} bg='gray.300' h={'full'}>
      {props.children}
    </VStack>
  );
};
