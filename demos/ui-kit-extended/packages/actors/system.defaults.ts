export default {
  globals: {},
  styles: {},
  registry: null,
  iconsRegistry: null,
  examplesRegistry: null,
  appShell: {
    root: {

    },
    header: {
      children: {
        start: {},
        center: {},
        end: {},
      }
    },
    body: {
      asideStart: {
        start: {},
        center: {},
        end: {},
      },
      main: {
        mode: "split",
        defaultSize: [15, 70, 15],
        children: [
          {
            component: "FlexibleLayout",
            mode: 'component'
          },
          {
            mode: 'component',
            direction: 'column',
            children: [
              {
                component: 'WorkbenchToolbar',
              },
              {
                component: "FlexibleLayout"
              }
            ]
          }
        ]
      },
      asideEnd: {
        start: {},
        center: {},
        end: {},
      },
    },
    footer: {
      start: {},
      center: {},
      end: {},
    }
  }

}
