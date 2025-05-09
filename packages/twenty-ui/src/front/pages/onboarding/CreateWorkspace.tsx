import styled from '@emotion/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Key } from 'ts-key-enum';
import { z } from 'zod';

import { SubTitle } from '@twenty-modules/auth/components/SubTitle';
import { Title } from '@twenty-modules/auth/components/Title';
import { useAuth } from '@twenty-modules/auth/hooks/useAuth';
import { useRefreshObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useRefreshObjectMetadataItem';
import { useSetNextOnboardingStatus } from '@twenty-modules/onboarding/hooks/useSetNextOnboardingStatus';
import { WorkspaceLogoUploader } from '@twenty-modules/settings/workspace/components/WorkspaceLogoUploader';
import { SnackBarVariant } from '@twenty-modules/ui/feedback/snack-bar-manager/components/SnackBar';
import { useSnackBar } from '@twenty-modules/ui/feedback/snack-bar-manager/hooks/useSnackBar';
import { TextInputV2 } from '@twenty-modules/ui/input/components/TextInputV2';
import { Modal } from '@twenty-modules/ui/layout/modal/components/Modal';
import { Trans, useLingui } from '@lingui/react/macro';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { H2Title } from '@twenty-ui//display';
import { Loader } from '@twenty-ui//feedback';
import { MainButton } from '@twenty-ui//input';
import { useActivateWorkspaceMutation } from '@twenty-ui/front/generated/graphql';

const StyledContentContainer = styled.div`
  width: 100%;
`;

const StyledSectionContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(8)};
`;

const StyledButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(8)};
  width: 200px;
`;

export const CreateWorkspace = () => {
  const { t } = useLingui();
  const { enqueueSnackBar } = useSnackBar();
  const setNextOnboardingStatus = useSetNextOnboardingStatus();
  const { refreshObjectMetadataItems } = useRefreshObjectMetadataItems();

  const { loadCurrentUser } = useAuth();
  const [activateWorkspace] = useActivateWorkspaceMutation();

  const validationSchema = z
    .object({
      name: z.string().min(1, { message: t`Name can not be empty` }),
    })
    .required();

  type Form = z.infer<typeof validationSchema>;

  // Form
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<Form>({
    mode: 'onChange',
    defaultValues: {
      name: '',
    },
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<Form> = useCallback(
    async (data) => {
      try {
        const result = await activateWorkspace({
          variables: {
            input: {
              displayName: data.name,
            },
          },
        });

        if (isDefined(result.errors)) {
          throw result.errors ?? new Error(t`Unknown error`);
        }

        await refreshObjectMetadataItems();
        await loadCurrentUser();
        setNextOnboardingStatus();
      } catch (error: any) {
        enqueueSnackBar(error?.message, {
          variant: SnackBarVariant.Error,
        });
      }
    },
    [
      activateWorkspace,
      enqueueSnackBar,
      loadCurrentUser,
      refreshObjectMetadataItems,
      setNextOnboardingStatus,
      t,
    ],
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === Key.Enter) {
      event.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <Modal.Content isVerticalCentered isHorizontalCentered>
      <Title noMarginTop>
        <Trans>Create your workspace</Trans>
      </Title>
      <SubTitle>
        <Trans>
          A shared environment where you will be able to manage your customer
          relations with your team.
        </Trans>
      </SubTitle>
      <StyledContentContainer>
        <StyledSectionContainer>
          <H2Title title={t`Workspace logo`} />
          <WorkspaceLogoUploader />
        </StyledSectionContainer>
        <StyledSectionContainer>
          <H2Title
            title={t`Workspace name`}
            description={t`The name of your organization`}
          />
          <Controller
            name="name"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextInputV2
                autoFocus
                value={value}
                placeholder="Apple"
                onBlur={onBlur}
                onChange={onChange}
                error={error?.message}
                onKeyDown={handleKeyDown}
                fullWidth
              />
            )}
          />
        </StyledSectionContainer>
      </StyledContentContainer>
      <StyledButtonContainer>
        <MainButton
          title={t`Continue`}
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid || isSubmitting}
          Icon={() => isSubmitting && <Loader />}
          fullWidth
        />
      </StyledButtonContainer>
    </Modal.Content>
  );
};
