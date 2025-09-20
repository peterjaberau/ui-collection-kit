import { GridItem } from "@chakra-ui/react"
export interface CellProps {
  value: number;
  onClickCell: () => void;
}

export function Cell({ value, onClickCell }: CellProps) {
  return <GridItem css={{
    width: '50px',
    height: '50px',
    backgroundColor: value === 0 ? 'black' : 'white'
  }} onClick={onClickCell} />;
}
