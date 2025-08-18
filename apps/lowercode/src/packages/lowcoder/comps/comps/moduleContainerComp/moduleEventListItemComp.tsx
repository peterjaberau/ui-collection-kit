import { StringControl } from "#lowcoder/comps/controls/codeControl";
import CompNameControl from "#lowcoder/comps/controls/compNameControl";
import { MultiCompBuilder } from "#lowcoder/comps/generators";
import { withExposingRaw } from "#lowcoder/comps/generators/withExposing";
import { ModuleLayoutCompName } from "#lowcoder/constants/compConstants";
import {
  fromRecord,
  fromValue,
  FunctionNode,
  Node,
  routeByNameAction,
  triggerModuleEventAction,
} from "#lowcoder-core/index";
import { lastValueIfEqual } from "#lowcoder/util/objectUtils";

const childrenMap: any = {
  name: CompNameControl,
  description: StringControl,
};

const ModuleEventListItemCompBase = new MultiCompBuilder(childrenMap, (props) => props).build();

export const ModuleEventListItemComp: any = withExposingRaw(ModuleEventListItemCompBase, {}, (comp) => {
  const name = comp.children.name.getView();
  const node = fromRecord({
    trigger: new FunctionNode(fromValue(name), (n) => {
      return () => {
        comp.dispatch(routeByNameAction(ModuleLayoutCompName, triggerModuleEventAction(n)));
      };
    }),
  });
  return lastValueIfEqual<[string, Node<unknown>]>(
    comp,
    "module_event_trigger",
    [name, node],
    (a, b) => a[0] === b[0]
  )[1];
});
