import StoreContext from '../models/context';
import { useContext } from 'react';

export const useTemporalStore = () => {
  const store = useContext(StoreContext);

  if (store === null) {
    throw new Error('[XFlow]: Seems like you have not used zustand provider as an ancestor.');
  }
  const temporalStore = store.temporal.getState();
  // Disable time machine by default
  temporalStore.pause();

  return {
    ...store.temporal.getState(),
    record: (callback: () => void) => {
      temporalStore.resume();
      callback();
      temporalStore.pause();
    },
  };
};
