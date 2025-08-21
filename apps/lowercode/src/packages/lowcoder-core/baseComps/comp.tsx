import { ReactNode } from "react"
import { changeValueAction, ChangeValueAction, CompAction } from "#lowcoder-core/actions"
import { Node } from "#lowcoder-core/eval"
import { JSONValue } from "#lowcoder-core/util/jsonTypes"
import { setFieldsNoTypeCheck } from "#lowcoder-core/util/objectUtils"

export type OptionalNodeType = Node<unknown> | undefined
export type DispatchType = (action: CompAction) => void

export interface Comp<
  ViewReturn = unknown,
  DataType extends JSONValue = JSONValue,
  NodeType extends OptionalNodeType = OptionalNodeType,
> {
  dispatch: DispatchType

  getView(): ViewReturn
  getPropertyView(): ReactNode
  reduce(action: CompAction): this
  node(): NodeType
  toJsonValue(): DataType

  changeDispatch(dispatch: DispatchType): this
  changeValueAction(value: DataType): ChangeValueAction
  dispatchChangeValueAction(value: Data): void
}

export class AbstractComp<
  ViewReturn = unknown,
  DataType extends JSONValue = JSONValue,
  NodeType extends OptionalNodeType = OptionalNodeType,
> implements Comp<ViewReturn, DataType, NodeType>
{
  dispatch: DispatchType
  private _nodeCache?: NodeType

  constructor(params: CompParams<DataType>) {
    // this.dispatch = params.dispatch ?? (() => {})
    this.dispatch = params.dispatch ?? ((_action: CompAction) => {})
  }

  getView(): ViewReturn {
    throw new Error("getView() must be implemented")
  }

  getPropertyView(): ReactNode {
    throw new Error("getPropertyView() must be implemented")
  }

  toJsonValue(): DataType {
    throw new Error("toJsonValue() must be implemented")
  }

  reduce(_action: CompAction): this {
    throw new Error("reduce() must be implemented")
  }

  protected nodeWithoutCache(): NodeType {
    throw new Error("nodeWithoutCache() must be implemented")
  }

  changeDispatch(dispatch: DispatchType): this {
    return setFieldsNoTypeCheck(this, { dispatch }, { keepCacheKeys: ["_nodeCache"] })
  }

  dispatchChangeValueAction(value: DataType) {
    this.dispatch(this.changeValueAction(value))
  }

  changeValueAction(value: DataType): ChangeValueAction {
    return changeValueAction(value, true)
  }

  node(): NodeType {
    if (this._nodeCache === undefined) {
      this._nodeCache = this.nodeWithoutCache()
    }
    return this._nodeCache
  }
}

export type OptionalComp<T = any> = Comp<T> | undefined

export type CompConstructor<
  ViewReturn = any,
  DataType extends JSONValue = any,
  NodeType extends OptionalNodeType = OptionalNodeType,
> = new (params: CompParams<DataType>) => Comp<ViewReturn, DataType, NodeType>

/**
 * Utility types for extracting constructor generics
 */
export type ConstructorToView<T> = T extends CompConstructor<infer ViewReturn> ? ViewReturn : never
export type ConstructorToComp<T> = T extends new (params: CompParams<any>) => infer X ? X : never
export type ConstructorToDataType<T> = T extends new (params: CompParams<infer DataType>) => any ? DataType : never
export type ConstructorToNodeType<T> = ConstructorToComp<T> extends Comp<any, any, infer NodeType> ? NodeType : never

export type RecordConstructorToComp<T> = {
  [K in keyof T]: ConstructorToComp<T[K]>
}
export type RecordConstructorToView<T> = {
  [K in keyof T]: ConstructorToView<T[K]>
}

export interface CompParams<DataType extends JSONValue = JSONValue> {
  dispatch?: (action: CompAction) => void
  value?: DataType
}
