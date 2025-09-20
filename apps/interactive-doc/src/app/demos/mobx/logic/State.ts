/**
 * Holds app state.
 */
export interface AppState {
	isLoaded: boolean;
	itemBoard: number[][];
};

/**
 * The initial app state. Copied but not modified directly.
 */
export const initialAppState: AppState = {
	isLoaded: false,
	itemBoard: []
};
