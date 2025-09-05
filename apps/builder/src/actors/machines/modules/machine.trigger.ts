import _, { get, isEmpty, omit } from "lodash"
import { createMachine, setup, assign, spawnChild, enqueueActions } from "xstate"
import { getCanvasWidgets, getUsedWidgetTypes, getAllUniqueWidgetTypesInUiModules } from "#actors/fn/selectors"

import {
  entitiesSelector,
  uiSelector,
  evaluationsSelector,
  organizationSelector,
  settingsSelector,
} from "#actors/selectors"

import { getLayoutSystemType, getIsMobileBreakPoint } from "#actors/selectors/uiSelector"

import {
  getInputsForModule,
  getModuleInstances,
  getModuleInstanceEntities,
  getWidgets,
  getWidgetsMeta,
  getCurrentActions,
  getCurrentModuleActions,
} from "#actors/selectors/entitiesSelector"

import { getLoadingEntities } from "#actors/selectors/evaluationsSelector"

export const triggerMachine = setup({
  types: {} as any,
  actions: {
    initiateActionTriggerExecution: assign(({ context, event, system }) => {
      const { event: payloadEvent, source, triggerPropertyName } = event.payload

      const entitiesActorRef = system.get("entities")
      console.log("initiateActionTriggerExecution---", {
        payload: event.payload,
        entitiesActorRef: entitiesActorRef,
      })
    }),
    updateContext: assign(({ context, event }) => {
      context.lastEvent = event
      context.payload = event.payload || {}
    }),

    loadAndRegisterOnlyCanvasWidgets: assign(({ context, event, system }) => {
      const getEntitiesActorRef = system.get("entities")
      const entitiesContext = getEntitiesActorRef.getSnapshot()?.context

      const widgetTypes = getUsedWidgetTypes(entitiesContext)
      const uiModuleTypes = getAllUniqueWidgetTypesInUiModules()

      const uniqueWidgetTypes = Array.from(new Set([...uiModuleTypes, ...widgetTypes, "SKELETON_WIDGET"]))

      console.log("loadAndRegisterOnlyCanvasWidgets---", {
        widgetTypes,
        uiModuleTypes,
      })
    }),

    getAppDetails: assign(({ context, event, system }) => {
      const { getEntitiesContext } = entitiesSelector(system)
      const { getUiContext } = uiSelector(system)
      const { getOrganizationContext } = organizationSelector(system)

      context.appDetails = {
        pageId: getEntitiesContext.pageList.currentPageId,
        appId: getUiContext.applications.currentApplication?.id || "",
        appMode: getEntitiesContext.app.mode,
        appName: getUiContext.applications.currentApplication?.name || "",
        isExampleApp: getUiContext.applications.currentApplication?.appIsExample || false,
        instanceId: getOrganizationContext?.instanceId,
      }
    }),

    getUnevaluatedDataTree: assign(({ context, event, system }) => {
      const { getEntitiesContext } = entitiesSelector(system)
      const { getUiContext } = uiSelector(system)
      const { getOrganizationContext } = organizationSelector(system)
      const { getEvaluationsContext } = evaluationsSelector(system)

      //getActionsFromUnevaluatedDataTree.getCurrentActionsEntities
      const actions = getCurrentActions(getEntitiesContext)
      const moduleActions = getCurrentModuleActions(getEntitiesContext)

      // THE MOST IMPORTANT FOR NOW IS TO GET THE UNEVALUATED DATA TREE FROM WIDGETS
      // AS THE EXAMPLE FOCUSING IN WIDGETS FOR NOW

      //[--start] getWidgetsFromUnevaluatedDataTree in dataTreeSelectors
      //[--start] getModuleData in dataTreeSelectors
      const moduleData = {
        moduleInputs: getInputsForModule(),
        moduleInstances: getModuleInstances(),
        moduleInstanceEntities: getModuleInstanceEntities(),
      }
      const widgets = getWidgets(getEntitiesContext)
      const widgetsMeta = getWidgetsMeta(getEntitiesContext)

      //[--start] getLoadingEntities in evaluationsSelectors
      const loadingEntities = getLoadingEntities(getEvaluationsContext)

      //[--start] getLayoutSystemPayload in uiSelector
      const layoutSystemPayload = {
        layoutSystemType: getLayoutSystemType(getUiContext),
        isMobile: getIsMobileBreakPoint(getUiContext),
      }
    }),

    //getActionsFromUnevaluatedDataTree
    getActionsFromUnevaluatedDataTree: assign(({ context, event, system }) => {}),
    getCurrentActionsEntities: assign(({ context, event, system }) => {
      const { getEntitiesContext } = entitiesSelector(system)
      const actions = getCurrentActions(getEntitiesContext)
      const moduleActions = getCurrentModuleActions(getEntitiesContext)
    }),

    //getWidgetsFromUnevaluatedDataTree
    getWidgetsFromUnevaluatedDataTree: assign(({ context, event, system }) => {
      const { getUiContext } = uiSelector(system)
      const { getEntitiesContext } = entitiesSelector(system)
      const { getEvaluationsContext } = evaluationsSelector(system)

      const moduleData = {
        moduleInputs: getInputsForModule(),
        moduleInstances: getModuleInstances(),
        moduleInstanceEntities: getModuleInstanceEntities(),
      }
      const widgets = getWidgets(getEntitiesContext)
      const widgetsMeta = getWidgetsMeta(getEntitiesContext)
      const loadingEntities = getLoadingEntities(getEvaluationsContext)
      const layoutSystemPayload = {
        layoutSystemType: getLayoutSystemType(getUiContext),
        isMobile: getIsMobileBreakPoint(getUiContext),
      }

      const dataTree = {}
      const configTree = {}

      if (!isEmpty(moduleData.moduleInputs)) {
        dataTree["inputs"] = null
        configTree["inputs"] = null
      }

      if (!isEmpty(moduleData.moduleInstances)) {
        Object.values(moduleInstances).forEach((moduleInstance) => {
          dataTree[moduleInstance.name] = null
          configTree[moduleInstance.name] = null
        })
      }

      Object.values(widgets).forEach((widget) => {
        const { configEntity, unEvalEntity } = generateDataTreeWidget(
          widget,
          widgetsMeta[widget.metaWidgetId || widget.widgetId],
          loadingEntities,
          layoutSystemPayload.layoutSystemType,
          layoutSystemPayload.isMobile,
        )

        dataTree[widget.widgetName] = unEvalEntity
        configTree[widget.widgetName] = configEntity
      })
    }),
    getModuleData: assign(({ context, event, system }) => {
      const moduleData = {
        moduleInputs: getInputsForModule(),
        moduleInstances: getModuleInstances(),
        moduleInstanceEntities: getModuleInstanceEntities(),
      }
    }),
    getLayoutSystemPayload: assign(({ context, event, system }) => {
      const { getUiContext } = uiSelector(system)
      const layoutSystemPayload = {
        layoutSystemType: getLayoutSystemType(getUiContext),
        isMobile: getIsMobileBreakPoint(getUiContext),
      }
    }),
  },
  actors: {},
  guards: {
    isDynamicString: (({ context }: any) => {
      const { dynamicString } = context.payload
      return !!dynamicString && typeof dynamicString === "string"
    }) as any,
  },
}).createMachine({
  initial: "idle",
  context: ({ input }: any) => {
    return {
      request: {
        actions: {
          dataTree: {},
          configTree: {},
        },
        jsActions: {
          dataTree: {},
          configTree: {},
        },
        widgets: {
          dataTree: {},
          configTree: {},
        },
        metaWidgets: {
          dataTree: {},
          configTree: {},
        },
        appData: {},
        theme: {},
        currentWorkspace: {},
        currentApplication: {},
        currentPageName: null,
        currentEnvironmentName: null,
      },

      // relevant for evaluation
      appDetails: {},
      unEvalTree: {},

      // additional - not needed for evaluation
      configTree: {},
      getActionsFromUnevaluatedDataTree: {
        getCurrentActionsEntities: [],
      },

      payload: {},
      lastEvent: null,
      ...input,
    }
  },
  states: {
    idle: {
      on: {
        EXECUTE_TRIGGER_REQUEST: {
          actions: ["updateContext"],
          target: "executing",
        },
      },
    },
    executing: {
      always: [
        {
          guard: "isDynamicString",
          actions: enqueueActions(({ context, event, enqueue, check }) => {
            enqueue("getAppDetails")

            //getUnevaluatedDataTree
            //getActionsFromUnevaluatedDataTree
            //getCurrentActionsEntities
          }),
          target: "idle",
        },
        {
          target: "idle",
        },
      ],
    },
  },
})

export const WIDGET_PROPS_TO_SKIP_FROM_EVAL = {
  children: true,
  parentId: true,
  renderMode: true,
  detachFromLayout: true,
  noContainerOffset: false,
  hideCard: true,
  isDeprecated: true,
  searchTags: true,
  iconSVG: true,
  thumbnailSVG: true,
  version: true,
  displayName: true,
  topRowBeforeCollapse: false,
  bottomRowBeforeCollapse: false,
  tags: false,
}

// Widget/utils

const childHasPanelConfig = (
  config: any,
  widget: any,
  basePath: string,
  originalWidget: any,
  bindingPaths: any,
  reactivePaths: any,
  triggerPaths: any,
  validationPaths: any,
) => {
  const panelPropertyPath = config.propertyName
  const widgetPanelPropertyValues = get(widget, panelPropertyPath)

  if (widgetPanelPropertyValues) {
    Object.values(widgetPanelPropertyValues).forEach((widgetPanelPropertyValue: any) => {
      const { panelIdPropertyName } = config.panelConfig
      const propertyPath = `${basePath}.${widgetPanelPropertyValue[panelIdPropertyName]}`

      let panelConfigChildren = [
        ...(config.panelConfig.contentChildren || []),
        ...(config.panelConfig.styleChildren || []),
      ]

      if (panelConfigChildren.length === 0) panelConfigChildren = config.panelConfig.children

      panelConfigChildren.forEach((panelColumnConfig: any) => {
        let isSectionHidden = false

        if ("hidden" in panelColumnConfig) {
          isSectionHidden = panelColumnConfig.hidden(originalWidget, propertyPath)
        }

        if (!isSectionHidden) {
          panelColumnConfig.children.forEach((panelColumnControlOrSectionConfig: any) => {
            if (panelColumnControlOrSectionConfig.sectionName !== undefined) {
              panelColumnControlOrSectionConfig.children.forEach((panelColumnControlConfig: any) => {
                const panelPropertyConfigPath = `${propertyPath}.${panelColumnControlConfig.propertyName}`
                let isControlHidden = false

                if ("hidden" in panelColumnControlConfig) {
                  isControlHidden = panelColumnControlConfig.hidden(originalWidget, panelPropertyConfigPath)
                }

                if (!isControlHidden) {
                  const { configBindingPaths, configReactivePaths, configTriggerPaths, configValidationPaths } =
                    checkPathsInConfig(panelColumnControlConfig, panelPropertyConfigPath)

                  Object.assign(bindingPaths, configBindingPaths)
                  Object.assign(reactivePaths, configReactivePaths)
                  Object.assign(triggerPaths, configTriggerPaths)
                  Object.assign(validationPaths, configValidationPaths)

                  // Has child Panel Config
                  if (panelColumnControlConfig.panelConfig) {
                    const {
                      bindingPaths: panelBindingPaths,
                      reactivePaths: panelReactivePaths,
                      triggerPaths: panelTriggerPaths,
                      validationPaths: panelValidationPaths,
                    } = childHasPanelConfig(
                      panelColumnControlConfig,
                      widgetPanelPropertyValue,
                      panelPropertyConfigPath,
                      originalWidget,
                      bindingPaths,
                      reactivePaths,
                      triggerPaths,
                      validationPaths,
                    )
                    Object.assign(bindingPaths, panelBindingPaths)
                    Object.assign(reactivePaths, panelReactivePaths)
                    Object.assign(triggerPaths, panelTriggerPaths)
                    Object.assign(validationPaths, panelValidationPaths)
                  }
                }
              })
            } else {
              const panelPropertyConfigPath = `${propertyPath}.${panelColumnControlOrSectionConfig.propertyName}`
              let isControlHidden = false

              if ("hidden" in panelColumnControlOrSectionConfig) {
                isControlHidden = panelColumnControlOrSectionConfig.hidden(originalWidget, panelPropertyConfigPath)
              }

              if (!isControlHidden) {
                const { configBindingPaths, configReactivePaths, configTriggerPaths, configValidationPaths } =
                  checkPathsInConfig(panelColumnControlOrSectionConfig, panelPropertyConfigPath)

                Object.assign(bindingPaths, configBindingPaths)
                Object.assign(reactivePaths, configReactivePaths)
                Object.assign(triggerPaths, configTriggerPaths)
                Object.assign(validationPaths, configValidationPaths)

                // Has child Panel Config
                if (panelColumnControlOrSectionConfig.panelConfig) {
                  const {
                    bindingPaths: panelBindingPaths,
                    reactivePaths: panelReactivePaths,
                    triggerPaths: panelTriggerPaths,
                    validationPaths: panelValidationPaths,
                  } = childHasPanelConfig(
                    panelColumnControlOrSectionConfig,
                    widgetPanelPropertyValue,
                    panelPropertyConfigPath,
                    originalWidget,
                    bindingPaths,
                    reactivePaths,
                    triggerPaths,
                    validationPaths,
                  )

                  Object.assign(bindingPaths, panelBindingPaths)
                  Object.assign(reactivePaths, panelReactivePaths)
                  Object.assign(triggerPaths, panelTriggerPaths)
                  Object.assign(validationPaths, panelValidationPaths)
                }
              }
            }
          })
        }
      })
    })
  }

  return {
    reactivePaths: reactivePaths,
    triggerPaths: triggerPaths,
    validationPaths: validationPaths,
    bindingPaths: bindingPaths,
  }
}

const checkPathsInConfig = (config: any, path: string) => {
  const configBindingPaths: any = {}
  const configTriggerPaths: any = {}
  const configValidationPaths: any = {}

  // Purely a Binding Path
  if (config.isBindProperty && !config.isTriggerProperty) {
    configBindingPaths[path] = config.evaluationSubstitutionType || "TEMPLATE"

    if (config.validation) {
      configValidationPaths[path] = config.validation
    }
  } else if (config.isBindProperty && config.isTriggerProperty) {
    configTriggerPaths[path] = true
  }

  return {
    configBindingPaths,
    configReactivePaths: configBindingPaths, // All bindingPaths are reactivePaths.
    configTriggerPaths,
    configValidationPaths,
  }
}

export const getAllPathsFromPropertyConfigWithoutMemo = (widget, widgetConfig, defaultProperties) => {
  const bindingPaths: any = {}
  const reactivePaths: any = {}

  Object.keys(defaultProperties).forEach((property) => {
    reactivePaths[property] = "TEMPLATE"
  })
  const triggerPaths: any = {}
  const validationPaths: any = {}
  widgetConfig.forEach((config) => {
    if (config.children) {
      config.children.forEach((controlConfig: any) => {
        const basePath = controlConfig.propertyName
        let isHidden = false

        if ("hidden" in controlConfig) {
          isHidden = controlConfig.hidden(widget, basePath)
        }

        if (!isHidden) {
          const path = controlConfig.propertyName
          const { configBindingPaths, configReactivePaths, configTriggerPaths, configValidationPaths } =
            checkPathsInConfig(controlConfig, path)

          Object.assign(bindingPaths, configBindingPaths)
          Object.assign(reactivePaths, configReactivePaths)
          Object.assign(triggerPaths, configTriggerPaths)
          Object.assign(validationPaths, configValidationPaths)
        }

        if (controlConfig.panelConfig) {
          const resultingPaths = memoizedChildHasPanelConfig(controlConfig, widget, basePath, widget, {}, {}, {}, {})

          Object.assign(bindingPaths, resultingPaths.bindingPaths)
          Object.assign(reactivePaths, resultingPaths.reactivePaths)
          Object.assign(triggerPaths, resultingPaths.triggerPaths)
          Object.assign(validationPaths, resultingPaths.validationPaths)
        }

        if (controlConfig.children) {
          const basePropertyPath = controlConfig.propertyName
          const widgetPropertyValue = get(widget, basePropertyPath, [])

          // Property in object structure
          if (!isUndefined(widgetPropertyValue) && isObject(widgetPropertyValue)) {
            Object.keys(widgetPropertyValue).forEach((key: string) => {
              const objectIndexPropertyPath = `${basePropertyPath}.${key}`

              // TODO: Fix this the next time the file is edited
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              controlConfig.children.forEach((childPropertyConfig: any) => {
                const childArrayPropertyPath = `${objectIndexPropertyPath}.${childPropertyConfig.propertyName}`
                const { configBindingPaths, configReactivePaths, configTriggerPaths, configValidationPaths } =
                  checkPathsInConfig(childPropertyConfig, childArrayPropertyPath)

                Object.assign(bindingPaths, configBindingPaths)
                Object.assign(reactivePaths, configReactivePaths)
                Object.assign(triggerPaths, configTriggerPaths)
                Object.assign(validationPaths, configValidationPaths)
              })
            })
          }
        }
      })
    }
  })

  return {
    reactivePaths: reactivePaths,
    triggerPaths: triggerPaths,
    validationPaths: validationPaths,
    bindingPaths: bindingPaths,
  }
}

// dataTreeWidget.utils
export const setOverridingProperty = ({
  key,
  overridingPropertyPaths,
  propertyOverrideDependency,
  type,
  value,
}: any) => {
  if (!(propertyName in propertyOverrideDependency)) {
    propertyOverrideDependency[propertyName] = {
      DEFAULT: null,
      META: null,
    }
  }

  switch (type) {
    case "DEFAULT":
      propertyOverrideDependency[propertyName]["DEFAULT"] = overridingPropertyKey
      break
    case "META":
      propertyOverrideDependency[propertyName]["META"] = overridingPropertyKey
      break
    default:
  }

  if (Array.isArray(overridingPropertyPaths[overridingPropertyKey])) {
    const updatedOverridingProperty = new Set(overridingPropertyPaths[overridingPropertyKey])

    overridingPropertyPaths[overridingPropertyKey] = [...updatedOverridingProperty.add(propertyName)]
  } else {
    overridingPropertyPaths[overridingPropertyKey] = [propertyName]
  }

  const defaultPropertyName = propertyOverrideDependency[propertyName].DEFAULT
  if (type === "META" && defaultPropertyName) {
    overridingPropertyPaths[defaultPropertyName].push(overridingPropertyKey)
  }
}

// entity = widget
export const getEntityDynamicBindingPathList = (entity) => {
  if (entity && entity.dynamicBindingPathList && Array.isArray(entity.dynamicBindingPathList)) {
    return [...entity.dynamicBindingPathList]
  }
  return []
}

export const generateDataTreeWidgetWithoutMeta = (widgetWithEval) => {
  //dataTreeWidget
  const widget = omit(widgetWithEval, Object.keys(WIDGET_PROPS_TO_SKIP_FROM_EVAL))
  const derivedProps: any = {}
  const blockedDerivedProps: any = {}
  const unInitializedDefaultProps: any = {}
  const propertyOverrideDependency: any = {}
  const overridingPropertyPaths: any = {}

  // const defaultMetaProps = WidgetFactory.getWidgetMetaPropertiesMap(widget.type);
  // const derivedPropertyMap = WidgetFactory.getWidgetDerivedPropertiesMap(widget.type);
  // const defaultProps = WidgetFactory.getWidgetDefaultPropertiesMap(widget.type);
  // const dependencyMap = WidgetFactory.getWidgetDependencyMap(widget.type);
  // const propertyPaneConfigs = WidgetFactory.getWidgetPropertyPaneConfig(widget.type, widget);
  const defaultMetaProps = {}
  const derivedPropertyMap = {}
  const defaultProps = {}
  const dependencyMap = {}
  const propertyPaneConfigs = []

  const dynamicBindingPathList = getEntityDynamicBindingPathList(widget)
  dynamicBindingPathList.forEach((dynamicPath) => {
    const propertyPath = dynamicPath.key
    const propertyValue = _.get(widget, propertyPath)
    if (_.isObject(propertyValue)) {
      _.set(widget, propertyPath, JSON.stringify(propertyValue))
    }
  })

  Object.keys(derivedPropertyMap).forEach((propertyName) => {
    derivedProps[propertyName] = derivedPropertyMap[propertyName].replace(/this./g, `${widget.widgetName}.`)
    dynamicBindingPathList.push({ key: propertyName })
  })

  Object.keys(derivedProps).forEach((propertyName) => {
    blockedDerivedProps[propertyName] = true
  })

  const overridingMetaPropsMap: any = {}
  Object.entries(defaultProps).forEach(([propertyName, defaultPropertyName]) => {
    if (!(defaultPropertyName in widget)) {
      unInitializedDefaultProps[defaultPropertyName] = null
    }

    setOverridingProperty({
      propertyOverrideDependency,
      overridingPropertyPaths,
      value: defaultPropertyName,
      key: propertyName,
      type: "DEFAULT",
    })

    if (propertyName in defaultMetaProps) {
      setOverridingProperty({
        propertyOverrideDependency,
        overridingPropertyPaths,
        value: `meta.${propertyName}`,
        key: propertyName,
        type: "META",
      })
      overridingMetaPropsMap[propertyName] = true
    }
  })

  const { bindingPaths, reactivePaths, triggerPaths, validationPaths } = getAllPathsFromPropertyConfigWithoutMemo(
    widget,
    propertyPaneConfigs,
    {
      ...derivedPropertyMap,
      ...defaultMetaProps,
      ...unInitializedDefaultProps,
      ..._.keyBy(dynamicBindingPathList, "key"),
      ...overridingPropertyPaths,
    },
  )

  /**
   * Spread operator does not merge deep objects properly.
   * Eg a = {
   *   foo: { bar: 100 }
   * }
   * b = {
   *  foo: { baz: 200 }
   * }
   *
   * { ...a, ...b }
   *
   * {
   *  foo: { baz: 200 } // bar in "a" object got overridden by baz in "b"
   * }
   *
   * Therefore spread is replaced with "merge" which merges objects recursively.
   */

  const widgetPathsToOmit = [
    "dynamicBindingPathList",
    "dynamicPropertyPathList",
    "dynamicTriggerPathList",
    "privateWidgets",
    "type",
  ]

  // getSetterConfig(WidgetFactory.getWidgetSetterConfig(widget.type),widget)
  const setterConfig = {}

  const dataTreeWidgetWithoutMetaProps = _.merge(
    {
      ENTITY_TYPE: ENTITY_TYPE.WIDGET,
    },
    _.omit(widget, widgetPathsToOmit),
    unInitializedDefaultProps,
    derivedProps,
  )

  const dynamicPathsList: {
    dynamicPropertyPathList?: any[]
    dynamicTriggerPathList?: any[]
  } = {}

  if (widget.dynamicPropertyPathList) dynamicPathsList.dynamicPropertyPathList = widget.dynamicPropertyPathList

  if (widget.dynamicTriggerPathList) dynamicPathsList.dynamicTriggerPathList = widget.dynamicTriggerPathList

  return {
    dataTreeWidgetWithoutMetaProps,
    overridingMetaPropsMap,
    defaultMetaProps,
    entityConfig: {
      widgetId: widget.widgetId,
      defaultProps,
      defaultMetaProps: Object.keys(defaultMetaProps),
      dynamicBindingPathList,
      logBlackList: {
        ...widget.logBlackList,
        ...blockedDerivedProps,
      },
      bindingPaths,
      reactivePaths,
      triggerPaths,
      validationPaths,
      dependencyMap,
      ENTITY_TYPE: ENTITY_TYPE.WIDGET,
      privateWidgets: {
        ...widget.privateWidgets,
      },
      propertyOverrideDependency,
      overridingPropertyPaths,
      type: widget.type,
      ...dynamicPathsList,
      ...setterConfig,
    },
  }
}

export const generateDataTreeWidget = (
  widget: any,
  widgetMetaProps: any,
  loadingEntities: any,
  layoutSystemType: any = "FIXED",
  isMobile: any = false,
) => {
  return {}
}

export const getWidgetMetaPropertiesMap = (widgetType: any) => {
  return {}
}
