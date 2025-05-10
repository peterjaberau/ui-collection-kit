'use client'
import { ChevronRight } from 'react-feather'
import { chakra, HStack, Box } from "@chakra-ui/react"
/**
 * A chevron that shows whether an item has been expanded or not
 */
export function ExpandMarker({ open }: { open: boolean }) {
  return (
    <chakra.div
      css={{
        transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
        transition: 'transform 150ms',
        mr: 1,
      }}
    >
      <ChevronRight size={18} />
    </chakra.div>
  )
}
