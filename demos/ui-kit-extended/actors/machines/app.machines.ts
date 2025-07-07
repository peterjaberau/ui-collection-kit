export const appShellManagerMachine = createMachine({
  context: ({ input }) => ({
    appShell: dataDefault.appShell,
    input,
  }),
})
