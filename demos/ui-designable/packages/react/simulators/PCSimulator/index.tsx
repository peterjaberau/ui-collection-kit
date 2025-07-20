import React from 'react';
import cls from 'classnames';
import { usePrefix } from '../../hooks';
import { Box } from '@chakra-ui/react'
// import './styles.less';
export interface IPCSimulatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
}
export const PCSimulator: React.FC<IPCSimulatorProps> = (props) => {
  const prefix = usePrefix('pc-simulator');
  return (
    <Box
      data-id='pc-simulator'
      {...props}
    css={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      boxSizing: 'border-box'
    }}
    >
      {props.children}
    </Box>
  );
};
