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


export const CompositePanel = ({children, title}: any) => {

return (
  <Card.Root css={{width: '300px'}}>
    <Card.Header css={{ borderBottom: "1px solid", borderBottomColor: "border.emphasized" }}>
      <Card.Title >{title}</Card.Title>
    </Card.Header>
    <Card.Body css={{ maxH: '400px', overflow: 'hidden', overflowY: 'auto', }}>
        {children}
    </Card.Body>
  </Card.Root>
)
};

