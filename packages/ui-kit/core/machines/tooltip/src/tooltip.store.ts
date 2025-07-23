import { proxy } from "@ui-kit/core-store"

export const store = proxy<{ id: string | null }>({ id: null })
