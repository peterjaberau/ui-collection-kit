import { createContext } from 'react';

class Query {
  readonly datasourceId?: string;
  readonly resourceType?: any;
  readonly disableJSCompletion?: boolean; // fixme: delete after server supports eval
  readonly placement?: 'queryLibrary' | 'editor';
}

export const QueryContext = createContext<Query | undefined>(undefined);
