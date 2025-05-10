import { ButtonHTMLAttributes } from 'react'
import { chakra, HStack, Box } from "@chakra-ui/react"
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function IconButton(props: Props) {
  return (
    <chakra.button
      css={{
        p: 1,
        m: 0,
        appearance: 'none',
        WebkitAppearance: 'none',
        background: 'backgroundOffset',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        color: 'muted',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'color .2s ease-in-out',
        ':hover': {
          color: 'text',
        },
        ':disabled': {
          opacity: '50%',
          cursor: 'initial',
        },
      }}
      {...props}
    />
  )
}
