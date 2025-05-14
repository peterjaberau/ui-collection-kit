'use client';
import { useState } from 'react'
import Link from 'next/link'
import { Editor, Fieldset, Inputs, styled, codegen } from '@ui-collection-kit/css-gui'
import { initialStyles } from '../../data/initial-styles-box-shadow-preview'
import { defaultTheme } from '../../data/default-theme'
import {
  chakra,
  Stack,
  Center,
  Code,
  Text,
  Heading,
  Box,
} from '@chakra-ui/react';

export function BoxShadowPreview() {
  const [styles, setStyles] = useState<any>(initialStyles)

  return (
    <>
      <Stack
        id='box-shadow'
        borderRadius='6px'
        borderWidth='1px'
        borderColor='black'
      >
        <Heading size='sm' padding={3}>Inputs.BoxShadow</Heading>
        <Center
          height='150px'
          fontWeight='700'
          borderTopWidth='1px'
          borderBottomWidth='1px'
          display='flex'
          alignItems='center'
        >
          <styled.p styles={styles}>
            <chakra.span transition={"all .2s ease-in-out"} width={100} height={60} padding={8} backgroundSize={"cover"}  backgroundColor={"#6465ff"} backgroundImage={"url(https://source.unsplash.com/random/1920x1080))"} backgroundPosition={"center center" }></chakra.span>
          </styled.p>
        </Center>
        <Box height='150px' padding={3}>
          <Editor styles={styles} onChange={setStyles} theme={defaultTheme}>
            <Inputs.BoxShadow />
          </Editor>
        </Box>
        <Code>{codegen.css(styles)}</Code>
      </Stack>
    </>
  );
}
/*

<article
      id='box-shadow'
      sx={{
        color: 'muted',
        width: '100%',
        boxShadow: 'inset 0 0 0px 1px currentColor',
        borderRadius: '6px',
        overflow: 'hidden',
        cursor: 'pointer',
        }}>
        <code sx={{ color: 'text', px: 3, py: 2, width: '100%', display: 'block', borderBottom: '1px solid', borderBottomColor: 'muted', }}>
          &lt;Inputs.BoxShadow /&gt;
        </code>
      <section sx={{
            fontSize: '48px',
            lineHeight: '1.5',
            fontWeight: 700,
            height: '192px',
            borderBottom: '1px solid',
            px: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <styled.a
              styles={styles}
              style={{
                //borderRadius: '6px',
                overflow: 'hidden',
                margin: 0,
                lineHeight: 1,
                height: '60%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: 'url(https://source.unsplash.com/random/1920x1080)',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                transition: 'all .2s ease-in-out',
              }}>
          </styled.a>
        </section>
        <Editor styles={styles} onChange={setStyles} theme={defaultTheme}>
          <div
            sx={{
              color: 'text',
              px: 3, pt: 3,
              width: '100%',
              '& > div': {
                display: 'grid',
                gap: '.5rem',
              },
            }}
          >
            <Inputs.BoxShadow />
            <Fieldset type='pseudo-class' name='hover'>
              <h4 sx={{ mb: 0, fontSize: 0, }}>Hover :hover</h4>
              <Inputs.BoxShadow />
            </Fieldset>
          </div>
        </Editor>

<div sx={{
        px: 3,
        pb: 4,
        maxWidth: '100%',
        color: 'text',
        overflow: 'auto',
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
*/
