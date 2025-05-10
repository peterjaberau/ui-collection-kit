import { useId } from 'react'
import Link from 'next/link'
import { chakra } from '@chakra-ui/react'
export const Header = () => {
  const id = useId()

  return (
    <chakra.header
      css={{
        fontFamily: 'body',
        borderBottom: 'thin solid',
        borderColor: 'border',
        height: '54px',
        px: 3,
        position: 'sticky',
        width: '100%',
        backgroundColor: 'background',
        zIndex: 999,
        top: 0,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <chakra.a
        href="https://components.ai"
        title="Components AI - Home"
        css={{
          color: 'text',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          mr: 3,
        }}
      >
      </chakra.a>
      <Link href="/" passHref={true}>
        <chakra.a
          css={{
            fontWeight: 500,
            color: 'text',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span>
            CSS GUI
          </span>
        </chakra.a>
      </Link>
      <Link href="/home" passHref={true}>
        <chakra.a
          css={{
            color: 'text',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            fontSize: [0, 1, 1],
            px: 3,
            ml: 'auto',
            fontWeight: 700,
          }}
        >
          Docs
        </chakra.a>
      </Link>
      <Link href="/properties" passHref={true}>
        <chakra.a
          css={{
            color: 'text',
            textDecoration: 'none',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            fontSize: [0, 1, 1],
            px: 3,
          }}
        >
          Properties
        </chakra.a>
      </Link>
      <chakra.a
        css={{
          textDecoration: 'none',
          color: 'currentColor',
          fontWeight: 700,
          transition: 'color .2s ease-in-out',
          px: 3,
          fontSize: [0, 1, 1],
          ':hover': {
            color: 'primary',
          },
        }}
        href="https://github.com/components-ai/css.gui"
      >
        GitHub
      </chakra.a>
      <chakra.a
        css={{
          textDecoration: 'none',
          color: 'currentColor',
          fontWeight: 700,
          transition: 'color .2s ease-in-out',
          px: 3,
          py: 2,
          boxShadow: 'inset 0 0 1px 0 currentColor',
          borderRadius: '4px',
          lineHeight: 1,
          fontSize: [0, 1, 1],
          mr: 2,
          ':hover': {
            color: 'primary',
          },
        }}
        href="https://components.ai/login"
      >
        Log in
      </chakra.a>
      <chakra.a
        css={{
          textDecoration: 'none',
          fontWeight: 700,
          px: 3,
          fontSize: [0, 1, 1],
          bg: 'primary',
          color: 'white',
          borderRadius: '4px',
          lineHeight: 1,
          py: 2,
          transition: '.25s background-color ease-in-out',
          ':hover': {
            bg: 'primaryHover',
          },
        }}
        href="https://components.ai/signup"
      >
        Sign up
      </chakra.a>
    </chakra.header>
  )
}
