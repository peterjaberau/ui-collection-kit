import { DynamicIcon } from 'lucide-react/dynamic';
import dynamic from 'next/dynamic';

const configScenarios = [
  {
    name: 'action-button',
    component: dynamic(() =>
      import('@chakra-ui/react').then((mod) => mod.Button),
    ),
    props: {
      text: 'Action Button',
      size: '2xs',
      variant: 'outline',
      colorScheme: 'blue',
      onClick: () => {
        console.log('Action Button Clicked');
      },
    },
    renderer: (Component: React.ElementType, props: any) => {
      const { text, onClick, ...rest } = props;
      return (
        <Component
          {...rest}
          onClick={
            typeof rest.onClick === 'function'
              ? rest.onClick // 🔁 override if present in rest
              : onClick // ✅ use default from config
          }
        >
          {text}
        </Component>
      );
    },
  },
  {
    name: 'action-icon-button',
    component: dynamic(() =>
      import('@chakra-ui/react').then((mod) => mod.IconButton),
    ),
    props: {
      iconName: 'camera',
      size: '2xs',
      variant: 'solid',
      colorScheme: 'blue',
      onClick: () => {
        console.log('Search clicked');
      },
    },
    renderer: (Component: React.ElementType, props: any) => {
      const { iconName, ...rest } = props;

      const LucideIcons = require('lucide-react'); // Safe to require here
      const IconComponent = LucideIcons[iconName];

      return (
        <Component {...rest}>
          <DynamicIcon name={iconName} />
        </Component>
      );
    },
  },
];

const configBinding = {
  header: {
    start: ['action-button', 'action-icon-button'],
    end: ['action-button', 'action-icon-button'],
  },
};

export const UIScenarios: any = ({ name }: string) => {

  const config: any = configScenarios.find(
    (scenario: any) => scenario.name === name,
  );


  const { component: Component, props, renderer } = config || {};
  return renderer ? renderer(Component, props) : <Component {...props} />;
};
