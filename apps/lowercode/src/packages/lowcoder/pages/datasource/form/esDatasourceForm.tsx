import React from "react";
import { DatasourceForm, FormInputItem, FormSection } from "#lowcoder-design/index";
import { EsConfig } from "../../../api/datasourceApi";
import { DatasourceFormProps } from "./datasourceFormRegistry";
import {
  DatasourceNameFormInputItem,
  GeneralSettingFormSectionLabel,
  PasswordFormInputItem,
  UserNameFormInputItem,
} from "../form";
import { trans } from "#lowcoder/i18n";

export const EsDatasourceForm = (props: DatasourceFormProps) => {
  const { form, datasource }: any = props;
  const datasourceConfig = datasource?.datasourceConfig as EsConfig;

  return (
    <DatasourceForm form={form} preserve={false}>
      <FormSection $size={props.size}>
        <DatasourceNameFormInputItem
          placeholder={"My Elasticsearch1"}
          initialValue={datasource?.name}
        />
      </FormSection>

      <FormSection $size={props.size}>
        <GeneralSettingFormSectionLabel />
        <FormInputItem
          name={"connectionString"}
          label={trans("query.host")}
          initialValue={datasourceConfig?.connectionString}
          placeholder={"https://username:password@my-elasticsearch.com:8082"}
          required={true}
          rules={[
            {
              required: !datasourceConfig?.connectionString,
              message: trans("query.uriRequiredMessage"),
            },
          ]}
        />
        <UserNameFormInputItem initialValue={datasourceConfig?.username} />
        <PasswordFormInputItem datasource={datasource} />
      </FormSection>
    </DatasourceForm>
  );
};
