import { cache } from "react"
import {
  registryComponentsObj,
  registrySchemasObj,
  registryDefaultsObj,
  registryPresetsObj,
  registryMetadataList,
} from "./registry"

export const getAllWidgetComponents = () => {
  return registryComponentsObj
}

export const getAllWidgetSchemas = () => {
  return registrySchemasObj
}

export const getAllWidgetDefaults = () => {
  return registryDefaultsObj
}

export const getAllWidgetPresets = () => {
  return registryPresetsObj
}

export const getWidgetComponentByName = (name: string, withCache: boolean) => {
  return withCache ? cache(registryComponentsObj[name]) : registryComponentsObj[name]
}

export const getWidgetSchemaByName = (name: string) => {
  return registrySchemasObj[name]
}

export const getWidgetDefaultByName = (name: string) => {
  return registryDefaultsObj[name]
}

export const getWidgetPresetsByName = (name: string, presetName: string) => {
  return registryPresetsObj[name][presetName]
}

export const getAllWidgets = () => {
  return {
    components: registryComponentsObj,
    schemas: registrySchemasObj,
    defaults: registryDefaultsObj,
    presets: registryPresetsObj,
  }
}

export const getWidgetByName = (name: string) => {
  return {
    component: registryComponentsObj[name],
    schema: registrySchemasObj[name],
    default: registryDefaultsObj[name],
    presets: registryPresetsObj[name],
  }
}

export const WidgetRendererWithDefaults = (props?: { name: string }) => {
  const WidgetComponentRenderer = getWidgetComponentByName(props?.name || "placeholder")
  const defaultProps = getWidgetDefaultByName(props?.name || "placeholder") || {}

  return <WidgetComponentRenderer key={props?.name} {...defaultProps} />
}

export const WidgetRendererWithPreset = (props?: { name: string; presetName: string }) => {
  const WidgetComponentRenderer = getWidgetComponentByName(props?.name)
  const presetProps = getWidgetPresetsByName(props.name, props?.presetName) || {}

  return <WidgetComponentRenderer key={props?.name} {...presetProps} />
}

export const WidgetRenderer = (props: { name: string; withCache?: boolean; [key: string]: any }) => {
  const { name, withCache = false, ...rest } = props

  const WidgetComponentRenderer = getWidgetComponentByName(name, withCache)

  return <WidgetComponentRenderer key={name} {...rest} />
}

export const getWidgetsMetadata = () => {
  return registryMetadataList
}

export const queryWidgetsMetadata = (search: string = "") => {
  return search.length === 0
    ? registryMetadataList
    : registryMetadataList.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
}
