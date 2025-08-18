import { UICompType } from "#lowcoder/comps/uiCompRegistry";
import { trans } from "#lowcoder/i18n";

const extra: { [key in UICompType]?: string } = {
  table: trans("componentDocExtra.table"),
};

export default extra;
