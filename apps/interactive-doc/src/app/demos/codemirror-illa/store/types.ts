export interface UpdateComponentPropsPayload {
  displayName: string
  updateSlice: Record<string, unknown>
  notUseUndoRedo?: boolean
}
