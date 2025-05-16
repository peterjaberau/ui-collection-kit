import { HStack } from "@chakra-ui/react"
import { GenericLayoutProps } from './common.types'
import { appShellConstants } from "./common.constants"

export const PageBody = (props: GenericLayoutProps) => {
  return (
    <HStack
      gap={0}
      css={{
        align: 'center',
        flexGrow: 1,
        width: 'full',
        backgroundColor: 'gray.300',
      }}
    >
      {props.children}
    </HStack>
  );
};
