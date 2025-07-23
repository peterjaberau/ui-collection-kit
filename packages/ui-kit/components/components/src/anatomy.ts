import { comboboxAnatomy as arkComboboxAnatomy } from "@ui-kit/base"
import { accordionAnatomy as arkAccordionAnatomy } from "@ui-kit/base/accordion"
import { createAnatomy } from "@ui-kit/base/anatomy"
import { clipboardAnatomy as arkClipboardAnatomy } from "@ui-kit/base/clipboard"
import { colorPickerAnatomy as arkColorPickerAnatomy } from "@ui-kit/base/color-picker"
import { dialogAnatomy as arkDialogAnatomy } from "@ui-kit/base/dialog"
import { editableAnatomy as arkEditableAnatomy } from "@ui-kit/base/editable"
import { fieldAnatomy as arkFieldAnatomy } from "@ui-kit/base/field"
import { fieldsetAnatomy as arkFieldsetAnatomy } from "@ui-kit/base/fieldset"
import { fileUploadAnatomy as arkFileUploadAnatomy } from "@ui-kit/base/file-upload"
import { menuAnatomy as arkMenuAnatomy } from "@ui-kit/base/menu"
import { popoverAnatomy as arkPopoverAnatomy } from "@ui-kit/base/popover"
import { radioGroupAnatomy as arkRadioGroupAnatomy } from "@ui-kit/base/radio-group"
import { ratingGroupAnatomy as arkRatingGroupAnatomy } from "@ui-kit/base/rating-group"
import { selectAnatomy as arkSelectAnatomy } from "@ui-kit/base/select"
import { sliderAnatomy as arkSliderAnatomy } from "@ui-kit/base/slider"
import { switchAnatomy as arkSwitchAnatomy } from "@ui-kit/base/switch"

export const accordionAnatomy = arkAccordionAnatomy.extendWith("itemBody")

export const actionBarAnatomy = createAnatomy("action-bar").parts(
  "positioner",
  "content",
  "separator",
  "selectionTrigger",
  "closeTrigger",
)

export const alertAnatomy = createAnatomy("alert").parts(
  "title",
  "description",
  "root",
  "indicator",
  "content",
)

export const breadcrumbAnatomy = createAnatomy("breadcrumb").parts(
  "link",
  "currentLink",
  "item",
  "list",
  "root",
  "ellipsis",
  "separator",
)

export const blockquoteAnatomy = createAnatomy("blockquote").parts(
  "root",
  "icon",
  "content",
  "caption",
)

export const cardAnatomy = createAnatomy("card").parts(
  "root",
  "header",
  "body",
  "footer",
  "title",
  "description",
)

export const checkboxCardAnatomy = createAnatomy("checkbox-card", [
  "root",
  "control",
  "label",
  "description",
  "addon",
  "indicator",
  "content",
])

export const dataListAnatomy = createAnatomy("data-list").parts(
  "root",
  "item",
  "itemLabel",
  "itemValue",
)

export const dialogAnatomy = arkDialogAnatomy.extendWith(
  "header",
  "body",
  "footer",
  "backdrop",
)

export const drawerAnatomy = arkDialogAnatomy.extendWith(
  "header",
  "body",
  "footer",
  "backdrop",
)

export const editableAnatomy = arkEditableAnatomy.extendWith("textarea")

export const emptyStateAnatomy = createAnatomy("empty-state", [
  "root",
  "content",
  "indicator",
  "title",
  "description",
])

export const fieldAnatomy = arkFieldAnatomy.extendWith("requiredIndicator")

export const fieldsetAnatomy = arkFieldsetAnatomy.extendWith("content")

export const fileUploadAnatomy = arkFileUploadAnatomy.extendWith(
  "itemContent",
  "dropzoneContent",
  "fileText",
)

export const listAnatomy = createAnatomy("list").parts(
  "root",
  "item",
  "indicator",
)

export const menuAnatomy = arkMenuAnatomy.extendWith("itemCommand")

export const nativeSelectAnatomy = createAnatomy("select").parts(
  "root",
  "field",
  "indicator",
)

export const popoverAnatomy = arkPopoverAnatomy.extendWith(
  "header",
  "body",
  "footer",
)

export const radioGroupAnatomy = arkRadioGroupAnatomy.extendWith(
  "itemAddon",
  "itemIndicator",
)

export const radioCardAnatomy = radioGroupAnatomy.extendWith(
  "itemContent",
  "itemDescription",
)

export const ratingGroupAnatomy =
  arkRatingGroupAnatomy.extendWith("itemIndicator")

export const selectAnatomy = arkSelectAnatomy.extendWith("indicatorGroup")

export const comboboxAnatomy = arkComboboxAnatomy.extendWith(
  "indicatorGroup",
  "empty",
)

export const sliderAnatomy = arkSliderAnatomy.extendWith("markerIndicator")

export const statAnatomy = createAnatomy("stat").parts(
  "root",
  "label",
  "helpText",
  "valueText",
  "valueUnit",
  "indicator",
)

export const statusAnatomy = createAnatomy("status").parts("root", "indicator")

export const stepsAnatomy = createAnatomy("steps", [
  "root",
  "list",
  "item",
  "trigger",
  "indicator",
  "separator",
  "content",
  "title",
  "description",
  "nextTrigger",
  "prevTrigger",
  "progress",
])

export const switchAnatomy = arkSwitchAnatomy.extendWith("indicator")

export const tableAnatomy = createAnatomy("table").parts(
  "root",
  "header",
  "body",
  "row",
  "columnHeader",
  "cell",
  "footer",
  "caption",
)

export const toastAnatomy = createAnatomy("toast").parts(
  "root",
  "title",
  "description",
  "indicator",
  "closeTrigger",
  "actionTrigger",
)

export const tabsAnatomy = createAnatomy("tabs").parts(
  "root",
  "trigger",
  "list",
  "content",
  "contentGroup",
  "indicator",
)

export const tagAnatomy = createAnatomy("tag").parts(
  "root",
  "label",
  "closeTrigger",
  "startElement",
  "endElement",
)

export const timelineAnatomy = createAnatomy("timeline").parts(
  "root",
  "item",
  "content",
  "separator",
  "indicator",
  "connector",
  "title",
  "description",
)

export const colorPickerAnatomy =
  arkColorPickerAnatomy.extendWith("channelText")

export { treeViewAnatomy } from "@ui-kit/base/tree-view"
export { avatarAnatomy } from "@ui-kit/base/avatar"
export { checkboxAnatomy } from "@ui-kit/base/checkbox"
export { collapsibleAnatomy } from "@ui-kit/base/collapsible"
export { hoverCardAnatomy } from "@ui-kit/base/hover-card"
export { numberInputAnatomy } from "@ui-kit/base/number-input"
export { pinInputAnatomy } from "@ui-kit/base/pin-input"
export { progressAnatomy } from "@ui-kit/base/progress"
export { qrCodeAnatomy } from "@ui-kit/base/qr-code"
export { segmentGroupAnatomy } from "@ui-kit/base/segment-group"
export { tooltipAnatomy } from "@ui-kit/base/tooltip"

export const clipboardAnatomy = arkClipboardAnatomy.extendWith("valueText")
