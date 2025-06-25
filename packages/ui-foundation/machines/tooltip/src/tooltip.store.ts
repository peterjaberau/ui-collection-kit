import { proxy } from "@ui-collection-kit/store"

export const store = proxy<{ id: string | null }>({ id: null })
