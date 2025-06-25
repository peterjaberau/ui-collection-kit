import { type HighlightChunk, type HighlightWordProps, highlightWord } from '@ui-collection-kit/highlight-word'
import { useMemo } from 'react'

export interface UseHighlightProps extends HighlightWordProps {}

export const useHighlight = (props: UseHighlightProps): HighlightChunk[] => {
  return useMemo(() => highlightWord(props), [props])
}

export type { HighlightChunk }
