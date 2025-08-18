import { useDispatch, useSelector } from "react-redux";
import { normalAppListSelector } from "#lowcoder/redux/selectors/applicationSelector";
import { useEffect, useMemo } from "react";
import { fetchAllApplications } from "#lowcoder/redux/reduxActions/applicationActions";
import { AppTypeEnum } from "#lowcoder/constants/applicationConstants";
import { Dropdown } from "#lowcoder-design/components/Dropdown";
import { trans } from "#lowcoder/i18n";
import { ModuleComp } from "#lowcoder/comps/comps/moduleComp/moduleComp";

function AppSelectPropertyView(props: {
  onChange: (label: string, value: string) => void;
  appId: string;
}) {
  const { appId, onChange }: any = props;
  const apps = useSelector(normalAppListSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    if (apps.length <= 0) dispatch(fetchAllApplications({}));
  }, [apps]);
  const options = useMemo(
    () =>
      apps
        .filter((app) => app.applicationType === AppTypeEnum.Application)
        .map((app) => ({
          label: app.name,
          value: app.applicationId,
        })),
    [apps]
  );
  const valueLabelMap = useMemo(() => {
    return new Map(options.map((o) => [o.value, o.label]));
  }, [options]);

  return (
    <Dropdown
      showSearch={true}
      value={appId}
      options={options}
      label={trans("aggregation.chooseApp")}
      onChange={(value) => {
        onChange(valueLabelMap.get(value) || "", value);
      }}
    />
  );
}

// @ts-ignore
export class AppSelectComp extends ModuleComp {
  getAppId() {
    return this.children.appId.getView();
  }

  propertyView(param: { onAppChange?: (label: string) => void }) {
    return (
      <AppSelectPropertyView
        appId={this.children.appId.getView()}
        onChange={(label, value) => {
          this.dispatchChangeValueAction({
            appId: value,
          });
          param.onAppChange && param.onAppChange(label);
        }}
      />
    );
  }
}
