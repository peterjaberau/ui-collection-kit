import { VStack } from "@chakra-ui/react"
import { GenericLayoutProps } from './common.types'

export const AppContent = (props: GenericLayoutProps) => {
  return (
    <VStack flex={1} overflow={'auto'} bg='gray.400' h={'full'}>
      {props.children}
    </VStack>
  );
};
