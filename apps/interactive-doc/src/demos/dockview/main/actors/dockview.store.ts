export const configDemo = {
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

export const domainDrivenDock = {
  panels: [
    {
      id: "panel_domain_selector",
      component: "DomainSelectorPanel",
      renderer: "always",
      title: "Domain Selector",
    },
    {
      id: "panel_domain_structure",
      component: "DomainStructurePanel",
      title: "Domain Structure",
      renderer: "always",
      position: { referencePanel: "panel_domain_selector", direction: "below" },
    },

    {
      id: "panel_node_selected",
      component: "NodeSelectedPanel",
      title: "Node Selected",
      renderer: "always",
      position: { referencePanel: "panel_domain_selector", direction: "right" },
    },
    {
      id: "panel_node_specifications",
      component: "NodeSpecificationsPanel",
      title: "Node Specs",
      renderer: "always",
      position: { referencePanel: "panel_domain_selector", direction: "right" },
    },
    {
      id: "panel_node_simulator",
      component: "NodeSimlulatorPanel",
      title: "Node Simulator",
      renderer: "always",
      position: { referencePanel: "panel_domain_structure", direction: "right" },
    },
    {
      id: "panel_node_script_editor",
      component: "NodeScriptEditorPanel",
      title: "Script Editor",
      renderer: "always",
      position: { referencePanel: "panel_domain_structure", direction: "right" },
    },
  //   NodeScriptEditorPanel
  ],
}


export const data = {
  domains: [
    "jsonata"
  ],
  domainsStructure: {
    jsonata: [
      {
        id: "demos",
        name: "Demos",
        children: [
          {
            id: "transformer",
            name: "Transformer",
          }
        ]
      },
      {
        id: "api-specs",
        name: "API Specs",
        children: [
          { id: "operators", name: "Operators"},
          { id: "functions", name: "Functions" }
        ]
      }
    ]
  }
}
