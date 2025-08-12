import type { ReactNode } from "react";

export interface FieldBaseProps<T = any> {
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
  readOnly?: boolean;
  disabled?: boolean;
  error?: boolean;
}

interface EmptyInterface {}

export type IFieldOptionItem<V = any, L extends ReactNode = ReactNode, E extends any = EmptyInterface> = {
  value: V;
  label: L;
  disabled?: boolean;
} & E;

export type IFieldPropOptionItem<V = any, L extends ReactNode = ReactNode, E = EmptyInterface> =
  | string
  | number
  | IFieldOptionItem<V, L, E>;

type IFieldPropFnOption<V = any, L extends ReactNode = ReactNode, E = EmptyInterface> =
  | ((refresh?: boolean) => IFieldOptionItem<V, L, E>[])
  | ((refresh?: boolean) => Promise<IFieldOptionItem<V, L, E>[]>);

export type IFieldPropOptions<V = any, L extends ReactNode = ReactNode, E = EmptyInterface> =
  | IFieldPropOptionItem<V, L, E>[]
  | IFieldPropFnOption<V, L, E>;

export type IColors = "primary" | "secondary" | "error" | "info" | "success" | "warning" | string;

export interface ICommonProps {
  [key: string]: any;
}

export interface IUploadedFile extends File {
  url?: string;
  thumbUrl?: string;
  status?: "error" | "done" | "uploading";
  message?: string;
  error?: any;
}

export interface RefreshOptionsProps {
  showRefresh?: boolean;
  refresh?: number;
  onRefreshChange?: (refresh: number) => void;
  refreshText?: string;
  refreshIcon?: ReactNode;
}
