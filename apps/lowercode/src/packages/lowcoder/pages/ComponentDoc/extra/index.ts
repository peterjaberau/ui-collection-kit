import { UICompType } from "#lowcoder/comps/uiCompRegistry";
import { trans } from "#lowcoder/i18n";

const extra: { [key in UICompType]?: string } | any = {
  table: trans("componentDocExtra.table"),
};

export default extra;
