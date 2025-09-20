// Create store context
import { createContext } from "react";
import type { AppStore } from "./Store";

export const StoreContext: any = createContext<AppStore>({} as AppStore);
export const StoreProvider: any = StoreContext.Provider;

// Create hook to consume context in easy way
import { useContext } from "react";

export const useAppStore = (): AppStore => useContext(StoreContext);

