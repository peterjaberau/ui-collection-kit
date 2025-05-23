import { Editable } from '..'

export const DoubleClick = () => (
  <Editable.Root placeholder="Placeholder" activationMode="dblclick">
    <Editable.Area>
      <Editable.Input />
      <Editable.Preview />
    </Editable.Area>
  </Editable.Root>
)
