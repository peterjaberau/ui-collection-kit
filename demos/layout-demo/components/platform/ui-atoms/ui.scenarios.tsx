import { DynamicIcon } from 'lucide-react/dynamic';
import dynamic from 'next/dynamic';

const componentMap: any = {
  'menu': {
    component: dynamic(() => import('./components/render.menu').then((mod) => mod.RenderMenu)),
  },
  'button': {
    component: dynamic(() =>
      import('@chakra-ui/react').then((mod) => mod.Button),
    ),
    renderer: (Component: React.ElementType, props: any) => {
      const { text, onClick, ...rest } = props;
      return (
        <Component
          {...rest}
          onClick={typeof rest.onClick === 'function' ? rest.onClick : onClick}
        >
          {text}
        </Component>
      );
    },
  },
  'icon-button': {
    component: dynamic(() =>
      import('@chakra-ui/react').then((mod) => mod.IconButton),
    ),
    renderer: (Component: React.ElementType, props: any) => {
      const { iconName, onClick, ...rest } = props;
      return (
        <Component
          {...rest}
          onClick={typeof rest.onClick === 'function' ? rest.onClick : onClick}
        >
          <DynamicIcon name={iconName} />
        </Component>
      );
    },
  },

  'badge': {
    component: dynamic(() =>
      import('@chakra-ui/react').then((mod) => mod.Badge),
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
