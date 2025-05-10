export interface FieldProps<V> {
  value: any
  onChange(value: any): void
  onRemove?(): void
  label?: string | number
  showLabel?: boolean
}

export type Key = string | number
export type KeyPath = Key[]
export type KeyArg = Key | KeyPath | string | any
export type Recipe = any | Setter
type Setter = (draft: any) => any | void

export interface EditorData {
  value: any
  [key: string]: any
}
