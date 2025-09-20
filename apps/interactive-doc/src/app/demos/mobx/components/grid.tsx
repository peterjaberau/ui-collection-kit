import { SimpleGrid } from '@chakra-ui/react';
import { boardHeight, boardWidth } from "../logic/model/InitialItemBoard";
import { Cell } from './cell';
import { observer } from "mobx-react-lite";
import { useAppStore } from "../logic/store/Hooks";

export const Grid = observer(() => {
  const store = useAppStore();
  const { itemBoard }: any = store;

  // Populate the board
  const items = itemBoard.length > 0
    ? [...Array(boardWidth * boardHeight)].map((_, i) => {
      const x = i % boardWidth;
      const y = Math.floor(i / boardWidth);
      const value = itemBoard[y][x];

      const onClickCell = () => {
        const oldValue: number = itemBoard[y][x];

        // Toggle the color between white and black
        store.setCell(
          x,
          y,
          1 - oldValue
        );
      }

      const key = `${x},${y}`;
      return <Cell key={key} onClickCell={onClickCell} value={value}/>
    }) : [];

  return (
    <SimpleGrid columns={8} gap="10px" >
      {items}
    </SimpleGrid>
  );
});

export default Grid;
