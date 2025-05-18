import { defineSlotRecipe } from '@chakra-ui/react/styled-system';

const cssDev = {
  base: {
    backgroundColor: 'gray.50',
    border: '1px solid black',
    padding: '4px'
  },
  root: {},
  left: {},
  right: {},
  main: {},
  header: {},
  footer: {}
}

export const rootSlotRecipe = defineSlotRecipe({
  className: 'layout-root',
  slots: [
    'root',
    'header',
    'headerStart',
    'headerCenter',
    'headerEnd',
    'body',
    'main',
    'footer',
    'footerStart',
    'footerCenter',
    'footerEnd',
    'left',
    'leftStart',
    'leftCenter',
    'leftEnd',
    'right',
    'rightStart',
    'rightCenter',
    'rightEnd',
  ],
  base: {
    root: {
      ...cssDev.base,
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    },
    header: {
      ...cssDev.base,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '50px'
    },
    headerStart: {
      ...cssDev.base,
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-start'
    },
    headerCenter: {
      ...cssDev.base,
      flex: 1,
      display: 'flex',
      justifyContent: 'center'
    },
    headerEnd: {
      ...cssDev.base,
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end'
    },
    body: {
      ...cssDev.base,
      display: 'flex',
      flex: 1,
      minWidth: 0,
      minHeight: 0,
    },

    // inside the body(flex.row)
    main: {
      ...cssDev.base,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
    },

    // inside the body(flex.row)
    left: {
      ...cssDev.base,
      width: '50px',
      display: 'flex',
      flexDirection: 'column',
      justifyItems: 'space-between',
      alignItems: 'center',
      wordBreak: 'break-word',
    },
    leftStart: {
      ...cssDev.base,
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'start',
    },
    leftCenter: {
      ...cssDev.base,
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    leftEnd: {
      ...cssDev.base,
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'end',
    },

    // inside the body(flex.row)
    right: {
      ...cssDev.base,
      width: '50px',
      display: 'flex',
      flexDirection: 'column',
      justifyItems: 'space-between',
      alignItems: 'center',
      wordBreak: 'break-word',
    },
    rightStart: {
      ...cssDev.base,
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'start',
    },
    rightCenter: {
      ...cssDev.base,
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightEnd: {
      ...cssDev.base,
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'end',
    },
    footer: {
      ...cssDev.base,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '50px'
    },
    footerStart: {
      ...cssDev.base,
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-start'
    },
    footerCenter: {
      ...cssDev.base,
      flex: 1,
      display: 'flex',
      justifyContent: 'center'
    },
    footerEnd: {
      ...cssDev.base,
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end'
    },
  },
});
