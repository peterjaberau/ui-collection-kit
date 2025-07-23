import { Presence } from '..'
import { useState } from 'react'

export const LazyMount = () => {
  const [present, setPresent] = useState(false)
  return (
    <>
      <button type="button" onClick={() => setPresent(!present)}>
        Toggle
      </button>
      <Presence present={present} lazyMount>
        Unmounted and Hidden
      </Presence>
    </>
  )
}
