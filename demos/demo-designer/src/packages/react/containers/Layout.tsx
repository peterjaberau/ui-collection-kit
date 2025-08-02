import React, { useContext, Fragment, useRef, useLayoutEffect } from 'react';
import { each } from '#packages/shared';
import { DesignerLayoutContext } from '../context';
import { IDesignerLayoutProps } from '../types';
import cls from 'classnames'
import { chakra } from '@chakra-ui/react';

export const Layout: React.FC<IDesignerLayoutProps> | any = (props: any) => {
  const layout = useContext(DesignerLayoutContext)
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (ref.current) {
      each(props.variables, (value, key) => {
        ref.current.style.setProperty(`--${key}`, value)
      })
    }
  }, [])

  if (layout) {
    return <Fragment>{props.children}</Fragment>
  }
  return (
    <chakra.div
      ref={ref}

      className={cls({
        [`${props.prefixCls}app`]: true,
        [`${props.prefixCls}${props.theme}`]: props.theme,
      })}
      css={{
        h: 'full',
      }}

    >
      <DesignerLayoutContext.Provider
        value={{
          theme: props.theme,
          prefixCls: props.prefixCls,
          position: props.position,
        }}
      >
        {props.children}
      </DesignerLayoutContext.Provider>
    </chakra.div>
  )
}

Layout.defaultProps = {
  theme: 'light',
  prefixCls: 'dn-',
  position: 'relative',
}
