'use client';
import React, { useState } from 'react';
import {
  isResourceHost,
  isResourceList,
  IResourceLike,
  IResource,
} from '#packages/core';
import { isFn } from '#packages/shared';
import { observer } from '@formily/reactive-react';
import { usePrefix } from '../../hooks';
import { IconWidget } from '../IconWidget';
import { TextWidget } from '../TextWidget';
import cls from 'classnames';
// import './styles.less';
import {
  Stack,
  HStack,
  Box,
  IconButton,
  Text,
  Center,
  Collapsible,
  Button,
  SimpleGrid,
  Image,
  Icon,
} from '@chakra-ui/react';

export type SourceMapper = (resource: IResource) => React.ReactNode | any;

export interface IResourceWidgetProps {
  title: React.ReactNode;
  sources?: IResourceLike[];
  className?: string;
  defaultExpand?: boolean;
  children?: SourceMapper | React.ReactElement;
}

export const ResourceWidget: React.FC<IResourceWidgetProps> | any = observer(
  (props: any) => {
    const prefix = usePrefix('resource');
    const [expand, setExpand] = useState(props.defaultExpand);

    const renderNode = (source: IResource) => {
      const { node, icon, title, thumb, span } = source;
      return (
        <Box p={2}>
          <Stack
            p={2}
            alignItems='center'
            justify='center'
            bg='bg.muted'
            key={node.id}
            data-designer-source-id={node.id}
            rounded='sm'
            shadow='sm'
            border='border'
          >
            {thumb && (
              <Image height='40px' maxHeight='40px' fit='contain' src={thumb} />
            )}
            {icon && React.isValidElement(icon) ? (
              <>{icon}</>
            ) : (
              <Icon css={{ width: '150px', height: '40px' }}>
                <IconWidget infer={icon} />
              </Icon>
            )}
            <Box fontSize='12px'>
              {
                <TextWidget>
                  {title || node.children[0]?.getMessage('title')}
                </TextWidget>
              }
            </Box>
          </Stack>
        </Box>
      );
    };
    // @ts-ignore
    const sources = props.sources.reduce<IResource[]>((buf, source) => {
      if (isResourceList(source)) {
        return buf.concat(source);
      } else if (isResourceHost(source)) {
        return buf.concat(source.Resource);
      }
      return buf;
    }, []);

    return (
      <Collapsible.Root open={expand} onOpenChange={(e) => setExpand(e.open)}>
        <Collapsible.Trigger asChild>
          <HStack w='full' bg='bg.muted' py={2} px={2}>
            <IconWidget infer='Expand' size={10} />
            <TextWidget>{props.title}</TextWidget>
          </HStack>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <SimpleGrid w={'full'} columns={3}>
            {sources.map((source) =>
              isFn(props.children)
                ? props.children(source)
                : renderNode(source),
            )}
          </SimpleGrid>
        </Collapsible.Content>
      </Collapsible.Root>
    );
  },
);

ResourceWidget.defaultProps = {
  defaultExpand: true,
};
