import { useState } from 'react'
import Link from 'next/link'
import { Editor, Inputs, styled, codegen } from '@ui-collection-kit/css-gui'
import { initialStyles } from '../../data/initial-styles-accent-color-preview'
import { defaultTheme } from '../../data/default-theme'

export function AccentColorPreview() {
  const [styles, setStyles] = useState<any>(initialStyles)

  return (
    <>
      <article
        id="accent-color"
        style={{
          color: 'muted',
          width: '100%',
          boxShadow: 'inset 0 0 0px 1px currentColor',
          borderRadius: '6px',
          overflow: 'hidden',
        }}
      >
        <code
          style={{
            color: 'text',
            padding: 3,
            width: '100%',
            display: 'block',
            borderBottom: '1px solid',
            borderBottomColor: 'muted',
          }}
        >
          &lt;Inputs.AccentColor /&gt;
        </code>
        <section
          style={{
            borderBottomColor: 'muted',
            borderBottomStyle: 'solid',
            borderBottomWidth: '1px',
            color: 'text',
            fontWeight: 400,
            fontSize: 0,
            height: '192px',
            maxWidth: '100%',
            position: 'relative',
            overflow: 'hidden',
            padding: 3,
          }}
        >
          <label>
            <styled.input
              type="text"
              value={JSON.stringify(styles)}
              styles={styles}
              style={{
                appearance: 'none',
                border: '1px solid',
                borderRadius: '6px',
                padding: '12px',
                fontSize: '12px',
                width: '100%',
                boxSizing: 'border-box',
              }}
            />
          </label>
          <div style={{ paddingTop: 2 }}>
            <label>
              <styled.input
                checked={true}
                type="radio"
                name="bool"
                styles={styles}
              />
              <span>Yes</span>
            </label>
            <label>
              <styled.input name="bool" type="radio" styles={styles} />
              <span>No</span>
            </label>
            <div style={{ marginTop: 2, width: '100%', display: 'flex', gap: '1rem' }}>
              <label>
                <styled.input checked={false} type="checkbox" styles={styles} />
                <span>One</span>
              </label>
              <label>
                <styled.input checked={true} type="checkbox" styles={styles} />
                <span>Two</span>
              </label>
              <label>
                <styled.input
                  checked={true}
                  name="bool"
                  type="checkbox"
                  styles={styles}
                />
                <span>Three</span>
              </label>
            </div>
          </div>
          <label style={{ display: 'block', marginTop: 2 }}>
            <span style={{ display: 'none' }}>Value</span>
            <styled.input
              type="range"
              min={0}
              max={100}
              value={32}
              styles={styles}
              style={{ width: '100%' }}
            />
          </label>
          <label style={{ display: 'block', marginTop: 0 }}>
            <span style={{ display: 'none' }}>Progress</span>
            <styled.progress
              min={0}
              max={427}
              value={280}
              styles={styles}
              style={{ width: '100%' }}
            />
          </label>
        </section>
        <Editor styles={styles} onChange={setStyles} theme={defaultTheme}>
          <div
            style={{
              padding: 3,
              width: '100%',
              color: 'text',
              // '& > div': {
              //   display: 'grid',
              //   gap: '.5rem',
              // },
            }}
          >
            <Inputs.AccentColor />
          </div>
        </Editor>
        <div
          style={{
            padding: 3,
            maxWidth: '100%',
            overflow: 'auto',
            color: 'text',
          }}
        >
          <pre
            style={{
              width: '100%',
            }}
          >
            {codegen.css(styles)}
          </pre>
        </div>
      </article>
    </>
  )
}
