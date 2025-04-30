import { createStore as createx } from 'zustand';

type FormStore = {
  schema?: any;
  flattenSchema: any;
  context?: any;
  initialized: boolean;
  init?: (schema: FormStore['schema']) => any;
  setContext: (context: any) => any;
};

// Change useStore to createStore and change it to the create method
// @ts-ignore
export const createStore = () =>
  // @ts-ignore
  createx<FormStore>((setState: any, get: any) => ({
    initialized: false,
    schema: {},
    flattenSchema: {},
    context: {},
    init: (data) => {
      return setState({
        initialized: true,
        ...data,
      });
    },
    setContext: (context) => {
      return setState({ context });
    },
  }));
