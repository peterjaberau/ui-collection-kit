import { ThemeType } from "#lowcoder/api/commonSettingApi";
import { EditorContext } from "#lowcoder/comps/editorState";
import { simpleMultiComp, stateComp, withViewFn } from "#lowcoder/comps/generators";
import { withSimpleExposing } from "#lowcoder/comps/generators/withExposing";
import { withMethodExposing } from "#lowcoder/comps/generators/withMethodExposing";
import { getGlobalSettings } from "#lowcoder/comps/utils/globalSettings";
import { getCurrentTheme } from "#lowcoder/comps/utils/themeUtil";
import { trans } from "#lowcoder/i18n";
import { isEqual } from "lodash";
import { useContext, useEffect, useMemo } from "react";
import { getThemeList } from "#lowcoder/redux/selectors/commonSettingSelectors";
import { useSelector } from "#lowcoder/redux/store/store";
import { setLocalThemeId } from "#lowcoder/util/localStorageUtil";

type ExposingTheme = {
  id: string;
  name: string;
};

type ExposingData = ExposingTheme & {
  allThemes: ExposingTheme[];
};

function exposingTheme(theme?: ThemeType): ExposingTheme {
  return {
    id: theme?.id ?? "",
    name: theme?.name ?? "",
  };
}

const INIT_DATA: ExposingData = {
  ...exposingTheme(),
  allThemes: [],
};

let ThemeTempComp = withViewFn(
  simpleMultiComp({
    localThemeId: stateComp<string | null>(null),
    stateValue: stateComp<ExposingData>(INIT_DATA),
  }),
  (comp) => {
    const commonThemes = useSelector(getThemeList);
    const globalThemes = getGlobalSettings().orgCommonSettings?.themeList;
    const themeList = useMemo(
      () => commonThemes || globalThemes || [],
      [commonThemes, globalThemes]
    );
    const editorState = useContext(EditorContext);
    const appThemeId = editorState?.getAppSettings().themeId;
    const currentTheme = getCurrentTheme(themeList, appThemeId);
    const stateValue = useMemo(() => comp.children.stateValue.getView(), [comp.children.stateValue]);

    const themeValue = useMemo(() => {
      if (
        currentTheme?.id !== stateValue.id
        || currentTheme?.id !== stateValue.name
        || !isEqual(themeList, stateValue.allThemes)
      ) {
        return {
          ...exposingTheme(currentTheme),
          allThemes: themeList.map((t) => exposingTheme(t)),
        }
      }
      return stateValue;
    }, [themeList, currentTheme, stateValue])

    useEffect(() => {
      if (!isEqual(themeValue, stateValue)) {
        comp.children.stateValue.dispatchChangeValueAction({
          ...exposingTheme(currentTheme),
          allThemes: themeList.map((t) => exposingTheme(t)),
        })
      }
    }, [themeValue, stateValue]);

    return null;
  }
);

export let ThemeComp = withSimpleExposing(ThemeTempComp, (comp) =>
  comp.children.stateValue.getView()
);

ThemeComp = withMethodExposing(ThemeComp, [
  {
    method: {
      name: "switchTo",
      description: trans("themeComp.switchTo"),
      params: [{ name: "themeId", type: "string" }],
    },
    execute: (comp, params) => {
      const themeId = params?.[0];
      if (typeof themeId !== "string") {
        return;
      }
      if (themeId) {
        const data = comp.children.stateValue.getView();
        if (!data.allThemes.find((t) => t.id === themeId)) {
          return;
        }
      }
      setLocalThemeId(themeId);
      // trigger update
      comp.children.localThemeId.dispatchChangeValueAction(themeId);
    },
  },
]);
