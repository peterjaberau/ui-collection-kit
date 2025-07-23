import { Toggle } from '..'
import { BoldIcon } from 'lucide-react'

export const Disabled = () => {
  return (
    <Toggle.Root disabled>
      <BoldIcon />
    </Toggle.Root>
  )
}
