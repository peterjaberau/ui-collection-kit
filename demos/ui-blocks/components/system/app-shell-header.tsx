'use client';
import { Flex, Button, SimpleGrid, Badge, Stack } from '@chakra-ui/react';
import { useAppActorRef, useAppActorSelector } from '#machines/context';

const themeSelector = (snapshot: any) => snapshot.context.theme;
const appStateSelector = (snapshot: any) => snapshot;
const isReadySelector = (snapshot: any) => snapshot.matches('ready');
const themeConfigOptionsSelector = (snapshot: any) =>
  snapshot.context.configOptions.theme;

export const AppShellHeader = () => {
  const appActorRef = useAppActorRef();
  const appState = useAppActorSelector(appStateSelector);
  const isReady = useAppActorSelector(isReadySelector);
  const theme = useAppActorSelector(themeSelector);
  const themeConfigOptions = useAppActorSelector(themeConfigOptionsSelector);

  const themeConfigOptionsKeys = Object.keys(themeConfigOptions);

  return (
    <SimpleGrid columns={2}>
      <Flex justify={'flex-start'} align={'center'} gap={4}>
        {themeConfigOptionsKeys.map((item) => (
          <Button
            key={item}
            size={'2xs'}
            onClick={() =>
              appActorRef.send({
                type: 'set.theme',
                payload: { scope: 'theme', name: item },
              })
            }
          >
            {item}
          </Button>
        ))}

      </Flex>
      <Flex justify={'flex-end'} align={'center'}>
        <Stack direction='row'>
          <Badge variant='outline'>{appState.value}</Badge>
          <Badge variant='solid'>{isReady && theme.activeThemeName}</Badge>
          <Badge variant='subtle'>
            {isReady && theme.activeThemeOverrides.accentColor}
          </Badge>
          <Badge variant='surface'>
            {isReady && theme.activeThemeOverrides.fontFamily}
          </Badge>
          <Badge variant='surface'>
            {isReady && theme.activeThemeOverrides.radius}
          </Badge>
        </Stack>
      </Flex>
    </SimpleGrid>
  );
};
