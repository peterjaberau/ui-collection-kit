'use client'
import { DynamicIcon } from 'lucide-react/dynamic';
import dynamic from 'next/dynamic';

const componentMap: any = {
  'menu': {
    component: dynamic(() => import('./components/render.menu').then((mod) => mod.RenderMenu)),
  },
  'button': {
    component: dynamic(() =>
      import('./components/render.button').then((mod) => mod.RenderButton),
    ),
  },
  'icon-button': {
    component: dynamic(() =>
      import('./components/render.icon-button').then((mod) => mod.RenderIconButton),
    ),
  },

  'badge': {
    component: dynamic(() =>
      import('@ui-collection-kit/saas/react').then((mod) => mod.Badge),
    ),
    renderer: (Component: React.ElementType, props: any) => {
      const { text, iconName, iconSize, ...rest } = props;
      return (
        <Component
          {...rest}
        >
          { iconName && <DynamicIcon name={iconName} size={iconSize} /> }
          { text && <>{text}</> }
        </Component>
      );
    },
  },
};

export const UIScenarios: any = ({ name, input }: any) => {
  const getComponent: any = componentMap[name];
  const { component: Component, renderer } = getComponent || {};

  return renderer ? renderer(Component, input) : <Component {...input} />;
};
