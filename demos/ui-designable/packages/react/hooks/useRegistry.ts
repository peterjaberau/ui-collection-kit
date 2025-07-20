import { GlobalRegistry, IDesignerRegistry } from '#packages/core';
import { globalThisPolyfill } from '#packages/shared';

export const useRegistry = (): IDesignerRegistry => {
  return globalThisPolyfill['__DESIGNER_REGISTRY__'] || GlobalRegistry;
};
