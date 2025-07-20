import React, { useEffect, useState, useRef } from 'react';
import { TreeNode } from '#packages/core';
import { useHover, useSelection, usePrefix } from '../../hooks';
import { IconWidget } from '../IconWidget';
import { NodeTitleWidget } from '../NodeTitleWidget';
import { Button, chakra } from '@chakra-ui/react';
import { observer } from '@formily/reactive-react';

const useMouseHover = <T extends { current: HTMLElement }>(
  ref: T,
  enter?: () => void,
  leave?: () => void,
) => {
  useEffect(() => {
    let timer = null;
    let unmounted = false;
    const onMouseOver = (e: MouseEvent) => {
      const target: HTMLElement = e.target as any;
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (unmounted) return;
        if (ref?.current?.contains(target)) {
          enter && enter();
        } else {
          leave && leave();
        }
      }, 100);
    };

    document.addEventListener('mouseover', onMouseOver);
    return () => {
      unmounted = true;
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);
};

export interface ISelectorProps {
  node: TreeNode;
  style?: React.CSSProperties;
}

export const Selector: React.FC<ISelectorProps> = observer(({ node }) => {
  const hover = useHover();
  const [expand, setExpand] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selection = useSelection();
  const prefix = usePrefix('aux-selector');
  const renderIcon = (node: TreeNode) => {
    const icon = node.designerProps.icon;
    if (icon) {
      return <IconWidget infer={icon} />;
    }
    if (node === node.root) {
      return <IconWidget infer='Page' />;
    } else if (node.designerProps?.droppable) {
      return <IconWidget infer='Container' />;
    }
    return <IconWidget infer='Component' />;
  };

  const renderMenu = () => {
    const parents = node.getParents();
    return (
      <chakra.div
        className={'aux-selector-menu'}
        css={{
          position: 'absolute',
          top: '100%',
          left: 0,
        }}
      >
        {parents.slice(0, 4).map((parent) => {
          return (
            <Button
              key={parent.id}
              size='2xs'
              variant='outline'
              onClick={() => {
                selection.select(parent.id);
              }}
              onMouseEnter={() => {
                hover.setHover(parent);
              }}
            >
              {renderIcon(parent)}
              <chakra.span css={{ transform: 'scale(0.85)', marginLeft: 2 }}>
                <NodeTitleWidget node={parent} />
              </chakra.span>
            </Button>
          );
        })}
      </chakra.div>
    );
  };

  useMouseHover(
    ref,
    () => {
      setExpand(true);
    },
    () => {
      setExpand(false);
    },
  );

  return (
    <chakra.div ref={ref} data-id='aux-selector'>
      <Button
        data-id='aux-selector-title'
        size='2xs'
        variant='outline'
        onMouseEnter={() => {
          hover.setHover(node);
        }}
      >
        {renderIcon(node)}
        <span>
          <NodeTitleWidget node={node} />
        </span>
      </Button>
      {expand && renderMenu()}
    </chakra.div>
  );
});

Selector.displayName = 'Selector';
