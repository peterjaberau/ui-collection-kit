export class WidgetFactory {
  static widgetTypes: any = {}
  static widgetConfigMap: any = new Map()
  static widgetDefaultPropertiesMap: any = new Map()
  static widgetsMap: any = new Map()
  static widgetBuilderMap: any = new Map()
  static initialize(widgets: any[]) {
    for (const [widget, builder] of widgets) {
      WidgetFactory.widgetsMap.set(widget.type, widget)
      WidgetFactory.widgetTypes[widget.type] = widget.type
      WidgetFactory.widgetBuilderMap.set(widget.type, builder)
      WidgetFactory.configureWidget(widget)
    }
  }

  private static configureWidget(widget: any) {
    const defaultConfig = widget.getDefaults()
    const config = widget.getConfig()
    const onCanvasUI = config.onCanvasUI || getDefaultOnCanvasUIConfig(defaultConfig)

    const { IconCmp } = widget.getMethods()
    const features = widget.getFeatures()

    let enhancedFeatures: any = {}

    if (features) {
      Object.keys(features).forEach((registeredFeature: string) => {
        enhancedFeatures = Object.assign(
          {},
          WidgetFeatureProps[registeredFeature],
          WidgetFeaturePropertyEnhancements[registeredFeature](widget),
        )
      })
    }

    const _config = {
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
    }

    WidgetFactory.widgetDefaultPropertiesMap.set(widget.type, Object.freeze({ ...defaultConfig }))
    WidgetFactory.widgetConfigMap.set(widget.type, Object.freeze(_config))
  }

  static get(type: any) {
    const widget = WidgetFactory.widgetsMap.get(type)

    if (widget) {
      return widget
    } else {
      console.error(`Widget is not defined with type: ${type}`)

      return
    }
  }

  static getConfig(type: any) {
    const config = WidgetFactory.widgetConfigMap.get(type)

    if (config) {
      return config
    } else {
      console.error(`Widget config is not registered for type: ${type}`)

      return
    }
  }

  static getConfigs = () => {
    return Object.fromEntries(WidgetFactory.widgetConfigMap)
  }

  static createWidget(widgetData: any, renderMode: any): any {
    const { type } = widgetData

    const builder = WidgetFactory.widgetBuilderMap.get(type)

    if (builder) {
      const widgetProps = {
        key: widgetData.widgetId,
        isVisible: true,
        ...widgetData,
        renderMode,
      }

      return builder(widgetProps)
    } else {
      const ex: any = {
        message: "Widget Builder not registered for widget type" + widgetData.type,
      }

      log.error(ex)

      return null
    }
  }

  static getWidgetTypes(): any[] {
    return Array.from(WidgetFactory.widgetsMap.keys())
  }

  static getWidgetDerivedPropertiesMap(widgetType: any): any {
    const widget = WidgetFactory.widgetsMap.get(widgetType)

    const derivedProperties = widget?.getDerivedPropertiesMap()

    if (derivedProperties) {
      return derivedProperties
    } else {
      console.log(`Derived properties are not defined for widget type: ${widgetType}`)

      return {}
    }
  }

  static getWidgetDefaultPropertiesMap(widgetType: any): any {
    const widget = WidgetFactory.widgetsMap.get(widgetType)

    const defaultProperties = widget?.getDefaultPropertiesMap()

    if (defaultProperties) {
      return defaultProperties
    } else {
      console.log(`Default properties are not defined for widget type: ${widgetType}`)

      return {}
    }
  }

  static getWidgetDependencyMap(widgetType: any): any {
    const widget = WidgetFactory.widgetsMap.get(widgetType)

    const dependencyMap = widget?.getDependencyMap()

    if (dependencyMap) {
      return dependencyMap
    } else {
      console.log(`Dependency map is defined for widget type: ${widgetType}`)

      return {}
    }
  }

  static getWidgetMetaPropertiesMap(widgetType: any): any {
    const widget = WidgetFactory.widgetsMap.get(widgetType)

    const metaProperties = widget?.getMetaPropertiesMap()

    if (metaProperties) {
      return metaProperties
    } else {
      log.error(`Meta properties are not defined for widget type: ${widgetType}`)

      return {}
    }
  }

  static getWidgetPropertyPaneCombinedConfig(type: any, widgetProperties: any): any[] {
    const contentConfig = WidgetFactory.getWidgetPropertyPaneContentConfig(type, widgetProperties)
    const styleConfig = WidgetFactory.getWidgetPropertyPaneStyleConfig(type)

    return [...contentConfig, ...styleConfig]
  }

  private static getWidgetPropertyPaneConfigWithMemo(type: any) {
    const widget = WidgetFactory.widgetsMap.get(type)

    const propertyPaneConfig = widget?.getPropertyPaneConfig()

    const features = widget?.getFeatures()

    if (Array.isArray(propertyPaneConfig) && propertyPaneConfig.length > 0) {
      const enhance = flow([enhancePropertyPaneConfig, convertFunctionsToString, addPropertyConfigIds])
      const enhancedPropertyPaneConfig = enhance(propertyPaneConfig, features)

      return enhancedPropertyPaneConfig
    }
  }

  static getWidgetPropertyPaneConfig(type: any, widgetProperties: any): any[] {
    const propertyPaneConfig = WidgetFactory.getWidgetPropertyPaneConfigWithMemo(type)

    if (Array.isArray(propertyPaneConfig) && propertyPaneConfig.length > 0) {
      return propertyPaneConfig
    } else {
      const config = WidgetFactory.getWidgetPropertyPaneCombinedConfig(type, widgetProperties)

      if (config === undefined) {
        log.error("Widget property pane config not defined", type)

        return []
      } else {
        return config
      }
    }
  }

  private static getWidgetPropertyPaneContentConfigWithDynamicPropertyGenerator(type: any) {
    const widget = WidgetFactory.widgetsMap.get(type)

    const propertyPaneContentConfig = widget?.getPropertyPaneContentConfig()

    const features = widget?.getFeatures()

    if (propertyPaneContentConfig) {
      const enhance = flow([
        enhancePropertyPaneConfig,
        convertFunctionsToString,
        addPropertyConfigIds,
        addSearchConfigToPanelConfig,
      ])

      const enhancedPropertyPaneContentConfig = enhance(
        propertyPaneContentConfig,
        features,
        PropertyPaneConfigTypes.CONTENT,
        type,
      )

      return enhancedPropertyPaneContentConfig
    } else {
      return []
    }
  }

  static getWidgetPropertyPaneContentConfig(type: any, widgetProperties: any): any[] {
    const propertyPaneContentConfigWithDynamicPropertyGenerator: any[] =
      WidgetFactory.getWidgetPropertyPaneContentConfigWithDynamicPropertyGenerator(type)

    if (propertyPaneContentConfigWithDynamicPropertyGenerator.some((d) => d.hasDynamicProperties)) {
      return propertyPaneContentConfigWithDynamicPropertyGenerator.map((section: any) => {
        if (section.hasDynamicProperties) {
          const dynamicProperties = section.generateDynamicProperties?.(widgetProperties)

          if (dynamicProperties && dynamicProperties.length) {
            addPropertyConfigIds(dynamicProperties, false)
            section = create(section, (draft: any) => {
              draft.children = [...dynamicProperties, ...section.children]
            })
          }
        }

        return section
      })
    } else {
      return propertyPaneContentConfigWithDynamicPropertyGenerator
    }
  }

  static getWidgetPropertyPaneStyleConfig(type: any): any[] {
    const widget = WidgetFactory.widgetsMap.get(type)

    const propertyPaneStyleConfig = widget?.getPropertyPaneStyleConfig()

    const features = widget?.getFeatures()

    if (propertyPaneStyleConfig) {
      const enhance = flow([
        enhancePropertyPaneConfig,
        convertFunctionsToString,
        addPropertyConfigIds,
        addSearchConfigToPanelConfig,
      ])

      const enhancedPropertyPaneConfig = enhance(propertyPaneStyleConfig, features, PropertyPaneConfigTypes.STYLE)

      return enhancedPropertyPaneConfig
    } else {
      return []
    }
  }

  static getWidgetPropertyPaneSearchConfig(type: any, widgetProperties: any): any[] {
    const config = generatePropertyPaneSearchConfig(
      WidgetFactory.getWidgetPropertyPaneContentConfig(type, widgetProperties),
      WidgetFactory.getWidgetPropertyPaneStyleConfig(type),
    )

    if (config) {
      return config
    } else {
      return []
    }
  }

  static getWidgetAutoLayoutConfig(type: any): any {
    // we don't need AutoLayoutConfig config for WDS widgets
    if (type?.includes("WDS")) return {}

    const widget = WidgetFactory.widgetsMap.get(type)

    const baseAutoLayoutConfig = widget?.getAutoLayoutConfig()

    if (baseAutoLayoutConfig) {
      return {
        ...baseAutoLayoutConfig,
        widgetSize:
          baseAutoLayoutConfig.widgetSize?.map((sizeConfig: any) => ({
            ...sizeConfig,
            configuration: (props: WidgetProps) => {
              if (!props)
                return {
                  minWidth: WidgetFactory.widgetConfigMap.get(type)?.minWidth || FILL_WIDGET_MIN_WIDTH,
                  minHeight: WidgetFactory.widgetConfigMap.get(type)?.minHeight || 80,
                }

              return sizeConfig.configuration(props)
            },
          })) || [],
        autoDimension: baseAutoLayoutConfig.autoDimension ?? {},
        disabledPropsDefaults: baseAutoLayoutConfig.disabledPropsDefaults ?? {},
      }
    } else {
      log.error(`Auto layout config is not defined for widget type: ${type}`)

      return {
        autoDimension: {},
        widgetSize: [],
        disableResizeHandles: {},
        disabledPropsDefaults: {},
      }
    }
  }

  static getWidgetAnvilConfig(type: any): any {
    const widget = WidgetFactory.widgetsMap.get(type)
    const baseAnvilConfig: any | null | undefined = widget?.getAnvilConfig()

    if (!baseAnvilConfig) {
      log.error(`Anvil config is not defined for widget type: ${type}`)

      return {
        isLargeWidget: false,
        widgetSize: {},
      }
    }

    return baseAnvilConfig
  }

  static getWidgetTypeConfigMap(): any {
    const typeConfigMap: any = {}

    WidgetFactory.getWidgetTypes().forEach((type) => {
      typeConfigMap[type] = {
        defaultProperties: WidgetFactory.getWidgetDefaultPropertiesMap(type),
        derivedProperties: WidgetFactory.getWidgetDerivedPropertiesMap(type),
        metaProperties: WidgetFactory.getWidgetMetaPropertiesMap(type),
      }
    })

    return typeConfigMap
  }

  static getAutocompleteDefinitions(type: any): any {
    const widget = WidgetFactory.widgetsMap.get(type)

    const autocompleteDefinition = widget?.getAutocompleteDefinitions()

    if (autocompleteDefinition) {
      return autocompleteDefinition
    } else {
      log.error(`Auto complete definitions are not defined for widget type: ${type}`)

      return {}
    }
  }

  static getWidgetSetterConfig(type: any): Partial<any> {
    const widget = WidgetFactory.widgetsMap.get(type)

    const setterConfig = widget?.getSetterConfig() || {}

    return setterConfig
  }

  static getLoadingProperties(type: any): Array<RegExp> | undefined {
    const widget = WidgetFactory.widgetsMap.get(type)

    return widget?.getLoadingProperties()
  }

  static getWidgetStylesheetConfigMap(widgetType: any) {
    const widget = WidgetFactory.widgetsMap.get(widgetType)

    const stylesheet = widget?.getStylesheetConfig()

    if (stylesheet) {
      return stylesheet
    } else {
      log.error(`stylesheet config is not defined for widget type: ${widgetType}`)

      return undefined
    }
  }

  static getWidgetMethods(type: any): any {
    const widget = WidgetFactory.widgetsMap.get(type)

    const methods = widget?.getMethods()

    if (methods) {
      return methods
    } else {
      return {}
    }
  }

  static performPasteOperationChecks(
    allWidgets: any,
    oldWidget: any,
    newWidget: any,
    widgetIdMap: Record<string, string>,
  ): any {
    const widget = WidgetFactory.widgetsMap.get(newWidget.type)

    if (!widget) return newWidget

    const widgetProps: any | null = widget?.pasteOperationChecks(allWidgets, oldWidget, newWidget, widgetIdMap)

    return widgetProps !== null ? widgetProps : newWidget
  }

  static *performPasteOperation(
    allWidgets: any, // All widgets
    copiedWidgets: any[], // Original copied widgets
    destinationInfo: any, // Destination info of copied widgets
    widgetIdMap: any, // Map of oldWidgetId -> newWidgetId
    reverseWidgetIdMap: any, // Map of newWidgetId -> oldWidgetId
  ) {
    const { parentOrder } = destinationInfo
    const parent: any = allWidgets[parentOrder[parentOrder.length - 1]]
    const widget = WidgetFactory.widgetsMap.get(parent.type)

    if (!widget) return allWidgets

    const res: any = yield call(
      widget?.performPasteOperation,
      allWidgets,
      copiedWidgets,
      destinationInfo,
      widgetIdMap,
      reverseWidgetIdMap,
    )

    return res
  }
}
