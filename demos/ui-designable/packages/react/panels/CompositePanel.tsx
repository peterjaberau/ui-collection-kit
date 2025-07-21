import React, { useEffect, useRef, useState } from 'react';
import { isValid } from '#packages/shared';
import cls from 'classnames';
import { IconWidget, TextWidget } from '../widgets';
import { usePrefix } from '../hooks';
import { IconButton, Stack, HStack, Card, Box } from '@chakra-ui/react';
import { LuPenTool, LuFolderTree, LuHistory, LuPin, LuPinOff, LuPanelLeftClose, LuPanelLeftOpen } from 'react-icons/lu';

export interface ICompositePanelProps {
  direction?: 'left' | 'right';
  showNavTitle?: boolean;
  defaultOpen?: boolean;
  defaultPinning?: boolean;
  defaultActiveKey?: number;
  activeKey?: number | string;
  onChange?: (activeKey: number | string) => void;
}
export interface ICompositePanelItemProps {
  shape?: 'tab' | 'button' | 'link';
  title?: React.ReactNode;
  icon?: React.ReactNode;
  key?: number | string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  extra?: React.ReactNode;
}

const iconsMap = {
  0: <LuPenTool />,
  1: <LuFolderTree />,
  2: <LuHistory />,
  pin: <LuPin />,
  unPin: <LuPinOff />,
  closeLeft: <LuPanelLeftClose />,
  openLeft: <LuPanelLeftOpen />

};

const parseItems = (
  children: React.ReactNode,
): React.PropsWithChildren<ICompositePanelItemProps>[] => {
  const items = [];
  React.Children.forEach(children, (child, index) => {
    if (child?.['type'] === CompositePanel.Item) {
      items.push({ key: child['key'] ?? index, ...child['props'] });
    }
  });
  return items;
};

const findItem = (
  items: React.PropsWithChildren<ICompositePanelItemProps>[],
  key: string | number,
) => {
  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    if (key === index) return item;
    if (key === item.key) return item;
  }
};

const getDefaultKey = (children: React.ReactNode) => {
  const items = parseItems(children);
  return items?.[0].key;
};

export const CompositePanel:
  | React.FC<ICompositePanelProps>
  | (any & {
      Item: React.FC<ICompositePanelItemProps>;
    }) = (props) => {
  const prefix = usePrefix('composite-panel');
  const [activeKey, setActiveKey] = useState<string | number>(
    props.defaultActiveKey ?? getDefaultKey(props.children),
  );
  const activeKeyRef = useRef(null);
  const [visible, setVisible] = useState(props.defaultOpen ?? true);
  const items = parseItems(props.children);
  const currentItem = findItem(items, activeKey);
  const content = currentItem?.children;

  activeKeyRef.current = activeKey;

  useEffect(() => {
    if (isValid(props.activeKey)) {
      if (props.activeKey !== activeKeyRef.current) {
        setActiveKey(props.activeKey);
      }
    }
  }, [props.activeKey]);

  const renderContent = () => {
    if (!content || !visible) return;
    return (
      <Stack
        w='300px'
        h='full'
        boxSizing='content-box'
        borderRight='1px solid'
        borderColor='border.muted'
      >
        <Card.Root border='none'>
          <Card.Header p={0} >
            <HStack justify='space-between'>
              <HStack flex={1} px={4}>
                <Card.Title m={0}>{currentItem.title}</Card.Title>
              </HStack>
              <HStack>
                {currentItem.extra}
                <IconButton
                  variant='ghost'
                  size='sm'
                  onClick={() =>  setVisible(false)}
                >
                  {iconsMap.closeLeft}
                </IconButton>
              </HStack>
            </HStack>

          </Card.Header>
          <Card.Body p={0}>
            {content}
          </Card.Body>
        </Card.Root>
      </Stack>
    );
  };

  return (
    <HStack alignItems='flex-start' gap={0}>
      <Stack
        flex={1}
        h='full'
        borderRight='1px solid'
        borderColor='border.muted'
      >
        {items.map((item, index) => {
          return (
            <IconButton
              key={index}
              variant={activeKey === item.key ? 'surface' : 'ghost'}
              onClick={(e: any) => {
                if (activeKey === item.key) {
                  setVisible(!visible);
                } else {
                  setVisible(true);
                  setActiveKey(item.key);
                }
              }}
            >
              {iconsMap[index]}
            </IconButton>
          );
        })}
      </Stack>
      {renderContent()}
    </HStack>
  );
};

CompositePanel.Item = () => {
  return <React.Fragment />;
};
