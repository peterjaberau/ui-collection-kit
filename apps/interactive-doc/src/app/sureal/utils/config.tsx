import { isEqual } from 'radash'
import { useConfigStore } from '../store/config'
export function watchStore(options: {
  initial?: boolean;
  store: any;
  select: (slice: ReturnType<any>) => any;
  then: (value: any, prev?: any) => void;
}): () => void {
  const { store, select, then, initial } = options;

  if (initial) {
    options.then(select(store.getState()));
  }

  return store.subscribe((state: any, prev: any) => {
    const value = select(state);

    if (!isEqual(value, select(prev))) {
      then(value, select(prev));
    }
  });
}


export function getSetting(snapshot: any, {category, key}: any) {

  return snapshot?.context.settings[category][key];
}
