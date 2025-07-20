import React, { useEffect, useRef, useState } from 'react';
import { isValid } from '#packages/shared';
import cls from 'classnames';
import { IconWidget, TextWidget } from '../widgets';
import { usePrefix } from '../hooks';
import { Stack, HStack, Box, IconButton } from '@chakra-ui/react';

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
  const [pinning, setPinning] = useState(props.defaultPinning ?? false);
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
        data-id='composite-panel-tabs-content'
        h='full'
        css={{
          h: 'full',
          width: '300px',
          borderRight: '1px Solid',
          borderRightColor: 'border',
          '&.pinning': {
            position: 'absolute',
            zIndex: 1,
            left: '100%',
            top: 0,
            boxShadow: 'md',
            borderRight: '1px solid transparent',
          },
        }}
      >
        <HStack
          justify='between'
          css={{
            justifyContent: 'space-between',
            borderBottom: '1px solid',
            borderBottomColor: 'border',
            padding: '14px 7px',
          }}
        >
          <Box flex={1} fontSize='20px'>
            <TextWidget>{currentItem.title}</TextWidget>
          </Box>
          <HStack justify='flex-end'>
            <Box>{currentItem.extra}</Box>
            {!pinning && (
              <IconButton variant='ghost' size='sm'>
                <IconWidget
                  infer='PushPinOutlined'
                  className={prefix + '-tabs-header-pin'}
                  onClick={() => {
                    setPinning(!pinning);
                  }}
                />
              </IconButton>
            )}
            {pinning && (
              <IconButton variant='ghost' size='sm'>
                <IconWidget
                  infer='PushPinFilled'
                  className={prefix + '-tabs-header-pin-filled'}
                  onClick={() => {
                    setPinning(!pinning);
                  }}
                />
              </IconButton>
            )}
            <IconButton variant='ghost' size='sm'>
              <IconWidget
                infer='Close'
                className={prefix + '-tabs-header-close'}
                onClick={() => {
                  setVisible(false);
                }}
              />
            </IconButton>
          </HStack>
        </HStack>
        <Stack
          h='full'
          css={{
            flexGrow: 2,
            flexShrink: 2,
            overflow: 'auto',
            overflowX: 'hidden',
          }}
        >
          {content}
        </Stack>
      </Stack>
    );
  };

  return (
    <HStack
      data-id='composite-panel'
      position='relative'
      userSelect='none'
      zIndex={2}
      h='full'
    >
      <Stack
        data-id='composite-panel-tabs'
        position='relative'
        zIndex={2}
        borderRight='1px solid'
        borderRightColor='border'
        width='50px'
        h='full'
      >
        {items.map((item, index) => {
          const takeTab = () => {
            if (item.href) {
              return <a href={item.href}>{item.icon}</a>;
            }
            return (
              <IconButton size='sm' variant='ghost'>
                <IconWidget
                  tooltip={
                    props.showNavTitle
                      ? null
                      : {
                          title: <TextWidget>{item.title}</TextWidget>,
                          placement:
                            props.direction === 'right' ? 'left' : 'right',
                        }
                  }
                  infer={item.icon}
                />
              </IconButton>
            );
          };
          const shape = item.shape ?? 'tab';
          const Comp = shape === 'link' ? 'a' : 'div';
          return (
            <Comp
              className={cls(prefix + '-tabs-pane', {
                active: activeKey === item.key,
              })}
              key={index}
              href={item.href}
              onClick={(e: any) => {
                if (shape === 'tab') {
                  if (activeKey === item.key) {
                    setVisible(!visible);
                  } else {
                    setVisible(true);
                  }
                  if (!props?.activeKey || !props?.onChange)
                    setActiveKey(item.key);
                }
                item.onClick?.(e);
                props.onChange?.(item.key);
              }}
            >
              {takeTab()}
              {props.showNavTitle && item.title ? (
                <div className={prefix + '-tabs-pane-title'}>
                  <TextWidget>{item.title}</TextWidget>
                </div>
              ) : null}
            </Comp>
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
