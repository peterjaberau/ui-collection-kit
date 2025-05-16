import { HStack } from "@chakra-ui/react"
import { appShellConstants } from "./common.constants"
import { GenericLayoutProps } from './common.types'

export const AppFooter = (props: GenericLayoutProps) => {
  return (
    <HStack
      css={{
        width: 'full',
        height: `${appShellConstants.appFooter.height}px`,
        backgroundColor: 'gray.100',
      }}
    >
      {props.children}
    </HStack>
  );
};
