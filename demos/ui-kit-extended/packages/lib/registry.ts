import * as Chakra from "@chakra-ui/react"

const componentNames = [
  "Accordion",
  "ActionBar",
  "Alert",
  "Avatar",
  "Blockquote",
  "Breadcrumb",
  "Card",
  "Checkbox",
  "CheckboxCard",
  "Clipboard",
  "Collapsible",
  "ColorPicker",
  "Combobox",
  "DataList",
  "Dialog",
  "Drawer",
  "Editable",
  "EmptyState",
  "Field",
  "Fieldset",
  "FileUpload",
  "HoverCard",
  "List",
  "Menu",
  "NativeSelect",
  "NumberInput",
  "Pagination",
  "PinInput",
  "Popover",
  "Progress",
  "ProgressCircle",
  "QrCode",
  "RadioCard",
  "RadioGroup",
  "RatingGroup",
  "SegmentGroup",
  "Select",
  "Slider",
  "Stat",
  "Status",
  "Steps",
  "Switch",
  "Table",
  "Tabs",
  "Tag",
  "Timeline",
  "Toast",
  "Toggle",
  "Tooltip",
] as const

type ComponentName = (typeof componentNames)[number]
type ChakraExposed = typeof Chakra

type ComponentRegistry = Partial<Record<ComponentName, ChakraExposed[keyof ChakraExposed]>>

function buildComponentRegistry(names: readonly ComponentName[]) {
  const registry: ComponentRegistry = {}

  for (const name of names) {
    const maybeComponent = Chakra[name as keyof ChakraExposed]

    registry[name] = maybeComponent
  }

  return registry
}

//@ts-ignore
export const registry: any = buildComponentRegistry(componentNames)
