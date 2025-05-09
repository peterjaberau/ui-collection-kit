import { SentryInitEffect } from '@twenty-modules/error-handler/components/SentryInitEffect';

export const ExceptionHandlerProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <>
      <SentryInitEffect />
      {children}
    </>
  );
};
