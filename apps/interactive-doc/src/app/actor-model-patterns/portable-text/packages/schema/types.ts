export type Schema = {
  block: {
    name: string
    fields?: ReadonlyArray<FieldDefinition>
  }
  span: {
    name: string
  }
  styles: ReadonlyArray<BaseDefinition>
  lists: ReadonlyArray<BaseDefinition>
  decorators: ReadonlyArray<BaseDefinition>
  annotations: ReadonlyArray<AnnotationSchemaType>
  blockObjects: ReadonlyArray<BlockObjectSchemaType>
  inlineObjects: ReadonlyArray<InlineObjectSchemaType>
}

export type SchemaDefinition = {
  block?: {
    name?: string
    fields?: ReadonlyArray<FieldDefinition>
  }
  styles?: ReadonlyArray<StyleDefinition>
  lists?: ReadonlyArray<ListDefinition>
  decorators?: ReadonlyArray<DecoratorDefinition>
  annotations?: ReadonlyArray<AnnotationDefinition>
  blockObjects?: ReadonlyArray<BlockObjectDefinition>
  inlineObjects?: ReadonlyArray<InlineObjectDefinition>
}

export type StyleDefinition<TBaseDefinition extends BaseDefinition = BaseDefinition> = TBaseDefinition

export type ListDefinition<TBaseDefinition extends BaseDefinition = BaseDefinition> = TBaseDefinition

export type DecoratorDefinition<TBaseDefinition extends BaseDefinition = BaseDefinition> = TBaseDefinition

export type AnnotationDefinition<TBaseDefinition extends BaseDefinition = BaseDefinition> = TBaseDefinition & {
  fields?: ReadonlyArray<FieldDefinition>
}

export type BlockObjectDefinition<TBaseDefinition extends BaseDefinition = BaseDefinition> = TBaseDefinition & {
  fields?: ReadonlyArray<FieldDefinition>
}

export type InlineObjectDefinition<TBaseDefinition extends BaseDefinition = BaseDefinition> = TBaseDefinition & {
  fields?: ReadonlyArray<FieldDefinition>
}

export interface TypedObject {
  [key: string]: unknown
  _type: string
}

export interface PortableTextTextBlock<TChild = PortableTextSpan | PortableTextObject> {
  _type: string
  _key: string
  children: TChild[]
  markDefs?: PortableTextObject[]
  listItem?: string
  style?: string
  level?: number
}

export interface PortableTextSpan {
  _key: string
  _type: "span"
  text: string
  marks?: string[]
}

export interface PortableTextObject {
  _type: string
  _key: string
  [other: string]: unknown
}

export type PortableTextBlock = PortableTextTextBlock | PortableTextObject

export type BaseDefinition = {
  name: string
  title?: string
}

export type FieldDefinition = BaseDefinition & {
  type: "string" | "number" | "boolean" | "array" | "object"
}

export type AnnotationSchemaType = BaseDefinition & {
  fields: ReadonlyArray<FieldDefinition>
}

export type BlockObjectSchemaType = BaseDefinition & {
  fields: ReadonlyArray<FieldDefinition>
}

export type InlineObjectSchemaType = BaseDefinition & {
  fields: ReadonlyArray<FieldDefinition>
}

export type PortableTextChild = PortableTextObject | PortableTextSpan
