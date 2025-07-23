import {
  type CollectionItem,
  type CollectionOptions,
  type FilePathTreeNode,
  ListCollection,
  TreeCollection,
  type TreeCollectionOptions,
  type TreeNode,
  filePathToTree,
} from '@ui-kit/core-collection'

export type { CollectionItem, ListCollection, SelectionMode } from '@ui-kit/core-collection'

export const createListCollection = <T extends CollectionItem>(options: CollectionOptions<T>): ListCollection<T> =>
  new ListCollection(options)

export type { TreeCollection, TreeNode } from '@ui-kit/core-collection'

export const createTreeCollection = <T extends TreeNode>(options: TreeCollectionOptions<T>): TreeCollection<T> =>
  new TreeCollection(options)

export const createFileTreeCollection = (paths: string[]): TreeCollection<FilePathTreeNode> => filePathToTree(paths)
