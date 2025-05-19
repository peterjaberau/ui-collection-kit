'use client';
import { defaultSystem } from '@ui-collection-kit/styling/saas/preset';
import {  ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import { getComponentSchemas, schemaRegister } from  '#components/registry/data'

export const Provider = (props: { children: React.ReactNode }) => {

  console.log('---schemaRegister----', JSON.stringify(schemaRegister))

  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute='class' disableTransitionOnChange>
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  );
};
