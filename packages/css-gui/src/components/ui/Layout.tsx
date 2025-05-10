'use client'
import { HTMLAttributes } from 'react'
import { chakra, HStack, Box } from "@chakra-ui/react"
interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Layout = (props: Props) => {
  return <chakra.div id="layout" css={{ fontFamily: 'body' }} {...props} />
}
