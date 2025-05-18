import { DynamicIcon } from 'lucide-react/dynamic';
import dynamic from 'next/dynamic';

const componentMap: any = {
  'action-button': {
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
  'action-icon-button': {
    name: 'action-icon-button',
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
};

export const UIScenarios: any = ({ name, input }: any) => {
  const getComponent: any = componentMap[name];
  const { component: Component, renderer } = getComponent || {};

  return renderer ? renderer(Component, input) : <Component {...input} />;
};
