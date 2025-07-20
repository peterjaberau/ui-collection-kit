import { ComponentType as ReactComponentType, ReactNode } from 'react';

export interface ComponentNode {
  id: string;
  name?: string;
  type: string;
  props?: any;
  children?: ComponentNode[]
}

export interface RegistryEntry {
  component?: any;
  schema: any;
  from: any;
  isFromDefaultExport?: any;
  defaultChildren?: ComponentNode[] | string;
  defaultVariableBindings?: any
  fieldOverrides?: any
  [key: string]: any
}

export type ComponentRegistry = Record<string, RegistryEntry<ReactComponentType<any>>>
