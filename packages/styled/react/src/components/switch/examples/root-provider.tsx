import { Switch, useSwitch } from '..'

export const RootProvider = () => {
  const switchApi = useSwitch()

  return (
    <>
      <button onClick={() => switchApi.toggleChecked()}>Toggle</button>

      <Switch.RootProvider value={switchApi}>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>Label</Switch.Label>
        <Switch.HiddenInput />
      </Switch.RootProvider>
    </>
  )
}
