import { VStack } from "@chakra-ui/react"
import { GenericLayoutProps } from './common.types'
import { appShellConstants } from "./common.constants"
export const AppRightBar = (props: GenericLayoutProps) => {
  return (
    <VStack width={`${appShellConstants.appRightBar.width}px`} bg='gray.300' h={'full'}>
      {props.children}
    </VStack>
  );
};
