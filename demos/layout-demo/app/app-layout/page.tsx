'use client';
import { Box, Badge, For } from '@chakra-ui/react';
import AppLayout from '#platform/app-layout';
import { UIScenarios } from '#platform/ui-atoms/ui.scenarios';

const appLayoutConfig: any = {
  header: {
    start: [
      {
        name: 'badge',
        props: {
          colorPalette: 'red',
          text: 'header.start',
          variant: 'outline',
        }
      },
      {
        name: 'button',
        props: {
          text: 'Action Button',
          size: 'md',
          variant: 'outline',
          onClick: () => {
            console.log('Action Button Clicked');
          },
        },
      },
      {
        name: 'icon-button',
        props: {
          iconName: 'camera',
          size: 'xs',
          variant: 'preset',
          onClick: () => {
            console.log('Search clicked');
          },
        },
      },
      {
        name: 'menu',
        props: {
          defaultOpen: true,
          text: 'Menu',
          closeOnSelect: true,
          variant: 'solid',
          colorPalette: 'blue',
          size: 'sm',
          triggerSize: '2xs',
          items: [
            {
              label: 'New Text File',
              value: 'new-file',
            },
            {
              label: 'New File...',
              value: 'new-win',
            },
            {
              label: 'Open File...',
              value: 'open-file',
            },
            {
              label: 'Export',
              value: 'export',
            },
          ],
        }
      }

    ],
    center: [
      {
        name: 'action-button',
        props: {
          text: 'Action Button',
          size: '2xs',
          variant: 'solid',
          onClick: () => {
            console.log('Action Button Clicked');
          },
        },
      },
      {
        name: 'action-icon-button',
        props: {
          iconName: 'camera',
          size: '2xs',
          variant: 'solid',
          onClick: () => {
            console.log('Search clicked');
          },
        },
      },
    ],
    end: [
      {
        name: 'action-button',
        props: {
          text: 'Action Button',
          size: '2xs',
          variant: 'surface',
          onClick: () => {
            console.log('Action Button Clicked');
          },
        },
      },
      {
        name: 'action-icon-button',
        props: {
          iconName: 'camera',
          size: '2xs',
          variant: 'surface',
          onClick: () => {
            console.log('Search clicked');
          },
        },
      },
    ],
  },
  footer: {
    start: [],
    center: [],
    end: [],
  },
  left: {
    start: [],
    center: [],
    end: [],
  },
  right: {
    start: [],
    center: [],
    end: [],
  },
  leftBar: {
    start: [],
    center: [],
    end: [],
  },
  rightBar: {
    start: [],
    center: [],
    end: [],
  },
};

const GroupRenderer = ({ component, part }: any) => {
  const slots: any[] = appLayoutConfig[component][part];
  return (
    <For each={slots}>
      {(item, index) => (
        <UIScenarios
          key={`${component}-${part}-${index}`}
          name={item.name}
          input={item.props}
        />
      )}
    </For>
  );
};

export default function Page() {


  return (
    <>
      <AppLayout
        header={{
          start: (
            <>
              <GroupRenderer component='header' part='start' />

              <Badge variant='solid'>header</Badge>
              <Badge variant='outline'>start</Badge>
            </>
          ),
          center: (
            <>
              <Badge variant='solid'>header</Badge>
              <Badge variant='outline'>center</Badge>
            </>
          ),
          end: (
            <>
              <Badge variant='solid'>header</Badge>
              <Badge variant='outline'>end</Badge>
            </>
          ),
        }}
        footer={{
          start: (
            <>
              <Badge variant='solid'>footer</Badge>
              <Badge variant='outline'>start</Badge>
            </>
          ),
          center: (
            <>
              <Badge variant='solid'>footer</Badge>
              <Badge variant='outline'>center</Badge>
            </>
          ),
          end: (
            <>
              <Badge variant='solid'>footer</Badge>
              <Badge variant='outline'>end</Badge>
            </>
          ),
        }}
        leftBar={{
          start: (
            <>
              <Badge variant='solid'>LB</Badge>
              <Badge variant='outline'>start</Badge>
            </>
          ),
          center: (
            <>
              <Badge variant='solid'>LB</Badge>
              <Badge variant='outline'>center</Badge>
            </>
          ),
          end: (
            <>
              <Badge variant='solid'>LB</Badge>
              <Badge variant='outline'>end</Badge>
            </>
          ),
        }}
        left={{
          start: (
            <>
              <Badge variant='solid'>Left</Badge>
              <Badge variant='outline'>start</Badge>
            </>
          ),
          center: (
            <>
              <Badge variant='solid'>Left</Badge>
              <Badge variant='outline'>center</Badge>
            </>
          ),
          end: (
            <>
              <Badge variant='solid'>Left</Badge>
              <Badge variant='outline'>end</Badge>
            </>
          ),
        }}
        main={<div>root.main</div>}
        rightBar={{
          start: (
            <>
              <Badge variant='solid'>RB</Badge>
              <Badge variant='outline'>start</Badge>
            </>
          ),
          center: (
            <>
              <Badge variant='solid'>RB</Badge>
              <Badge variant='outline'>center</Badge>
            </>
          ),
          end: (
            <>
              <Badge variant='solid'>RB</Badge>
              <Badge variant='outline'>end</Badge>
            </>
          ),
        }}
        right={{
          start: (
            <>
              <Badge variant='solid'>Right</Badge>
              <Badge variant='outline'>start</Badge>
            </>
          ),
          center: (
            <>
              <Badge variant='solid'>Right</Badge>
              <Badge variant='outline'>center</Badge>
            </>
          ),
          end: (
            <>
              <Badge variant='solid'>Right</Badge>
              <Badge variant='outline'>end</Badge>
            </>
          ),
        }}
      />
    </>
  );
}
