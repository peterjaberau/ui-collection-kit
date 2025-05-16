import { HStack } from "@chakra-ui/react"
import { GenericLayoutProps } from './common.types'

export const AppBody = (props: GenericLayoutProps) => {
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
