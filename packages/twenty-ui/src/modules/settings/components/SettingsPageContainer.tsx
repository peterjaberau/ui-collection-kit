import { OBJECT_SETTINGS_WIDTH } from '@twenty-modules/settings/data-model/constants/ObjectSettings';
import { useIsMobile } from '@twenty-modules/ui/utilities/responsive/hooks/useIsMobile';
import { ScrollWrapper } from '@twenty-modules/ui/utilities/scroll/components/ScrollWrapper';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

const StyledSettingsPageContainer = styled.div<{
  width?: number;
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
  overflow: auto;
  padding: ${({ theme }) => theme.spacing(6, 8, 8)};
  width: ${({ width }) => {
    if (isDefined(width)) {
      return width + 'px';
    }
    if (useIsMobile()) {
      return 'unset';
    }
    return OBJECT_SETTINGS_WIDTH + 'px';
  }};
  padding-bottom: ${({ theme }) => theme.spacing(20)};
`;

export const SettingsPageContainer = ({
  children,
}: {
  children: ReactNode;
}) => (
  <ScrollWrapper componentInstanceId={'scroll-wrapper-settings-page-container'}>
    <StyledSettingsPageContainer>{children}</StyledSettingsPageContainer>
  </ScrollWrapper>
);
