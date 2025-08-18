import ApplicationSelect from "#lowcoder/components/ApplicationSelect";
import { StringControl } from "#lowcoder/comps/controls/codeControl";
import { MultiCompBuilder } from "#lowcoder/comps/generators/multi";
import { ControlPropertyViewWrapper } from "#lowcoder-design/index";
import { trans } from "#lowcoder/i18n";

const childrenMap: any = {
  applicationId: StringControl,
};

export default new MultiCompBuilder(childrenMap, (props) => props.applicationId)
  .setPropertyViewFn((children) => (
    <ControlPropertyViewWrapper label={trans("prop.selectApp")} layout="vertical">
      <ApplicationSelect
        highlightCurrent
        value={children.applicationId.getView()}
        onChange={(id) => {
          children.applicationId.dispatchChangeValueAction(id);
        }}
      />
    </ControlPropertyViewWrapper>
  ))
  .build();
