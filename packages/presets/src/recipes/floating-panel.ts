import { defineSlotRecipe } from '@pandacss/dev'

export const floatingPanel = defineSlotRecipe({
  className: 'floatingPanel',
  slots: [ "arrow", "arrowTip", "trigger", "positioner", "body", "content", "control", "header", "title", "resizeTrigger"],
  base: {
    positioner: {
      zIndex: 'overlay',
    },
    content: {
      bg: 'bg.default',
      borderRadius: 'lg',
      borderWidth: '1px',
      width: 'full',
      boxShadow: 'md',
    },
    control: {
      display: 'flex',
      alignItems: 'center',
      gap: '1',
    },
    header: {
      paddingBlock: '2',
      paddingInline: '4',
      bg: 'bg.subtle',
      borderBottomWidth: '1px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopRadius: 'lg',
    },
    title: {
      fontWeight: 'medium',
    },
    resizeTrigger: {
      '&[data-axis="n"], &[data-axis="s"]': {
        height: '6px',
        maxWidth: '90%',
      },
      '&[data-axis="e"], &[data-axis="w"]': {
        width: '6px',
        maxHeight: '90%',
      },
      '&[data-axis="ne"], &[data-axis="nw"], &[data-axis="se"], &[data-axis="sw"]': {
        width: '10px',
        height: '10px',
      },
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4',
      padding: '4',
    },
  },
})
