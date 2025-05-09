import styled from '@emotion/styled';

import { RecordFieldValueSelectorContextProvider } from '@twenty-modules/object-record/record-store/contexts/RecordFieldValueSelectorContext';
import { SignInBackgroundMockContainer } from '@twenty-modules/sign-in-background-mock/components/SignInBackgroundMockContainer';
import { PageBody } from '@twenty-modules/ui/layout/page/components/PageBody';
import { PageContainer } from '@twenty-modules/ui/layout/page/components/PageContainer';
import { PageHeader } from '@twenty-modules/ui/layout/page/components/PageHeader';
import { IconBuildingSkyscraper } from '@twenty-ui/display';

const StyledTableContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const SignInBackgroundMockPage = () => {
  return (
    <PageContainer>
      <PageHeader title="Companies" Icon={IconBuildingSkyscraper} />
      <PageBody>
        <RecordFieldValueSelectorContextProvider>
          <StyledTableContainer>
            <SignInBackgroundMockContainer />
          </StyledTableContainer>
        </RecordFieldValueSelectorContextProvider>
      </PageBody>
    </PageContainer>
  );
};
