import { FunctionControl } from "#lowcoder/comps/controls/codeControl";
import { MultiCompBuilder } from "#lowcoder/comps/generators";
import { QueryResult } from "./queryComp";
import { QueryTutorials } from "#lowcoder/util/tutorialUtils";
import { DocLink } from "#lowcoder-design/index";
import { getGlobalSettings } from "#lowcoder/comps/utils/globalSettings";
import { trans } from "#lowcoder/i18n";
import { QUERY_EXECUTION_ERROR, QUERY_EXECUTION_OK } from "../../constants/queryConstants";

export const JSQuery = (function () {
  const childrenMap: any = {
    script: FunctionControl,
  };
  return new MultiCompBuilder(childrenMap, (props) => {
    const { orgCommonSettings } = getGlobalSettings();
    const runInHost = !!orgCommonSettings?.runJavaScriptInHost;
    return async (p: { args?: Record<string, unknown> }): Promise<QueryResult> => {
      try {
        const timer = performance.now();
        const data = await props.script(p.args, runInHost);
        return {
          data: data,
          code: QUERY_EXECUTION_OK,
          success: true,
          runTime: Number((performance.now() - timer).toFixed()),
        };
      } catch (e) {
        return {
          success: false,
          data: "",
          code: QUERY_EXECUTION_ERROR,
          message: (e as any).message || "",
        };
      }
    };
  })
    .setPropertyViewFn((children) => {
      return (
        <>
          {children.script.propertyView({
            placeholder: "return 1 + 1",
            placement: "bottom",
            styleName: "medium",
          })}
          {QueryTutorials.js && (
            <DocLink href={QueryTutorials.js}>{trans("query.jsQueryDocLink")}</DocLink>
          )}
        </>
      );
    })
    .build();
})();
