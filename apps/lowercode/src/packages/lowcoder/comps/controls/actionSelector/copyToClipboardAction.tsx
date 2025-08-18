import { StringControl } from "#lowcoder/comps/controls/codeControl";
import { MultiCompBuilder } from "#lowcoder/comps/generators/multi";
import copy from "copy-to-clipboard";
import { BranchDiv } from "#lowcoder-design/index";
import { trans } from "#lowcoder/i18n";

export const CopyToClipboardAction = (function () {
  const childrenMap: any = {
    value: StringControl,
  };
  return new MultiCompBuilder(childrenMap, (props) => () => copy(props.value))
    .setPropertyViewFn((children) => {
      return (
        <>
          <BranchDiv>
            {children.value.propertyView({
              label: trans("eventHandler.copyToClipboardValue"),
              layout: "vertical",
            })}
          </BranchDiv>
        </>
      );
    })
    .build();
})();
