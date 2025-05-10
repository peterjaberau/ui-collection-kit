import { useState } from 'react'
import { NumberInput } from '@ui-collection-kit/css-gui'

export const NumberExample = () => {
  const [value, setValue] = useState<number>(16)
  return (
    <div>
      <NumberInput value={value} onChange={setValue} />
    </div>
  )
}
