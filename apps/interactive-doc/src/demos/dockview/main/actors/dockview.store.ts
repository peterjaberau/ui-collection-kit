export default {
  panels: [
    {
      id: "panel_1",
      component: "default",
      renderer: "always",
      title: "Panel 1",
    },
    {
      id: "panel_2",
      component: "default",
      title: "Panel 2",
      position: { referencePanel: "panel_1" },
    },
    {
      id: "panel_3",
      component: "default",
      title: "Panel 3",
      position: { referencePanel: "panel_1" },
    },
    {
      id: "panel_4",
      component: "default",
      title: "Panel 4",
      position: { referencePanel: "panel_1", direction: "right" },
    },
    {
      id: "panel_5",
      component: "default",
      title: "Panel 5",
      position: { referencePanel: "panel_4" },
    },
    {
      id: "panel_6",
      component: "default",
      title: "Panel 6",
      position: { referencePanel: "panel_5", direction: "below" },
    },
    {
      id: "panel_7",
      component: "default",
      title: "Panel 7",
      position: { referencePanel: "panel_6", direction: "left" },
    },
    {
      id: "panel8",
      component: "default",
      title: "Panel 8",
      position: { referencePanel: "panel_7", direction: "below" },
    },
  ],
}
