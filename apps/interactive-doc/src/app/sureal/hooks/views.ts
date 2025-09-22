import { useMemo } from "react";
import { GLOBAL_PAGES } from '../screens/constants'


export function useAvailablePages() {

  return useMemo(() => {
    return { ...GLOBAL_PAGES } as const;
  }, []);

}
