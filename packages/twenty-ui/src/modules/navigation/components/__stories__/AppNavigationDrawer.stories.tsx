import { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { currentMobileNavigationDrawerState } from '@twenty-modules/navigation/states/currentMobileNavigationDrawerState';
import { useIsMobile } from '@twenty-modules/ui/utilities/responsive/hooks/useIsMobile';
import { IconsProviderDecorator } from '@twenty-ui/front/testing/decorators/IconsProviderDecorator';
import { ObjectMetadataItemsDecorator } from '@twenty-ui/front/testing/decorators/ObjectMetadataItemsDecorator';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';

import { AppPath } from '@twenty-modules/types/AppPath';
import { isNavigationDrawerExpandedState } from '@twenty-modules/ui/navigation/states/isNavigationDrawerExpanded';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import {
  AppNavigationDrawer,
  AppNavigationDrawerProps,
} from '../AppNavigationDrawer';

const MobileNavigationDrawerStateSetterEffect = ({
  mobileNavigationDrawer = 'main',
}: {
  mobileNavigationDrawer?: 'main' | 'settings';
}) => {
  const isMobile = useIsMobile();
  const setIsNavigationDrawerExpanded = useSetRecoilState(
    isNavigationDrawerExpandedState,
  );
  const setCurrentMobileNavigationDrawer = useSetRecoilState(
    currentMobileNavigationDrawerState,
  );

  useEffect(() => {
    if (!isMobile) return;

    setIsNavigationDrawerExpanded(true);
    setCurrentMobileNavigationDrawer(mobileNavigationDrawer);
  }, [
    isMobile,
    mobileNavigationDrawer,
    setCurrentMobileNavigationDrawer,
    setIsNavigationDrawerExpanded,
  ]);

  return null;
};

type StoryArgs = AppNavigationDrawerProps & {
  mobileNavigationDrawer?: 'main' | 'settings';
  routePath: string;
};

const meta: Meta<StoryArgs> = {
  title: 'Modules/Navigation/AppNavigationDrawer',
  decorators: [
    IconsProviderDecorator,
    ObjectMetadataItemsDecorator,
    I18nFrontDecorator,
    (Story, { args }) => (
      <MemoryRouter initialEntries={[args.routePath]}>
        <Story />
        <MobileNavigationDrawerStateSetterEffect
          mobileNavigationDrawer={args.mobileNavigationDrawer}
        />
      </MemoryRouter>
    ),
    SnackBarDecorator,
  ],
  component: AppNavigationDrawer,
  args: { routePath: AppPath.Index },
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Main: Story = {};

export const Settings: Story = {
  args: {
    mobileNavigationDrawer: 'settings',
    routePath: '/settings/experience',
  },
};
