import { MultiCompBuilder } from "#lowcoder/comps/generators/multi";
import { getGlobalSettings } from "#lowcoder/comps/utils/globalSettings";
import { trans } from "#lowcoder/i18n";
import { BranchDiv } from "#lowcoder-design/index";
import { FunctionControl } from "../codeControl";

const RunScriptTmpAction = (function () {
  const childrenMap: any = {
    script: FunctionControl,
  };
  return new MultiCompBuilder(childrenMap, () => {
    return () => Promise.resolve(undefined as unknown);
  })
    .setPropertyViewFn(() => <></>)
    .build();
})();

export class RunScriptAction extends RunScriptTmpAction {
  override getView() {
    const f = this.children.script.getView();
    const { orgCommonSettings } = getGlobalSettings();
    const runInHost = !!orgCommonSettings?.runJavaScriptInHost;
    return () => Promise.resolve(f({}, runInHost));
  }

  propertyView() {
    return (
      <BranchDiv>
        {this.children.script.propertyView({
          placeholder: "// " + trans("eventHandler.runScriptPlaceHolder"),
          layout: "vertical",
          styleName: "medium",
          showLineNum: false,
        })}
      </BranchDiv>
    );
  }
}
