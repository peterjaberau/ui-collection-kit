import { defineSlotRecipe } from '@pandacss/dev'

export const signaturePad = defineSlotRecipe({
  className: 'signaturePad',
  slots: [
    "root",
    "control",
    "segment",
    "segmentPath",
    "guide",
    "clearTrigger",
    "label",
  ],
  base: {},
})
