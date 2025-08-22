import { ReactNode } from "react"
// import { SetterType } from "@/page/App/components/InspectPanel/PanelSetters"
import { VALIDATION_TYPES } from "@/utils/validationFactory"
// import { EventHandlerConfig } from "@/widgetLibrary/interface"
// import { PanelLabelProps } from "./components/Label/interface"

export interface EventHandlerPanelConfig extends PanelFieldConfig {
  // eventHandlerConfig: EventHandlerConfig
  eventHandlerConfig: any
}

// export interface PanelFieldConfig extends PanelLabelProps {
export interface PanelFieldConfig {
  id: string
  setterType: any
  expectedType?: VALIDATION_TYPES
  attrName: string
  childrenSetter?: PanelFieldConfig[]
  useCustomLayout?: boolean
  options?: any
  isSetterSingleRow?: boolean
  defaultValue?: any
  placeholder?: string
  icon?: ReactNode
  shown?: (...params: any[]) => boolean
  bindAttrName?: string | string[]
  openDynamic?: boolean
  allowClear?: boolean
  detailedDescription?: string

  // DynamicSelectSetter props
  inputPlaceholder?: string
  selectPlaceholder?: string
  isDynamicAttrName?: string
  selectAttrName?: string
  inputAttrName?: string

  [key: string]: any
}

export interface PanelFieldGroupConfig {
  id: string
  groupName: string
  children: PanelFieldConfig[]
}

export type PanelConfig = PanelFieldConfig | PanelFieldGroupConfig

export interface PanelSetterProps extends Omit<PanelFieldConfig, "id"> {
  parentAttrName: string
  displayName: string
}

export interface SelectedPanelProps {
  selectedDisplayNames: string[]
}
