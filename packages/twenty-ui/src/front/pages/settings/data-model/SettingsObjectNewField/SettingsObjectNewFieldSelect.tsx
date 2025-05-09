import { useFilteredObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useFilteredObjectMetadataItems';
import { RecordFieldValueSelectorContextProvider } from '@twenty-modules/object-record/record-store/contexts/RecordFieldValueSelectorContext';
import { SettingsPageContainer } from '@twenty-modules/settings/components/SettingsPageContainer';
import { SettingsDataModelNewFieldBreadcrumbDropDown } from '@twenty-modules/settings/data-model/components/SettingsDataModelNewFieldBreadcrumbDropDown';
import { SETTINGS_FIELD_TYPE_CONFIGS } from '@twenty-modules/settings/data-model/constants/SettingsFieldTypeConfigs';
import { SettingsObjectNewFieldSelector } from '@twenty-modules/settings/data-model/fields/forms/components/SettingsObjectNewFieldSelector';
import { FieldType } from '@twenty-modules/settings/data-model/types/FieldType';
import { SettingsFieldType } from '@twenty-modules/settings/data-model/types/SettingsFieldType';
import { AppPath } from '@twenty-modules/types/AppPath';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { SubMenuTopBarContainer } from '@twenty-modules/ui/layout/page/components/SubMenuTopBarContainer';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { z } from 'zod';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';
import { useNavigateApp } from '@twenty-ui/front/hooks/useNavigateApp';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { t } from '@lingui/core/macro';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const settingsDataModelFieldTypeFormSchema = z.object({
  type: z.enum(
    Object.keys(SETTINGS_FIELD_TYPE_CONFIGS) as [
      SettingsFieldType,
      ...SettingsFieldType[],
    ],
  ),
});

export type SettingsDataModelFieldTypeFormValues = z.infer<
  typeof settingsDataModelFieldTypeFormSchema
>;

export const SettingsObjectNewFieldSelect = () => {
  const navigate = useNavigateApp();
  const { objectNamePlural = '' } = useParams();
  const { findActiveObjectMetadataItemByNamePlural } =
    useFilteredObjectMetadataItems();
  const activeObjectMetadataItem =
    findActiveObjectMetadataItemByNamePlural(objectNamePlural);
  const formMethods = useForm({
    resolver: zodResolver(settingsDataModelFieldTypeFormSchema),
    defaultValues: {
      type: FieldMetadataType.TEXT,
    },
  });
  const excludedFieldTypes: FieldType[] = (
    [
      FieldMetadataType.NUMERIC,
      FieldMetadataType.RICH_TEXT,
      FieldMetadataType.RICH_TEXT_V2,
      FieldMetadataType.ACTOR,
    ] as const
  ).filter(isDefined);

  useEffect(() => {
    if (!activeObjectMetadataItem) {
      navigate(AppPath.NotFound);
    }
  }, [activeObjectMetadataItem, navigate]);

  if (!activeObjectMetadataItem) return null;

  return (
    <RecordFieldValueSelectorContextProvider>
      <FormProvider // eslint-disable-next-line react/jsx-props-no-spreading
        {...formMethods}
      >
        <SubMenuTopBarContainer
          title={t`1. Select a field type`}
          links={[
            { children: t`Workspace`, href: '/settings/workspace' },
            { children: t`Objects`, href: '/settings/objects' },
            {
              children: activeObjectMetadataItem.labelPlural,
              href: getSettingsPath(SettingsPath.ObjectDetail, {
                objectNamePlural,
              }),
            },
            { children: <SettingsDataModelNewFieldBreadcrumbDropDown /> },
          ]}
        >
          <SettingsPageContainer>
            <SettingsObjectNewFieldSelector
              objectNamePlural={objectNamePlural}
              excludedFieldTypes={excludedFieldTypes}
            />
          </SettingsPageContainer>
        </SubMenuTopBarContainer>
      </FormProvider>
    </RecordFieldValueSelectorContextProvider>
  );
};
