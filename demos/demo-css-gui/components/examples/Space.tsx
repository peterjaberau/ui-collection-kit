import { useState } from 'react'
import {
  codegen,
  Editor,
  parseStyles,
  styled,
  toCSSObject,
} from '@ui-collection-kit/css-gui'

export const SpaceExample = () => {
  const [styles, setStyles] = useState(
    parseStyles({
      marginTop: '1rem',
      marginBottom: '1rem',
      marginLeft: '1rem',
      marginRight: '1rem',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
    })
  )

  return (
    <div>
      <div
        sx={{
          ':first-child > div': {
            display: 'grid',
            gap: '.5rem',
          },
        }}
      >
        {/** @ts-ignore */}
        <Editor styles={styles} onChange={setStyles} />
      </div>
      <div sx={{ border: 'thin solid', borderColor: 'border', mt: [3, 4, 5] }}>
        <p sx={{ ...toCSSObject(styles as any), border: 'thin solid' }}>
          Fun with space!
        </p>
      </div>
      {/** @ts-ignore */}
      <pre>{codegen.css(styles)}</pre>
      <hr />
      <pre>{JSON.stringify(styles, null, 2)}</pre>
    </div>
  )
}
