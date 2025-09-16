
const data: any = {
  "hello-world": {
    "name": "hello-world",
    "path": "../apps/examples/demo/HelloWorld.tsx",
    "props": {
      "title": "Hello World",
      "description": "A simple 'Hello World' example."
    }
  },
  // "dockview": {
  //   "name": "dockview",
  //   "path": "../apps/examples/dockview/pages/demo-dockview/main.client.tsx",
  //   "props": {
  //     "title": "Hello World",
  //     "description": "A simple 'Hello World' example."
  //   }
  // },

  // "hello": {
  //   "path": "~/apps/examples/demo/HellowWorld.tsx",
  //
  // }
}

export const getComponentInfo = (name: string) => {
  return name ? data[name] : null;
};
