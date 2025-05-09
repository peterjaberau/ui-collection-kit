import { useUpdateOneObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useUpdateOneObjectMetadataItem';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { SettingsDataModelObjectAboutForm } from '@twenty-modules/settings/data-model/objects/forms/components/SettingsDataModelObjectAboutForm';
import {
  SettingsDataModelObjectAboutFormValues,
  settingsDataModelObjectAboutFormSchema,
} from '@twenty-modules/settings/data-model/validation-schemas/settingsDataModelObjectAboutFormSchema';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { SnackBarVariant } from '@twenty-modules/ui/feedback/snack-bar-manager/components/SnackBar';
import { useSnackBar } from '@twenty-modules/ui/feedback/snack-bar-manager/hooks/useSnackBar';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { ZodError } from 'zod';
import { useNavigateSettings } from '@twenty-ui/front/hooks/useNavigateSettings';
import { updatedObjectNamePluralState } from '@twenty-ui/front/pages/settings/data-model/states/updatedObjectNamePluralState';

type SettingsUpdateDataModelObjectAboutFormProps = {
  objectMetadataItem: ObjectMetadataItem;
};

export const SettingsUpdateDataModelObjectAboutForm = ({
  objectMetadataItem,
}: SettingsUpdateDataModelObjectAboutFormProps) => {
  const navigate = useNavigateSettings();
  const { enqueueSnackBar } = useSnackBar();
  const setUpdatedObjectNamePlural = useSetRecoilState(
    updatedObjectNamePluralState,
  );
  const { updateOneObjectMetadataItem } = useUpdateOneObjectMetadataItem();
  const {
    description,
    icon,
    isLabelSyncedWithName,
    labelPlural,
    labelSingular,
    namePlural,
    nameSingular,
  } = objectMetadataItem;
  const formConfig = useForm<SettingsDataModelObjectAboutFormValues>({
    mode: 'onTouched',
    resolver: zodResolver(settingsDataModelObjectAboutFormSchema),
    defaultValues: {
      description,
      icon: icon ?? undefined,
      isLabelSyncedWithName,
      labelPlural,
      labelSingular,
      namePlural,
      nameSingular,
    },
  });

  const handleSave = async (
    formValues: SettingsDataModelObjectAboutFormValues,
  ) => {
    if (!(Object.keys(formConfig.formState.dirtyFields).length > 0)) {
      return;
    }

    const objectNamePluralForRedirection =
      formValues.namePlural ?? objectMetadataItem.namePlural;

    try {
      setUpdatedObjectNamePlural(objectNamePluralForRedirection);

      const updatedObject = await updateObjectMetadata(formValues);

      if (formValues.isLabelSyncedWithName !== isLabelSyncedWithName) {
        formConfig.reset({
          description,
          icon: icon ?? undefined,
          isLabelSyncedWithName: formValues.isLabelSyncedWithName,
          labelPlural: updatedObject.data?.updateOneObject.labelPlural,
          labelSingular: updatedObject.data?.updateOneObject.labelSingular,
          namePlural: updatedObject.data?.updateOneObject.namePlural,
          nameSingular: updatedObject.data?.updateOneObject.nameSingular,
        });
      } else {
        formConfig.reset(undefined, { keepValues: true });
      }

      navigate(SettingsPath.ObjectDetail, {
        objectNamePlural: objectNamePluralForRedirection,
      });
    } catch (error) {
      handleError(error);
    }
  };

  const updateObjectMetadata = async (
    formValues: SettingsDataModelObjectAboutFormValues,
  ) => {
    const updatePayload = { ...formValues };

    if (!objectMetadataItem.isCustom) {
      const {
        nameSingular: _,
        namePlural: __,
        ...payloadWithoutNames
      } = updatePayload;

      return await updateOneObjectMetadataItem({
        idToUpdate: objectMetadataItem.id,
        updatePayload: payloadWithoutNames,
      });
    }

    return await updateOneObjectMetadataItem({
      idToUpdate: objectMetadataItem.id,
      updatePayload,
    });
  };

  const handleError = (error: unknown) => {
    // eslint-disable-next-line no-console
    console.error(error);

    if (error instanceof ZodError) {
      enqueueSnackBar(error.issues[0].message, {
        variant: SnackBarVariant.Error,
      });
      return;
    }

    enqueueSnackBar((error as Error).message, {
      variant: SnackBarVariant.Error,
    });
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...formConfig}>
      <SettingsDataModelObjectAboutForm
        onNewDirtyField={() => formConfig.handleSubmit(handleSave)()}
        disableEdition={!objectMetadataItem.isCustom}
        objectMetadataItem={objectMetadataItem}
      />
    </FormProvider>
  );
};
