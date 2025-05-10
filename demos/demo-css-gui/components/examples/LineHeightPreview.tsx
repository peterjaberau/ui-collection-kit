
import { useState } from 'react'
import Link from 'next/link'
import { Editor, Inputs, styled, codegen } from '@ui-collection-kit/css-gui'
import { initialStyles } from '../../data/initial-styles-line-height-preview'
import { defaultTheme } from '../../data/default-theme'

export function LineHeightPreview() {
  const [styles, setStyles] = useState<any>(initialStyles)

  return (
    <>
      <article 
      id='line-height'
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        color: 'muted',
        width: '100%', 
        boxShadow: 'inset 0 0 0px 1px currentColor', 
        borderRadius: '6px',
        }}>
        <section sx={{
          fontWeight: 900,
          height: '300px',
          borderBottom: '1px solid',
          maxWidth: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'width .2s ease-in-out',
          mb: 3,
          }}>
          <styled.p styles={styles} style={{ margin: 0, lineHeight: 1, background: '#6465ff', width: '32px' }}>

            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

          </styled.p>
        </section>
        <Editor styles={styles} onChange={setStyles} theme={defaultTheme}>
          <div
            sx={{
              px: 5,
              pt: 3,
              width: '100%',
              color: 'text',
              '& > div': { 
                display: 'grid',
                gap: '.5rem',
              },
            }}
          >
            <Inputs.LineHeight />
          </div>
        </Editor>
      <div sx={{
        mt: 'auto',
        px: 5,
        pb: 4,
        maxWidth: '100%',
        overflow: 'auto',
            color: 'text',
        }}>
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
