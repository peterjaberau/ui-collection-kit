// WidgetRegistryMachine.ts
// XState v5 conversion of the static WidgetFactory into a stateful actor + selectors.
// Notes
// - Keeps the same responsibilities as the original class but exposes them via
//   an XState actor with pure selectors (sync) and events for mutation.
// - Uses per-type memoization caches to mirror @memoize/@freeze behavior.
// - Strongly typed hooks for reading data from the actor snapshot.
// - Non-core utilities referenced in original file (e.g., enhancePropertyPaneConfig)
//   are left as imports so you can wire your existing implementations.

import { createMachine, fromPromise } from "xstate";
import { createActor, ActorRefFrom, SnapshotFrom } from "xstate";
import React from "react";


// External utilities you already have in your codebase
declare function enhancePropertyPaneConfig(cfg: any[], features?: any): any[];
declare function convertFunctionsToString(cfg: any[]): any[];
declare function addPropertyConfigIds(cfg: any[], mutate?: boolean): any[];
declare function addSearchConfigToPanelConfig(cfg: any[], features?: any, type?: any, widgetType?: any): any[];
declare function generatePropertyPaneSearchConfig(contentCfg: any[], styleCfg: any[]): any[];

// Feature enhancement maps from original codebase
export const WidgetFeatureProps: any = {};
export const WidgetFeaturePropertyEnhancements: any = {};

// Misc
declare const log: { debug: (...a: any[]) => void; error: (...a: any[]) => void };
declare function generateReactKey(): string;
declare function getDefaultOnCanvasUIConfig(defaults: any): any;

const FILL_WIDGET_MIN_WIDTH = 120;



export const widgetRegistryMachine = createMachine({
  id: "widgetRegistry",
  context: () => ({
    widgetTypes: {},
    widgetConfigMap: new Map(),
    widgetDefaultPropertiesMap: new Map(),
    widgetsMap: new Map(),
    widgetBuilderMap: new Map(),
    caches: {
      derived: new Map(),
      defaults: new Map(),
      deps: new Map(),
      meta: new Map(),
      contentPane: new Map(),
      stylePane: new Map(),
      combinedPane: new Map(),
      searchPane: new Map(),
      autoLayout: new Map(),
      anvil: new Map(),
      typeConfigMap: new Map(),
      methods: new Map(),
      stylesheet: new Map(),
      setter: new Map(),
      loading: new Map(),
    },
  }),
  initial: "ready",
  states: {
    ready: {
      on: {
        REGISTER_WIDGETS: {
          actions: ({ context, event }) => {
            const start = typeof performance !== "undefined" ? performance.now() : 0;
            for (const [widget, builder] of event.widgets) {
              context.widgetsMap.set(widget.type, widget);
              context.widgetTypes[widget.type] = widget.type;
              context.widgetBuilderMap.set(widget.type, builder);
              configureWidgetIntoContext(widget, context);
            }
            if (start) log.debug("Widget registration took:", (performance.now() - start), "ms");
          },
        },
        CLEAR: {
          actions: ({ context }) => {
            context.widgetTypes = {};
            context.widgetConfigMap.clear();
            context.widgetDefaultPropertiesMap.clear();
            context.widgetsMap.clear();
            context.widgetBuilderMap.clear();
            // clear caches
            Object.values(context.caches).forEach((m) => (m as Map<any, any>).clear());
          },
        },
      },
    },
  },
});

function configureWidgetIntoContext(widget: any, ctx: any) {
  const defaultConfig = widget.getDefaults();
  const config = widget.getConfig();

  const onCanvasUI = config.onCanvasUI || getDefaultOnCanvasUIConfig(defaultConfig);
  const { IconCmp } = widget.getMethods();
  const features = widget.getFeatures?.() || undefined;

  let enhancedFeatures: any = {};
  if (features) {
    Object.keys(features).forEach((registeredFeature: string) => {
      enhancedFeatures = Object.assign(
        {},
        WidgetFeatureProps[registeredFeature],
        WidgetFeaturePropertyEnhancements[registeredFeature]?.(widget) || {},
      );
    });
  }

  const _config = Object.freeze({
    type: widget.type,
    ...widget.getDefaults(),
    ...enhancedFeatures,
    searchTags: config.searchTags,
    tags: config.tags,
    hideCard: !!config.hideCard || !(config.iconSVG || IconCmp),
    isDeprecated: !!config.isDeprecated,
    replacement: config.replacement,
    displayName: config.name,
    displayOrder: config.displayOrder,
    key: generateReactKey(),
    iconSVG: config.iconSVG,
    thumbnailSVG: config.thumbnailSVG,
    isCanvas: config.isCanvas,
    needsHeightForContent: config.needsHeightForContent,
    isSearchWildcard: config.isSearchWildcard,
    needsErrorInfo: !!config.needsErrorInfo,
    onCanvasUI,
  });

  ctx.widgetDefaultPropertiesMap.set(widget.type, Object.freeze({ ...defaultConfig }));
  ctx.widgetConfigMap.set(widget.type, _config);
}

/**
 * ---- Actor factory -------------------------------------------------------------
 */
export type WidgetRegistryActor = ActorRefFrom<typeof widgetRegistryMachine>;
export type WidgetRegistrySnapshot = SnapshotFrom<typeof widgetRegistryMachine>;

export function createWidgetRegistryActor(initial?: any[]) {
  const actor = createActor(widgetRegistryMachine);
  actor.start();
  if (initial?.length) actor.send({ type: "REGISTER_WIDGETS", widgets: initial });
  return actor;
}

/**
 * ---- Selectors (sync, read-only) ----------------------------------------------
 * These are drop-in replacements for most static getters from WidgetFactory.
 */
export const selectWidget = (snap: WidgetRegistrySnapshot, type: any): any => {
  return snap.context.widgetsMap.get(type);
};

export const selectConfig = (snap: WidgetRegistrySnapshot, type: any) => {
  const cfg = snap.context.widgetConfigMap.get(type);
  if (!cfg) log.error(`Widget config is not registered for type: ${type}`);
  return cfg;
};

export const selectConfigsObject = (snap: WidgetRegistrySnapshot) => {
  return Object.fromEntries(snap.context.widgetConfigMap);
};

export const selectCreateWidget = (
  snap: WidgetRegistrySnapshot,
  widgetData: CanvasWidgetStructure,
  renderMode: RenderMode,
): React.ReactNode | null => {
  const builder = snap.context.widgetBuilderMap.get(widgetData.type);
  if (!builder) {
    const ex: WidgetCreationException = { message: `Widget Builder not registered for widget type ${widgetData.type}` };
    log.error(ex);
    return null;
  }
  const any = {
    key: widgetData.widgetId,
    isVisible: true,
    ...widgetData,
    renderMode,
  } as const;
  return builder(any);
};

export const selectWidgetTypes = (snap: WidgetRegistrySnapshot): any[] => {
  return Array.from(snap.context.widgetsMap.keys());
};

// ---- Memoized per-type helpers -------------------------------------------------
function memoGet<T>(m: Map<WidgetType, T>, type: any, compute: () => T, onMissingMsg: string): T {
  if (m.has(type)) return m.get(type)!;
  const val = compute();
  if (!val) log.error(onMissingMsg);
  m.set(type, (val as any));
  return val;
}

export const selectDerivedPropertiesMap = (snap: WidgetRegistrySnapshot, type: any): DerivedPropertiesMap => {
  const { caches, widgetsMap } = snap.context;
  const w = widgetsMap.get(type);
  return memoGet(caches.derived, type, () => w?.getDerivedPropertiesMap?.() || {},
    `Derived properties are not defined for widget type: ${type}`);
};

export const selectDefaultPropertiesMap = (snap: WidgetRegistrySnapshot, type: any): Record<string, string> => {
  const { caches, widgetsMap } = snap.context;
  const w = widgetsMap.get(type);
  return memoGet(caches.defaults, type, () => w?.getDefaultPropertiesMap?.() || {},
    `Default properties are not defined for widget type: ${type}`);
};

export const selectDependencyMap = (snap: WidgetRegistrySnapshot, type: any): Record<string, string[]> => {
  const { caches, widgetsMap } = snap.context;
  const w = widgetsMap.get(type);
  return memoGet(caches.deps, type, () => w?.getDependencyMap?.() || {},
    `Dependency map is defined for widget type: ${type}`);
};

export const selectMetaPropertiesMap = (snap: WidgetRegistrySnapshot, type: any): any => {
  const { caches, widgetsMap } = snap.context;
  const w = widgetsMap.get(type);
  return memoGet(caches.meta, type, () => w?.getMetaPropertiesMap?.() || {},
    `Meta properties are not defined for widget type: ${type}`);
};

// Property pane (content + style + combined + search)
const enhancePipeline = (cfg: any[], features?: any, kind?: any, type?: any) => {
  const step1 = enhancePropertyPaneConfig(cfg, features);
  const step2 = convertFunctionsToString(step1);
  const step3 = addPropertyConfigIds(step2);
  return kind ? addSearchConfigToPanelConfig(step3, features, kind, type) : step3;
};

export const selectPropertyPaneContentConfig = (snap: any, type: any, any: any): any[] => {
  const { caches, widgetsMap } = snap.context;
  return memoGet(caches.contentPane, type, () => {
    const w = widgetsMap.get(type);
    const features = w?.getFeatures?.();
    const base = (w?.getPropertyPaneContentConfig?.() || []) as readonly PropertyPaneSectionConfig[];
    const enhanced = enhancePipeline(base, features, 'CONTENT', type) as PropertyPaneSectionConfig[];
    if (enhanced.some((d) => (d as PropertyPaneSectionConfig).hasDynamicProperties)) {
      return enhanced.map((section) => {
        const s = { ...section } as PropertyPaneSectionConfig;
        if (s.hasDynamicProperties) {
          const dyn = s.generateDynamicProperties?.(any) || [];
          if (dyn.length) addPropertyConfigIds(dyn, false);
          s.children = [...(dyn || []), ...(s.children || [])];
        }
        return s;
      });
    }
    return enhanced;
  }, "Widget property pane content config not defined");
};

export const selectPropertyPaneStyleConfig = (snap: any, type: any): any[] => {
  const { caches, widgetsMap } = snap.context;
  return memoGet(caches.stylePane, type, () => {
    const w = widgetsMap.get(type);
    const features = w?.getFeatures?.();
    const base = (w?.getPropertyPaneStyleConfig?.() || []) as any[];
    return enhancePipeline(base, features, 'STYLE', type);
  }, "Widget property pane style config not defined");
};

export const selectPropertyPaneCombinedConfig = (snap: any, type: any, any: any): any[] => {
  const { caches } = snap.context;
  return memoGet(caches.combinedPane, type, () => {
    const content = selectPropertyPaneContentConfig(snap, type, any);
    const style = selectPropertyPaneStyleConfig(snap, type);
    return [...content, ...style];
  }, "Widget property pane combined config not defined");
};

export const selectPropertyPaneSearchConfig = (snap: any, type: any, any: any): any[] => {
  const { caches } = snap.context;
  return memoGet(caches.searchPane, type, () => {
    const content = selectPropertyPaneContentConfig(snap, type, any);
    const style = selectPropertyPaneStyleConfig(snap, type);
    return generatePropertyPaneSearchConfig(content, style) || [];
  }, "Widget property pane search config not defined");
};

export const selectAutoLayoutConfig = (snap: any, type: any): any => {
  const { caches, widgetsMap, widgetConfigMap } = snap.context;
  if (type?.includes("WDS")) return {};
  return memoGet(caches.autoLayout, type, () => {
    const w = widgetsMap.get(type);
    const base = w?.getAutoLayoutConfig?.();
    if (!base) {
      log.error(`Auto layout config is not defined for widget type: ${type}`);
      return { autoDimension: {}, widgetSize: [], disableResizeHandles: {}, disabledPropsDefaults: {} };
    }
    return {
      ...base,
      widgetSize: (base.widgetSize?.map((sz) => ({
        ...sz,
        configuration: (props: any) => {
          if (!props) {
            return {
              minWidth: widgetConfigMap.get(type)?.minWidth || FILL_WIDGET_MIN_WIDTH,
              minHeight: widgetConfigMap.get(type)?.minHeight || 80,
            };
          }
          return sz.configuration(props);
        },
      })) || []),
      autoDimension: base.autoDimension ?? {},
      disabledPropsDefaults: base.disabledPropsDefaults ?? {},
    } as AutoLayoutConfig;
  }, "Auto layout config not defined");
};

export const selectAnvilConfig = (snap: any, type: any): AnvilConfig => {
  const { caches, widgetsMap } = snap.context;
  return memoGet(caches.anvil, type, () => {
    const w = widgetsMap.get(type);
    const base = w?.getAnvilConfig?.();
    if (!base) {
      log.error(`Anvil config is not defined for widget type: ${type}`);
      return { isLargeWidget: false, widgetSize: {} };
    }
    return base;
  }, "Anvil config not defined");
};

export const selectTypeConfigMap = (snap: any) => {
  // aggregate on demand (no strong need to cache; keep simple)
  const out: Record<string, any> = {};
  for (const type of selectWidgetTypes(snap)) {
    out[type] = {
      defaultProperties: selectDefaultPropertiesMap(snap, type),
      derivedProperties: selectDerivedPropertiesMap(snap, type),
      metaProperties: selectMetaPropertiesMap(snap, type),
    };
  }
  return out;
};

export const selectAutocompleteDefinitions = (snap: any, type: any): any => {
  const w = snap.context.widgetsMap.get(type);
  const def = w?.getAutocompleteDefinitions?.();
  if (!def) log.error(`Auto complete definitions are not defined for widget type: ${type}`);
  return def || {};
};

export const selectSetterConfig = (snap: any, type: any): any => {
  const { caches, widgetsMap } = snap.context;
  const w = widgetsMap.get(type);
  return memoGet(caches.setter, type, () => w?.getSetterConfig?.() || {}, "Setter config not defined");
};

export const selectLoadingProperties = (snap: any, type: any): any => {
  const { caches, widgetsMap } = snap.context;
  const w = widgetsMap.get(type);
  return memoGet(caches.loading, type, () => w?.getLoadingProperties?.(), "Loading properties not defined");
};

export const selectStylesheetConfig = (snap: any, type: any) => {
  const { caches, widgetsMap } = snap.context;
  const w = widgetsMap.get(type);
  return memoGet(caches.stylesheet, type, () => {
    const s = w?.getStylesheetConfig?.();
    if (!s) log.error(`stylesheet config is not defined for widget type: ${type}`);
    return s as unknown;
  }, "Stylesheet not defined");
};

export const selectMethods = (snap: any, type: any): any => {
  const { caches, widgetsMap } = snap.context;
  const w = widgetsMap.get(type);
  return memoGet(caches.methods, type, () => w?.getMethods?.() || {}, "Widget methods not defined");
};

// ---- Paste operations ----------------------------------------------------------
export const performPasteOperationChecks = (
  snap: any,
  allWidgets: any,
  oldWidget: any,
  newWidget: any,
  widgetIdMap: Record<string, string>,
): any => {
  const widget = snap.context.widgetsMap.get(newWidget.type);
  if (!widget || !widget.pasteOperationChecks) return newWidget;
  const res = widget.pasteOperationChecks(allWidgets, oldWidget, newWidget, widgetIdMap);
  return res !== null ? res : newWidget;
};

export const performPasteOperation = async (
  snap: any,
  allWidgets: any,
  copiedWidgets: CopiedWidgetData[],
  destinationInfo: PasteDestinationInfo,
  widgetIdMap: Record<string, string>,
  reverseWidgetIdMap: Record<string, string>,
): Promise<any> => {
  const parentOrder = destinationInfo.parentOrder;
  const parent: any = allWidgets[parentOrder[parentOrder.length - 1]] as any;
  const widget = snap.context.widgetsMap.get(parent.type);
  if (!widget || !widget.performPasteOperation) return allWidgets;
  const res = await widget.performPasteOperation(
    allWidgets,
    copiedWidgets,
    destinationInfo,
    widgetIdMap,
    reverseWidgetIdMap,
  );
  return res;
};

/**
 * ---- Usage --------------------------------------------------------------------
 * const registry = createWidgetRegistryActor();
 * registry.send({ type: "REGISTER_WIDGETS", widgets: [[MyWidget, myBuilder], ...] });
 * const snap = registry.getSnapshot();
 * const cfg = selectConfig(snap, "BUTTON_WIDGET");
 * const node = selectCreateWidget(snap, canvasWidget, "VIEW");
 */
