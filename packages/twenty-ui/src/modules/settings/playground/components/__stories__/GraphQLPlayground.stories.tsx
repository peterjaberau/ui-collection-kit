import { GraphQLPlayground } from '@twenty-modules/settings/playground/components/GraphQLPlayground';
import { playgroundApiKeyState } from '@twenty-modules/settings/playground/states/playgroundApiKeyState';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { ComponentWithRecoilScopeDecorator } from '@twenty-ui/front/testing/decorators/ComponentWithRecoilScopeDecorator';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import {
  ComponentDecorator,
  ComponentWithRouterDecorator,
} from '@twenty-ui/testing';

const PlaygroundApiKeySetterEffect = () => {
  const setPlaygroundApiKey = useSetRecoilState(playgroundApiKeyState);

  useEffect(() => {
    setPlaygroundApiKey('test-api-key-123');
  }, [setPlaygroundApiKey]);

  return null;
};

const meta: Meta<typeof GraphQLPlayground> = {
  title: 'Refactor Modules/Settings/Playground/GraphQLPlayground',
  component: GraphQLPlayground,
  decorators: [
    ComponentDecorator,
    I18nFrontDecorator,
    ComponentWithRouterDecorator,
    ComponentWithRecoilScopeDecorator,
  ],
  parameters: {
    docs: {
      description: {
        component:
          'GraphQLPlayground provides an interactive environment to test GraphQL queries with authentication.',
      },
    },
    msw: graphqlMocks,
  },
};
export default meta;

type Story = StoryObj<typeof GraphQLPlayground>;

export const Default: Story = {
  args: {
    onError: action('GraphQL Playground encountered unexpected error'),
  },
  decorators: [
    (Story) => (
      <>
        <PlaygroundApiKeySetterEffect />
        <Story />
      </>
    ),
  ],
};
