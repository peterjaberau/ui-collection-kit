import React from 'react';
import { Stack, HStack, Box, IconButton } from '@chakra-ui/react';

export interface IWorkspaceItemProps {
  style?: React.CSSProperties;
  flexable?: boolean;
}

export const WorkspacePanel: React.FC & {
  Item?: React.FC<IWorkspaceItemProps>;
} | any = (props: any) => {
  return (
    <Stack
      data-id='workspace-panel'
      flex={1}
      h='full'
      overflow='hidden'
      p={1}
      boxSizing='border-box'
      position='relative'
      zIndex={1}
    >
      {props.children}
    </Stack>
  );
};

WorkspacePanel.Item = (props: any) => {

  console.log('WorkspacePanel.Item---', props)
  return (
    <HStack
      data-id='workspace-panel-item'
      justify='space-between'
      position='relative'
      mb={1}
      padding='0px 4px'
      style={{
        ...props.style,
      }}
      flexGrow={props.flexable ? 1 : 0}
      flexShrink={props.flexable ? 1 : 0}

    >
      {props.children}
    </HStack>
  );
};
