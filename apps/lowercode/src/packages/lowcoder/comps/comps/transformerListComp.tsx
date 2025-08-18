import { getBottomResIcon } from "#lowcoder/util/bottomResUtils";
import { codeControl, TransformerCodeControl } from "#lowcoder/comps/controls/codeControl";
import { EditorContext } from "#lowcoder/comps/editorState";
import { MultiCompBuilder } from "#lowcoder/comps/generators";
import { bottomResListComp } from "#lowcoder/comps/generators/bottomResList";
import { withExposingRaw } from "#lowcoder/comps/generators/withExposing";
import { trans } from "#lowcoder/i18n";
import { fromRecord } from "#lowcoder-core/index";
import { DocLink } from "lowcoder-design";
import { BottomTabs } from "#lowcoder/pages/editor/bottom/BottomTabs";
import { ReactNode } from "react";
import { BottomResComp, BottomResCompResult, BottomResTypeEnum } from "#lowcoder/types/bottomRes";
import { QueryTutorials } from "#lowcoder/util/tutorialUtils";
import { SimpleNameComp } from "./simpleNameComp";
import { markdownCompCss, TacoMarkDown } from "lowcoder-design";
import SupaDemoDisplay from "#lowcoder/comps/utils/supademoDisplay";

const TransformerItemCompBase = new MultiCompBuilder(
  {
    name: SimpleNameComp,
    script: TransformerCodeControl,
  },
  (props) => props
)
  .setPropertyViewFn((children) => {
    return (
      <EditorContext.Consumer>
        {(editorState) => {
          return (
            <BottomTabs
              runButtonText={trans("transformer.preview")}
              type={BottomResTypeEnum.Transformer}
              tabsConfig={[
                {
                  key: "general",
                  title: trans("query.generalTab"),
                  children: (
                    <div>
                      {children.script.propertyView({
                        placement: "bottom",
                        styleName: "medium",
                        width: "100%",
                      })}
                      {QueryTutorials.transformer && (
                        <><br/><TacoMarkDown>{trans("transformer.documentationText")}</TacoMarkDown>
                        <DocLink style={{ marginTop: 8 }} href={QueryTutorials.transformer} title={trans("transformer.documentationText")}>
                          {trans("transformer.docLink")}
                        </DocLink><br/><br/>

                        <SupaDemoDisplay
                          url={trans("supademos.transformer")}
                          modalWidth="80%"
                          modalTop="20px"
                        />

                        </>
                      )}
                    </div>
                  ),
                },
              ]}
              tabTitle={children.name.getView()}
              onRunBtnClick={() => {
                editorState.setShowResultCompName(children.name.getView());
              }}
            />
          );
        }}
      </EditorContext.Consumer>
    );
  })
  .build();

class TransformerAsBottomRes extends TransformerItemCompBase implements BottomResComp {
  result(): BottomResCompResult | null {
    const scriptCtrl = this.children.script as InstanceType<ReturnType<typeof codeControl>>;
    const valueAndMsg = scriptCtrl.getValueAndMsg();
    const name = this.name();
    const success = !valueAndMsg.hasError();
    return {
      success: success,
      title: `${name} ${
        success ? trans("transformer.previewSuccess") : trans("transformer.previewFail")
      }`,
      dataType: typeof valueAndMsg.value === "function" ? "function" : "json",
      errorMessage: valueAndMsg.msg,
      data: valueAndMsg.value,
    };
  }

  type(): BottomResTypeEnum {
    return BottomResTypeEnum.Transformer;
  }

  id(): string {
    return this.name();
  }

  name(): string {
    return this.children.name.getView();
  }

  icon(): ReactNode {
    return getBottomResIcon(BottomResTypeEnum.Transformer);
  }
}

const TransformerItemComp = withExposingRaw(
  TransformerAsBottomRes,
  {
    value: trans("value"),
    code: trans("code"),
  },
  (comp) => {
    return fromRecord({
      value: comp.children.script.exposingNode(),
    });
  }
);

export const TransformerListComp = bottomResListComp(
  TransformerItemComp,
  BottomResTypeEnum.Transformer,
  {
    script: "return currentUser.name",
  }
);
