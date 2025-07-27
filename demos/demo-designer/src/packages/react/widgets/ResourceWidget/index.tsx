'use client';
import React from 'react';
import {
  isResourceHost,
  isResourceList,
  IResourceLike,
  IResource,
} from '#packages/core';
import { isFn } from '#packages/shared';
import { SimpleGrid, Box, Button, Stack, HStack, Card, For } from "@chakra-ui/react"
import { observer } from "@formily/reactive-react"


export type SourceMapper = (resource: IResource) => React.ReactNode | any;

export interface IResourceWidgetProps {
  sources?: IResourceLike[];
  className?: string;
  defaultExpand?: boolean;
  children?: SourceMapper | React.ReactElement;
}

export const ResourceWidget: React.FC<IResourceWidgetProps> | any = observer(
  (props: any) => {
    const renderNode = (source: IResource) => {
      const { node, icon, title, thumb, span } = source
      return (
        <Button variant="subtle" data-designer-source-id={node.id} key={node.id}>
          {title || node.children[0]?.getMessage("title")}
        </Button>
      )
    }
    // @ts-ignore
    const sources: any = props.sources.reduce<IResource[]>((buf: any, source: any) => {
      if (isResourceList(source)) {
        return buf.concat(source)
      } else if (isResourceHost(source)) {
        return buf.concat(source.Resource)
      }
      return buf
    }, [])


    console.log('sources', sources)

    return (
      <Card.Root css={{ width: "300px", height: "100%" }}>
        <Card.Header css={{ borderBottom: "1px solid", borderBottomColor: "border.emphasized" }}>
          <Card.Title>Components</Card.Title>
        </Card.Header>
        <Card.Body maxH="calc(100vh - 100px)" overflowY="auto">
          <SimpleGrid columns={2} gap={2}>
            {sources && sources.map(isFn(props.children) ? props.children : renderNode)}
          </SimpleGrid>
        </Card.Body>
      </Card.Root>
    )
  }
)

