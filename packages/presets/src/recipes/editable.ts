import { defineSlotRecipe } from '@pandacss/dev'

export const editable = defineSlotRecipe({
  className: 'editable',
  slots: [
    "root",
    "area",
    "label",
    "preview",
    "input",
    "editTrigger",
    "submitTrigger",
    "cancelTrigger",
    "control",
  ],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
      width: '100%',
    },
    control: {
      display: 'flex',
      gap: '2',
    },
  },
})
