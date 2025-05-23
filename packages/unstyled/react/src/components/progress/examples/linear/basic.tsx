import { Progress } from '../../..'

export const Basic = () => (
  <Progress.Root defaultValue={42}>
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
)
