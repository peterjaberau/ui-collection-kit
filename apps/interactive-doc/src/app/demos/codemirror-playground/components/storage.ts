// A default key for your storage
const STORAGE_KEY = 'jsonataPlayground';

// Define the shape of our stored data
export interface PlaygroundData {
  datasets: Record<string, any>;
  expressionSets: Record<string, Record<string, any>>;
  lastSelectedDataset?: string;
  lastSelectedExpressionSet?: string;
}

// Function to get the entire state from localStorage
export const getStoredState = (): PlaygroundData => {
  if (typeof window === 'undefined') {
    return { datasets: {}, expressionSets: {} };
  }
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored
      ? JSON.parse(stored)
      : { datasets: {}, expressionSets: {} };
  } catch (e) {
    console.error('Failed to parse stored state:', e);
    return { datasets: {}, expressionSets: {} };
  }
};

// Function to save the entire state to localStorage
export const saveState = (state: PlaygroundData): void => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save state:', e);
  }
};
