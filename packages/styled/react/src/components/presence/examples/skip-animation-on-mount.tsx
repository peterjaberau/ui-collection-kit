import { Presence } from '..'
import { useState } from 'react'

export const SkipAnimationOnMount = () => {
  const [present, setPresent] = useState(true)
  return (
    <>
      <button type="button" onClick={() => setPresent(!present)}>
        Toggle
      </button>
      <Presence present={present} skipAnimationOnMount>
        Content
      </Presence>
    </>
  )
}
