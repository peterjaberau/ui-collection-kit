import React, { useContext, Fragment, useRef, useLayoutEffect } from 'react';
import { each } from '#packages/shared';
import { DesignerLayoutContext } from '../context';
import { IDesignerLayoutProps } from '../types';
import { Box } from '@chakra-ui/react';

export const Layout: React.FC<IDesignerLayoutProps> | any = (props) => {
  const layout = useContext(DesignerLayoutContext);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      each(props.variables, (value, key) => {
        ref.current.style.setProperty(`--${key}`, value);
      });
    }
  }, []);

  if (layout) {
    return <Fragment>{props.children}</Fragment>;
  }
  return (
    <Box
      ref={ref}
    >
      <DesignerLayoutContext.Provider
        value={{
          theme: props.theme,
          prefixCls: props.prefixCls,
          position: props.position || 'fixed',
        }}
      >
        {props.children}
      </DesignerLayoutContext.Provider>
    </Box>
  );
};

