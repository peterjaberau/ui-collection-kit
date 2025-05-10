import { useState } from 'react'
import Link from 'next/link'
import { Editor, Inputs, styled, codegen } from '@ui-collection-kit/css-gui'
import { initialStyles } from '../../data/initial-styles-background-preview'
import { defaultTheme } from '../../data/default-theme'

export function BackgroundPreview() {
  const [styles, setStyles] = useState<any>(initialStyles)

  return (
    <>
      <article
        id="background"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          color: 'muted',
          width: '100%',
          boxShadow: 'inset 0 0 0px 1px currentColor',
          borderRadius: '6px',
          overflow: 'hidden',
        }}
      >
        <code
          sx={{
            color: 'text',
            px: 3,
            py: 2,
            width: '100%',
            display: 'block',
            borderBottom: '1px solid',
            borderBottomColor: 'muted',
          }}
        >
          &lt;Inputs.Background /&gt;
        </code>
        <section
          sx={{
            fontWeight: 900,
            height: '192px',
            borderBottom: '1px solid',
            maxWidth: '100%',
            position: 'relative',
            textAlign: 'center',
            overflow: 'hidden',
            mb: 3,
          }}
        >
          <styled.div
            styles={styles}
            style={{
              margin: 0,
              height: '100%',
              width: '100%',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundColor: 'salmon',
              backgroundRepeat: 'no-repeat',
            }}
          ></styled.div>
        </section>
        <Editor styles={styles} onChange={setStyles} theme={defaultTheme}>
          <div
            sx={{
              px: 3,
              width: '100%',
              color: 'text',
              '& > div': {
                display: 'grid',
                gap: '.5rem',
              },
            }}
          >
            <Inputs.Background />
          </div>
        </Editor>
        <div
          sx={{
            px: 3,
            pb: 3,
            maxWidth: '100%',
            overflow: 'auto',
            color: 'text',
          }}
        >
          <pre
            sx={{
              width: '100%',
              fontSize: 0,
            }}
          >
            {codegen.css(styles)}
          </pre>
        </div>
      </article>
    </>
  )
}
