import { uiCompRegistry } from "#lowcoder/comps/uiCompRegistry";
import { trans } from "#lowcoder/i18n";
import { chartColorPalette } from "#lowcoder-design/index";
import Example from "../../common/Example";
import ExampleGroup from "../../common/ExampleGroup";

const ChartCompWithDefault = uiCompRegistry["pivotTable"].comp;

export default function PivotTableExample() {
  return (
    <>
      <ExampleGroup
        title={trans("componentDoc.basicUsage")}
        description={trans("componentDoc.basicDemoDescription")}
      >
        <Example
          title={trans("componentDoc.default")}
          config={{
          }}
          compFactory={ChartCompWithDefault}
        />
      </ExampleGroup>
    </>
  );
}
