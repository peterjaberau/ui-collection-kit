import { HStack } from "@chakra-ui/react"
import { appShellConstants } from "./common.constants"
import { GenericLayoutProps } from './common.types'

export const AppHeader = (props: GenericLayoutProps) => {
  return (
    <HStack
      css={{
        width: 'full',
        height: `${appShellConstants.appHeader.height}px`,
        backgroundColor: 'gray.100',
      }}
    >
      {props.children}
    </HStack>
  );
};
