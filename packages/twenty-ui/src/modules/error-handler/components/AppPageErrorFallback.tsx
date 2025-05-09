import { AppErrorDisplay } from '@twenty-modules/error-handler/components/internal/AppErrorDisplay';
import { AppErrorDisplayProps } from '@twenty-modules/error-handler/types/AppErrorDisplayProps';
import { PageBody } from '@twenty-modules/ui/layout/page/components/PageBody';
import { PageContainer } from '@twenty-modules/ui/layout/page/components/PageContainer';
import { PageHeader } from '@twenty-modules/ui/layout/page/components/PageHeader';

type AppPageErrorFallbackProps = AppErrorDisplayProps;

export const AppPageErrorFallback = ({
  error,
  resetErrorBoundary,
  title = 'Sorry, something went wrong',
}: AppPageErrorFallbackProps) => {
  return (
    <PageContainer>
      <PageHeader />

      <PageBody>
        <AppErrorDisplay
          error={error}
          resetErrorBoundary={resetErrorBoundary}
          title={title}
        />
      </PageBody>
    </PageContainer>
  );
};
