import { VStack, Box } from "@chakra-ui/react"
import { ReactNode } from "react"


interface AppBarInnerProps {
  start?: ReactNode | any;
  center?: ReactNode | any;
  end?: ReactNode | any;
  width?: number;
  css?: any;
  [key: string]: any;
}


export const AppBarInner = (props: AppBarInnerProps) => {
  const { start, center, end, width, ...rest} = props

  return (
    <VStack
      width={ width ? `${width}px` : '40px'}
      justify={'space-between'}
      bg='gray.300'
      h={'full'}
    >
      <Box bg='gray.200'>{start || 'start'}</Box>
      <Box bg='gray.200'>{center || 'center'}</Box>
      <Box bg='gray.200'>{end || 'end'}</Box>
    </VStack>
  );
};
