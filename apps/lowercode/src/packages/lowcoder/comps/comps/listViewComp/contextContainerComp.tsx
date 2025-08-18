import { withSelectedMultiContext } from "#lowcoder/comps/generators/withSelectedMultiContext";
import { SimpleContainerComp } from "../containerBase/simpleContainerComp";

const ContextContainerTmpComp: any = withSelectedMultiContext(SimpleContainerComp as any);

export class ContextContainerComp extends ContextContainerTmpComp {}
