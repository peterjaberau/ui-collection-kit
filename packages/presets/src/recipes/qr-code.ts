import { defineSlotRecipe } from '@pandacss/dev'

export const qrCode = defineSlotRecipe({
  className: 'qrCode',
  slots: [
    "root", "frame", "pattern", "overlay", "downloadTrigger"
  ],
  base: {},
})
