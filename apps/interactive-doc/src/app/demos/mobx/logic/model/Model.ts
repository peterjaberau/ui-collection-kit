import { SharedTree, SchemaFactory, type TreeView, TreeViewConfiguration } from "fluid-framework";
import { TinyliciousClient } from "@fluidframework/tinylicious-client";
import { boardHeight, boardWidth, initialItemBoard } from "./InitialItemBoard";
import { globalEvents } from "@/src/app/events"

const client = new TinyliciousClient({
  logger: {
    send(event:ITelemetryBaseEvent) {
      globalEvents.emit("mobxGridCellChanged", event);
    }
  }
});
const containerSchema = {
    initialObjects: { pixelEditorTree: SharedTree },
};

// The string passed to the SchemaFactory should be unique
const factory: SchemaFactory = new SchemaFactory("PixelEditorSample");

/**
 * The root schema for the application.
 */
export class PixelEditorSchema extends factory.object("PixelEditor-1.0.0", {
    board: factory.map(factory.number),
}) {
	/**
	 * Get the current board from Shared Tree.
	 * @param pixelEditorTreeView The Tree View to read from.
	 * @returns The board.
	 */
	public getBoardAsNestedArray(): number[][] {
		const outputBoard: number[][] = new Array();
		for (let y = 0; y < boardHeight; y++) {
			const row = new Array();
			for (let x = 0; x < boardWidth; x++) {
				const cell = this.board.get(getKey(x, y));
				row.push(cell);
			}
			outputBoard.push(row);
		}

		return outputBoard;
	};

	/**
	 * Set the copy of the board in Shared Tree.
	 * @param pixelEditorTreeView The Tree View whose underlying tree is to be modified.
	 * @param board The board.
	 */
	public setBoardFromNestedArray(inputBoard: number[][] | any): void {
		for (let y = 0; y < boardHeight; y++) {
			for (let x = 0; x < boardWidth; x++) {
				const cell = inputBoard[y][x];
				this.board.set(getKey(x, y), cell);
			}
		}
	}

	/**
	 * Set a cell in the board to a specific value.
	 * @param pixelEditorTreeView The Tree View whose underlying tree is to be modified.
	 * @param x The column.
	 * @param y The row.
	 * @param value The value to set, either 1 or 0.
	 */
	public setCell(x: number, y: number, value: number): void {
		this.board.set(getKey(x, y), value);
	}
}

/**
 * Helper for converting to the Map-based board format used in the Shared Tree representation.
 * @param inputBoard The input board as a nested array.
 * @returns The output board as a map.
 */
const nestedArrayToMap = (inputBoard: number[][]): Map<string, number> => {
	const outputBoard = new Map<string, number>();
	for (let y = 0; y < inputBoard.length; y++) {
		const row: any = inputBoard[y];
		for (let x = 0; x < row.length; x++) {
			const cell = row[x];
			outputBoard.set(getKey(x, y), cell);
		}
	}

	return outputBoard;
}

const treeConfiguration = new TreeViewConfiguration(
	{ schema: PixelEditorSchema }
);

const createNewPixelEditor = async (): Promise<{id: string, pixelEditorTreeView: TreeView<typeof PixelEditorSchema>}> => {
	const { container } = await client.createContainer(containerSchema, "2");
	const pixelEditorTreeView = container.initialObjects.pixelEditorTree.viewWith(treeConfiguration);
	pixelEditorTreeView.initialize(new PixelEditorSchema({ board: nestedArrayToMap(initialItemBoard) }));
	const id = await container.attach();
	return { id, pixelEditorTreeView };
};

const loadExistingPixelEditor = async (id: string): Promise<TreeView<typeof PixelEditorSchema>> => {
	const { container } = await client.getContainer(id, containerSchema, "2");
	const pixelEditorTreeView = container.initialObjects.pixelEditorTree.viewWith(treeConfiguration);
    return pixelEditorTreeView;
};

/**
 * Join or start a Shared Tree session.
 * @returns The Tree View.
 */
export const start = async (): Promise<TreeView<typeof PixelEditorSchema>> => {
  let pixelEditorTreeView: TreeView<typeof PixelEditorSchema> | undefined;

  if (typeof window !== 'undefined' && window.location.hash) {
    pixelEditorTreeView = await loadExistingPixelEditor(window.location.hash.substring(1));
  } else {
    const result = await createNewPixelEditor();
    if (typeof window !== 'undefined') {
      window.location.hash = result.id;
    }
    pixelEditorTreeView = result.pixelEditorTreeView;
  }

  return pixelEditorTreeView;
}

/**
 * Create a key for indexing into the board Shared Tree.
 * @param x x index
 * @param y y index
 * @returns The cell value.
 */
export const getKey = (x: number, y: number) => `${x},${y}`;

// TODO: Rename
/**
 * A wrapper for the root TreeView. Can support a disconnected state, needed in this case because we load/create the Shared Tree
 * in a Redux thunk after the application modules have loaded.
 */
export interface SharedTreeConnection {
	pixelEditorTreeView: TreeView<typeof PixelEditorSchema> | undefined;
}
