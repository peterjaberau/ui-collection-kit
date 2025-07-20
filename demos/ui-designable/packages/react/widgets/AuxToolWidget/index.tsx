import React, { useEffect, useRef } from 'react';
import { useViewport, useDesigner, usePrefix } from '../../hooks';
import { Insertion } from './Insertion';
import { Selection } from './Selection';
import { FreeSelection } from './FreeSelection';
import { Cover } from './Cover';
import { DashedBox } from './DashedBox';
import { SpaceBlock } from './SpaceBlock';
import { SnapLine } from './SnapLine';
import { Box } from '@chakra-ui/react'
// import './styles.less';

export const AuxToolWidget = () => {
  const engine = useDesigner();
  const viewport = useViewport();
  const prefix = usePrefix('auxtool');
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    return engine.subscribeWith('viewport:scroll', () => {
      if (viewport.isIframe && ref.current) {
        ref.current.style.transform = `perspective(1px) translate3d(${-viewport.scrollX}px,${-viewport.scrollY}px,0)`;
      }
    });
  }, [engine, viewport]);

  if (!viewport) return null;

  return (
    <Box
      data-id='aux-tool'
      ref={ref}
      css={{
        transform: 'perspective(1px) translate3d(0,0,0)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 2
      }}

    >
      <Insertion />
      <SpaceBlock />
      <SnapLine />
      <DashedBox />
      <Selection />
      <Cover />
      <FreeSelection />
    </Box>
  );
};

AuxToolWidget.displayName = 'AuxToolWidget';
