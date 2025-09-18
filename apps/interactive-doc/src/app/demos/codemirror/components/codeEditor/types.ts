import { ReactNode } from 'react';

export type CodeType = undefined | 'JSON' | 'Function' | 'PureJSON';

export type CompInfo = {
  name: string;
  type: string;
  data: Record<string, any>;
  dataDesc: Record<string, ReactNode>;
};
