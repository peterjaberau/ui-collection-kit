import { UICompType } from "#lowcoder/comps/uiCompRegistry";
import { IProperty } from "./common/Exposing";

const TypeObject = "Object";

type IExtraPropExposeInfo = {
  [n in UICompType]?: {
    properties?: Record<string, Pick<IProperty, "type">>;
  };
};

const extraExposeInfo: IExtraPropExposeInfo | any = {
  table: {
    properties: {
      selectedRow: {
        type: TypeObject,
      },
    },
  },
};

export default extraExposeInfo;
