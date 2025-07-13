export default {
  system: {
    appLayout: {
      header: {
        start: {},
        center: {},
        end: {},
      },
      footer: {
        start: {},
        center: {},
        end: {},
      },
      barLeft: {
        start: {},
        center: {},
        end: {},
      },
      barRight: {
        start: {},
        center: {},
        end: {},
      },
      toolbar: {
        start: {},
        center: {},
        end: {},
      },
      sideLeft: {},
      sideRight: {},
      sideContent: {},
    },
  },

  globals: {},
  styles: {},
  pages: {},
  components: {},
  registry: {},
  extended: {},
  navigationSystem: {
    header: {
      isVisible: true,
      parts: {
        start: {
          isVisible: true,
        },
        center: {
          isVisible: true,
        },
        end: {
          isVisible: true,
        },
      },
    },
    body: {},
    footer: {
      isVisible: true,
      parts: {
        start: {
          isVisible: true,
        },
        center: {
          isVisible: true,
        },
        end: {
          isVisible: true,
        },
      },
    },
    toolbar: {
      isVisible: true,
      parts: {
        start: {
          isVisible: true,
        },
        center: {
          isVisible: true,
        },
        end: {
          isVisible: true,
        },
      },
    },
    asideLeft: {
      isVisible: true,
      parts: {
        start: {
          isVisible: true,
        },
        center: {
          isVisible: true,
        },
        end: {
          isVisible: true,
        },
      },
    },
    asideRight: {
      isVisible: true,
      parts: {
        start: {
          isVisible: true,
        },
        center: {
          isVisible: true,
        },
        end: {
          isVisible: true,
        },
      },
    },
  },

  sidePanels: [
    {
      id: 'panelLeft',
      content: {
        title: 'Left Panel',
        placement: 'left',
        mode: 'fixed',
        defaultExpand: true,
        expandable: true,
        pin: true,
        // minWidth: 100,
        // minHeight: 0,
        fullscreen: false,
        destroyOnClose: false,
        showHandleWhenCollapsed: true,
        showHandleWideArea: false,
        classNames: {
          content: '',
          handle: '',
        },
        styles: {
          content: {},
          handle: {},
        },
        defaultSize: {
          width: '300px',
          // height: '100%',
        },
        headerHeight: 0,
        expand: true,
        // maxHeight: null,
        // maxWidth: null,
        // size: null,
        // resize: null,
        // onExpandChange: (expand: boolean) => void
        // onSizeChange: (delta: NumberSize, size?: Size) => void
        // onSizeDragging: (delta: NumberSize, size?: Size) => void
      },
    },
    {
      id: 'panelRight',
      content: {
        title: 'Right Panel',
        placement: 'right',
        mode: 'fixed',
        defaultExpand: true,
        expandable: true,
        pin: true,
        minWidth: 100,
        minHeight: 0,
        fullscreen: false,
        destroyOnClose: false,
        showHandleWhenCollapsed: true,
        showHandleWideArea: false,
        classNames: {
          content: '',
          handle: '',
        },
        styles: {
          content: {},
          handle: {},
        },
        defaultSize: {
          width: '300px',
          height: '100%',
        },
        headerHeight: 0,
        expand: true,
      },
    },
    {
      id: 'panelBottom',
      content: {
        title: 'Bottom Panel',
        placement: 'bottom',
        mode: 'fixed',
        defaultExpand: true,
        expandable: true,
        pin: true,
        minWidth: 100,
        minHeight: 0,
        fullscreen: false,
        destroyOnClose: false,
        showHandleWhenCollapsed: true,
        showHandleWideArea: false,
        classNames: {
          content: '',
          handle: '',
        },
        styles: {
          content: {},
          handle: {},
        },
        defaultSize: {
          width: '100%',
          height: '350px',
        },
        headerHeight: 0,
        expand: true,
      },
    },
    {
      id: 'panelTop',
      content: {
        title: 'Top Panel',
        placement: 'top',
        mode: 'fixed',
        defaultExpand: true,
        expandable: true,
        pin: true,
        minWidth: 100,
        minHeight: 0,
        fullscreen: false,
        destroyOnClose: false,
        showHandleWhenCollapsed: true,
        showHandleWideArea: false,
        classNames: {
          content: '',
          handle: '',
        },
        styles: {
          content: {},
          handle: {},
        },
        defaultSize: {
          width: '100%',
          height: '350px',
        },
        headerHeight: 0,
        expand: true,
      },
    },

    {
      id: 'panelContentBottom',
      content: {
        title: 'Content Bottom Panel',
        placement: 'bottom',
        mode: 'fixed',
        defaultExpand: true,
        expandable: true,
        pin: true,
        minWidth: 100,
        minHeight: 0,
        fullscreen: false,
        destroyOnClose: false,
        showHandleWhenCollapsed: true,
        showHandleWideArea: false,
        classNames: {
          content: '',
          handle: '',
        },
        styles: {
          content: {},
          handle: {},
        },
        defaultSize: {
          width: '100%',
          height: '350px',
        },
        headerHeight: 0,
        expand: true,
      },
    },
  ],

  draggablePanel: {
    constants: {
      defaultHeight: 180,
      defaultWidth: 280,
    },
    panel: {
      defaultExpand: true,
      defaultSize: null,
      destroyOnClose: false,
      expand: null,
      expandable: true,
      fullscreen: false,
      headerHeight: 0,
      maxHeight: null,
      maxWidth: null,
      minHeight: null,
      minWidth: null,
      mode: 'fixed',
      dir: 'ltr',
      pin: true,
      placement: 'right',
      resize: true,
      showHandlerWhenUnexpand: true,
      showHandlerWideArea: true,
      size: null,
    },
    header: {
      pin: true,
      position: 'right',
      title: null,
    },
    footer: {},
    container: {},
    body: {},
  },
};
