import { defineSlotRecipe } from '@chakra-ui/react/styled-system';

const cssDev = {
  base: {
    backgroundColor: 'yellow.200',
    border: '1px solid black',
  },
  root: {},
  header: {
    borderBottom: '1px solid',
    borderBottomColor: 'gray.200',
  },
  left: {},
  right: {},
  main: {},
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
      ...cssDev.header,
      backgroundColor: "white",
      height: '50px',
      px: '8px'
    },
    headerStart: {
      flex: 1,
    },
    headerCenter: {
      flex: 1,
      justifyContent: 'center',
    },
    headerEnd: {
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
      py: '8px',
    },
    leftBarStart: {
      ...cssDev.base,
      justifyContent: 'start',
      alignItems: 'center',
      gap: '8px'
    },
    leftBarCenter: {
      ...cssDev.base,
      justifyContent: 'center',
      alignItems: 'center',
      gap: '8px'
    },
    leftBarEnd: {
      ...cssDev.base,
      justifyContent: 'end',
      alignItems: 'center',
      gap: '8px'
    },


    left: {
      ...cssDev.base,
      backgroundColor: "white",
      width: '250px',
      p: '8px',
    },
    leftStart: {
      ...cssDev.base,
      justifyContent: 'start',
      alignItems: 'flex-start',
      gap: '8px'
    },
    leftCenter: {
      ...cssDev.base,
      backgroundColor: "white",
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: '8px'
    },
    leftEnd: {
      ...cssDev.base,
      justifyContent: 'end',
      alignItems: 'flex-start',
      gap: '8px'
    },

    rightBar: {
      ...cssDev.base,
      backgroundColor: "white",
      width: '50px',
      py: '8px'
    },
    rightBarStart: {
      ...cssDev.base,
      justifyContent: 'start',
      alignItems: 'center',
      gap: '8px'
    },
    rightBarCenter: {
      ...cssDev.base,
      justifyContent: 'center',
      alignItems: 'center',
      gap: '8px'
    },
    rightBarEnd: {
      ...cssDev.base,
      justifyContent: 'end',
      alignItems: 'center',
      gap: '8px'
    },


    right: {
      ...cssDev.base,
      backgroundColor: "white",
      width: '150px',
      p: '8px',
    },
    rightStart: {
      ...cssDev.base,
      justifyContent: 'start',
      alignItems: 'flex-start',
      gap: '8px'
    },
    rightCenter: {
      ...cssDev.base,
      backgroundColor: "white",
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: '8px'
    },
    rightEnd: {
      ...cssDev.base,
      justifyContent: 'end',
      alignItems: 'flex-start',
      gap: '8px'
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
