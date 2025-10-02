import {
  Schema,
  PortableTextSpan,
  PortableTextTextBlock,
  TypedObject,
  FieldDefinition,
  SchemaDefinition,
} from "./types"

export function isSpan(context: { schema: Schema }, child: unknown): child is PortableTextSpan {
  if (!isTypedObject(child)) {
    return false
  }

  if (child._type !== context.schema.span.name) {
    return false
  }

  if (typeof child.text !== "string") {
    return false
  }

  return true
}

export function isTextBlock(context: { schema: Schema }, block: unknown): block is PortableTextTextBlock {
  if (!isTypedObject(block)) {
    return false
  }

  if (block._type !== context.schema.block.name) {
    return false
  }

  if (!Array.isArray(block.children)) {
    return false
  }

  return true
}

export function isTypedObject(object: unknown): object is TypedObject {
  return isRecord(object) && typeof object._type === "string"
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return !!value && (typeof value === "object" || typeof value === "function")
}

export function defineSchema<const TSchemaDefinition extends SchemaDefinition>(
  definition: TSchemaDefinition,
): TSchemaDefinition {
  return definition
}

export function compileSchema(definition: SchemaDefinition): Schema {
  const styles = (definition.styles ?? []).map((style) => ({
    ...style,
    value: style.name,
  }))

  const blockFields: Array<FieldDefinition> = []

  if (definition.block?.fields) {
    for (const field of definition.block.fields) {
      if (
        field.name === "_type" ||
        field.name === "_key" ||
        field.name === "children" ||
        field.name === "markDefs" ||
        field.name === "style" ||
        field.name === "listItem" ||
        field.name === "level"
      ) {
        console.warn(`"${field.name}" is a reserved field name on Portable Text blocks`)
        continue
      }

      blockFields.push(field)
    }
  }

  return {
    block: {
      name: definition.block?.name ?? "block",
      ...(blockFields.length > 0 ? { fields: blockFields } : {}),
    },
    span: {
      name: "span",
    },
    styles: !styles.some((style) => style.value === "normal")
      ? [{ value: "normal", name: "normal", title: "Normal" }, ...styles]
      : styles,
    lists: (definition.lists ?? []).map((list) => ({
      ...list,
      value: list.name,
    })),
    decorators: (definition.decorators ?? []).map((decorator) => ({
      ...decorator,
      value: decorator.name,
    })),
    annotations: (definition.annotations ?? []).map((annotation) => ({
      ...annotation,
      fields: annotation.fields ?? [],
    })),
    blockObjects: (definition.blockObjects ?? []).map((blockObject) => ({
      ...blockObject,
      fields: blockObject.fields ?? [],
    })),
    inlineObjects: (definition.inlineObjects ?? []).map((inlineObject) => ({
      ...inlineObject,
      fields: inlineObject.fields ?? [],
    })),
  }
}
