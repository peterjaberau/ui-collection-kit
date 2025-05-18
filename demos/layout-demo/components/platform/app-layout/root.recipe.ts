import { defineSlotRecipe } from '@chakra-ui/react/styled-system';

const cssDev = {
  base: {
    backgroundColor: 'yellow.200',
    border: '1px solid black',
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
    'leftBar',
    'leftBarStart',
    'leftBarCenter',
    'leftBarEnd',

    'left',
    'leftStart',
    'leftCenter',
    'leftEnd',

    'rightBar',
    'rightBarStart',
    'rightBarCenter',
    'rightBarEnd',

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
      backgroundColor: "white",
      height: '50px',
      px: '8px'
    },
    headerStart: {
      ...cssDev.base,
      flex: 1,
    },
    headerCenter: {
      ...cssDev.base,
      flex: 1,
      justifyContent: 'center',
    },
    headerEnd: {
      ...cssDev.base,
      flex: 1,
      justifyContent: 'flex-end',
    },
    body: {
      ...cssDev.base,
      backgroundColor: "white",
    },

    main: {
      ...cssDev.base,
      backgroundColor: "white",
      p: '8px',
    },

    leftBar: {
      ...cssDev.base,
      backgroundColor: "white",
      width: '50px',
      py: '8px'
    },
    leftBarStart: {
      ...cssDev.base,
    },
    leftBarCenter: {
      ...cssDev.base,
      justifyContent: 'center',
    },
    leftBarEnd: {
      ...cssDev.base,
      justifyContent: 'flex-end',
    },
    left: {
      ...cssDev.base,
      backgroundColor: "white",
      width: '250px',
      p: '8px',
    },
    leftStart: {
      ...cssDev.base,
    },
    leftCenter: {
      ...cssDev.base,
      justifyContent: 'center',
    },
    leftEnd: {
      ...cssDev.base,
      justifyContent: 'flex-end',
    },

    rightBar: {
      ...cssDev.base,
      backgroundColor: "white",
      width: '50px',
      py: '8px'
    },
    rightBarStart: {
      ...cssDev.base,
    },
    rightBarCenter: {
      ...cssDev.base,
      justifyContent: 'center',
    },
    rightBarEnd: {
      ...cssDev.base,
      justifyContent: 'flex-end',
    },


    right: {
      ...cssDev.base,
      backgroundColor: "white",
      width: '150px',
      p: '8px',
    },
    rightStart: {
      ...cssDev.base,
    },
    rightCenter: {
      ...cssDev.base,
      justifyContent: 'center',
    },
    rightEnd: {
      ...cssDev.base,
      justifyContent: 'flex-end',
    },

    footer: {
      ...cssDev.base,
      backgroundColor: "white",
      height: '50px',
      px: '8px'
    },
    footerStart: {
      ...cssDev.base,
      flex: 1,
      justifyContent: 'flex-start',
    },
    footerCenter: {
      ...cssDev.base,
      flex: 1,
      justifyContent: 'center',
    },
    footerEnd: {
      ...cssDev.base,
      flex: 1,
      justifyContent: 'flex-end',
    },
  },
});
