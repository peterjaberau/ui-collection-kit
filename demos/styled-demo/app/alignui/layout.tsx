import { Provider } from './provider';
import { VStack, Box, Theme } from '@chakra-ui/react';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Theme hasBackground={false} appearance='light' colorPalette='black'>
        <Provider>{children}</Provider>
      </Theme>
    </>
  );
}
