import { ListCollection, type CollectionItem, type CollectionOptions } from "@ui-collection-kit/collection"

export const collection = <T extends CollectionItem>(options: CollectionOptions<T>): ListCollection<T> => {
  return new ListCollection<T>(options)
}

collection.empty = (): ListCollection<CollectionItem> => {
  return new ListCollection<CollectionItem>({ items: [] })
}
