import { useState } from 'react'
import { ColorPopover } from '@ui-collection-kit/css-gui'
import { defaultTheme } from '../../data/default-theme'

export const ColorPickerExample = () => {
  const [color, setColor] = useState('tomato')

  return (
    <>
      <ColorPopover value={color} onChange={setColor} theme={defaultTheme} />
      <p style={{ color: color }}>I am {color}!</p>
    </>
  )
}
