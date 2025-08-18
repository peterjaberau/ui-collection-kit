import numbro from "numbro";
import Papa from "papaparse";
import * as uuid from "uuid";
import * as supabase from "@supabase/supabase-js";
import * as alasql from "alasql";

import * as styledNameExports from "styled-components";
import styledDefault from "styled-components";
export * as styledm from "styled-components";
export * from "#lowcoder/comps/comps/containerBase/containerCompBuilder";
export * from "#lowcoder/comps/comps/containerBase/iContainer";
export * from "#lowcoder/comps/comps/containerBase/utils";
export * from "#lowcoder/comps/comps/containerBase/simpleContainerComp";
export * from "#lowcoder/comps/utils/backgroundColorContext";
export { getData } from "#lowcoder/comps/comps/listViewComp/listViewUtils";
export { gridItemCompToGridItems, InnerGrid } from "#lowcoder/comps/comps/containerComp/containerView";
export type { ContainerBaseProps } from "#lowcoder/comps/comps/containerComp/containerView";

export { Layers } from "#lowcoder/constants/Layers";
export * from "#lowcoder/comps/controls/eventHandlerControl";
export * from "#lowcoder/comps/utils/methodUtils";
// export * from Button

export { useUserViewMode } from "#lowcoder/util/hooks";
export * from "#lowcoder/comps/editorState";
export * from "#lowcoder/redux/store/store";

// util
export * from "#lowcoder/util/appUtils";
export * from "#lowcoder/util/bottomResUtils";
export * from "#lowcoder/util/cacheUtils";
export * from "#lowcoder/util/commonUtils";
export * from "#lowcoder/util/convertUtils";
export * from "#lowcoder/util/dateTimeUtils";
export * from "#lowcoder/util/editoryHistory";
export * from "#lowcoder/util/envUtils";
export * from "#lowcoder/util/fileUtils";
export * from "#lowcoder/util/history";
export * from "#lowcoder/util/historyManager";
export * from "#lowcoder/util/hooks";
export * from "#lowcoder/util/hotkeys";
export * from "#lowcoder/util/jsonTypes";
export * from "#lowcoder/util/keyUtils";
export * from "#lowcoder/util/localStorageUtil";
export * from "#lowcoder/util/memoize";
export * from "#lowcoder/util/objectUtils";
export * from "#lowcoder/util/objectUtils";
export * from "#lowcoder/util/perfUtils";
export * from "#lowcoder/util/permissionUtils";
export * from "#lowcoder/util/promiseUtils";
export * from "#lowcoder/util/reducerUtils";
export * from "#lowcoder/util/scheduleUtils";
export * from "#lowcoder/util/stringUtils";
export * from "#lowcoder/util/tutorialUtils";
export * from "#lowcoder/util/uaUtils";
export * from "#lowcoder/util/urlUtils";
export * from "#lowcoder/util/context/ExternalEditorContext";

// constant
export { CanvasContainerID } from "#lowcoder/constants/domLocators";

// comps
export * from "#lowcoder/comps/index";
export * from "#lowcoder/comps/comps/rootComp";

// comp utils
export * from "#lowcoder/comps/utils/useCompInstance";
export * from "#lowcoder/comps/utils/idGenerator";
export * from "#lowcoder/comps/utils/propertyUtils";
export * from "#lowcoder/comps/utils/globalSettings";
export * from "#lowcoder/comps/utils";
export * from "#lowcoder/comps/utils/themeContext";

// design
export * from "lowcoder-design";
export * from "#lowcoder-core/index";

// controls
export * from "#lowcoder/comps/controls/alignControl";
export * from "#lowcoder/comps/controls/appSelectControl";
export * from "#lowcoder/comps/controls/autoHeightControl";
export * from "#lowcoder/comps/controls/boolControl";
export * from "#lowcoder/comps/controls/codeControl";
export * from "#lowcoder/comps/controls/codeStateControl";
export * from "#lowcoder/comps/controls/codeTextControl";
export * from "#lowcoder/comps/controls/colorControl";
export * from "#lowcoder/comps/controls/compNameControl";
export * from "#lowcoder/comps/controls/controlParams";
export * from "#lowcoder/comps/controls/dropdownControl";
export * from "#lowcoder/comps/controls/dropdownInputSimpleControl";
export * from "#lowcoder/comps/controls/eventHandlerControl";
export * from "#lowcoder/comps/controls/actionSelector/actionSelectorControl";
export * from "#lowcoder/comps/controls/iconControl";
export * from "#lowcoder/comps/controls/shapeControl";
export * from "#lowcoder/comps/controls/keyValueControl";
export * from "#lowcoder/comps/controls/keyValueListControl";
export * from "#lowcoder/comps/controls/labelControl";
export * from "#lowcoder/comps/controls/millisecondControl";
export * from "#lowcoder/comps/controls/optionsControl";
export * from "#lowcoder/comps/controls/paramsControl";
export * from "#lowcoder/comps/controls/querySelectControl";
export * from "#lowcoder/comps/controls/refControl";
export * from "#lowcoder/comps/controls/simpleStringControl";
export * from "#lowcoder/comps/controls/stringSimpleControl";
export * from "#lowcoder/comps/controls/styleControl";
export * from "#lowcoder/comps/controls/styleControlConstants";
export * from "#lowcoder/comps/controls/slotControl";
export * from "#lowcoder/comps/controls/sliderControl";

// generators
export * from "#lowcoder/comps/generators/changeDataType";
export * from "#lowcoder/comps/generators/hookToComp";
export * from "#lowcoder/comps/generators/index";
export * from "#lowcoder/comps/generators/list";
export * from "#lowcoder/comps/generators/multi";
export * from "#lowcoder/comps/generators/sameTypeMap";
export * from "#lowcoder/comps/generators/simpleGenerators";
export * from "#lowcoder/comps/generators/uiCompBuilder";
export * from "#lowcoder/comps/generators/withContext";
export * from "#lowcoder/comps/generators/withDispatchHook";
export * from "#lowcoder/comps/generators/withErrorBoundary";
export * from "#lowcoder/comps/generators/withExposing";
export * from "#lowcoder/comps/generators/withIsLoading";
export * from "#lowcoder/comps/generators/withMethodExposing";
export * from "#lowcoder/comps/generators/withType";
export * from "#lowcoder/comps/generators/controlCompBuilder";

export * from "appView/bootstrapAt";
export * from "appView/LowcoderAppView";
export * from "appView/AppViewInstance";

export * from "ide/CompIde";
export * from "ide/CompPlayground";

export * as antd from "antd/es";
export const styled = { ...styledDefault, ...styledNameExports };

window.numbro = numbro;
window.Papa = Papa;
window.uuid = uuid;
window.supabase = supabase;
window.alasql = alasql;
