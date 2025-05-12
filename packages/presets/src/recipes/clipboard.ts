import { defineSlotRecipe } from '@pandacss/dev'

export const clipboard = defineSlotRecipe({
  className: 'clipboard',
  slots: [
    "root", "control", "trigger", "indicator", "input", "label"
  ],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
    },
    control: {
      display: 'flex',
      gap: '3',
    },
  },
})
