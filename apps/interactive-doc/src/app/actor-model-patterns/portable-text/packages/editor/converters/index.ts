import { getSelectedValue } from '#actor-portable-text/packages/editor/selectors'
import { isTextBlock } from '#actor-portable-text/packages/schema'
import { htmlToBlocks } from '#actor-portable-text/packages/block-tools'
import { parseBlock } from "#actor-portable-text/packages/editor/utils"


export function createCoreConverters(legacySchema: any) {
  return [
    converterJson,
    converterPortableText,
    createConverterTextHtml(legacySchema),
    createConverterTextPlain(legacySchema),
  ]
}

export function defineConverter(converter: any) {
  return converter
}

export function createConverterTextPlain(legacySchema: any) {
  return defineConverter({
    mimeType: "text/plain",
    serialize: ({ snapshot, event }: any) => {
      const selection = snapshot.context.selection

      if (!selection) {
        return {
          type: "serialization.failure",
          mimeType: "text/plain",
          originEvent: event.originEvent,
          reason: "No selection",
        }
      }

      const blocks = getSelectedValue(snapshot)

      const data = blocks
        .map((block: any) => {
          if (isTextBlock(snapshot.context, block)) {
            return block.children
              .map((child: any) => {
                if (child._type === snapshot.context.schema.span.name) {
                  return child.text
                }

                return event.originEvent === "drag.dragstart"
                  ? `[${
                      snapshot.context.schema.inlineObjects.find(
                        (inlineObjectType: any) => inlineObjectType.name === child._type,
                      )?.title ?? "Object"
                    }]`
                  : ""
              })
              .join("")
          }

          return event.originEvent === "drag.dragstart"
            ? `[${
                snapshot.context.schema.blockObjects.find(
                  (blockObjectType: any) => blockObjectType.name === block._type,
                )?.title ?? "Object"
              }]`
            : ""
        })
        .filter((block: any) => block !== "")
        .join("\n\n")

      return {
        type: "serialization.success",
        data,
        mimeType: "text/plain",
        originEvent: event.originEvent,
      }
    },
    deserialize: ({ snapshot, event }: any) => {
      const html = escapeHtml(event.data)
        .split(/\n{2,}/)
        .map((line) => (line ? `<p>${line.replace(/(?:\r\n|\r|\n)/g, "<br/>")}</p>` : "<p></p>"))
        .join("")

      const textToHtml = `<html><body>${html}</body></html>`

      const blocks: any = htmlToBlocks(textToHtml, legacySchema.portableText, {
        keyGenerator: snapshot.context.keyGenerator,
      })

      const parsedBlocks = blocks.flatMap((block: any) => {
        const parsedBlock = parseBlock({
          context: snapshot.context,
          block,
          options: {
            removeUnusedMarkDefs: true,
            validateFields: false,
          },
        })
        return parsedBlock ? [parsedBlock] : []
      })

      if (parsedBlocks.length === 0) {
        return {
          type: "deserialization.failure",
          mimeType: "text/plain",
          reason: "No blocks deserialized",
        }
      }

      return {
        type: "deserialization.success",
        data: parsedBlocks,
        mimeType: "text/plain",
      }
    },
  })
}

export const entityMap: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
  "`": "&#x60;",
  "=": "&#x3D;",
}

export function escapeHtml(str: string) {
  return String(str).replace(/[&<>"'`=/]/g, (s: string) => entityMap[s] as any)
}

export function createConverterTextHtml(legacySchema: any) {
  return defineConverter({
    mimeType: "text/html",
    serialize: ({ snapshot, event }: any) => {
      const selection = snapshot.context.selection

      if (!selection) {
        return {
          type: "serialization.failure",
          mimeType: "text/html",
          originEvent: event.originEvent,
          reason: "No selection",
        }
      }

      const blocks = getSelectedValue(snapshot)

      const html = toHTML(blocks, {
        onMissingComponent: false,
        components: {
          unknownType: ({ children }: any) => (children !== undefined ? `${children}` : ""),
        },
      })

      if (html === "") {
        return {
          type: "serialization.failure",
          mimeType: "text/html",
          originEvent: event.originEvent,
          reason: "Serialized HTML is empty",
        }
      }

      return {
        type: "serialization.success",
        data: html,
        mimeType: "text/html",
        originEvent: event.originEvent,
      }
    },
    deserialize: ({ snapshot, event }: any) => {
      const blocks = htmlToBlocks(event.data, legacySchema.portableText, {
        keyGenerator: snapshot.context.keyGenerator,
        unstable_whitespaceOnPasteMode: legacySchema.block.options.unstable_whitespaceOnPasteMode,
      }) as any

      const parsedBlocks = blocks.flatMap((block: any) => {
        const parsedBlock = parseBlock({
          context: snapshot.context,
          block,
          options: {
            removeUnusedMarkDefs: true,
            validateFields: false,
          },
        })
        return parsedBlock ? [parsedBlock] : []
      })

      if (parsedBlocks.length === 0) {
        return {
          type: "deserialization.failure",
          mimeType: "text/html",
          reason: "No blocks deserialized",
        }
      }

      return {
        type: "deserialization.success",
        data: parsedBlocks,
        mimeType: "text/html",
      }
    },
  })
}

export const converterPortableText = defineConverter({
  mimeType: 'application/x-portable-text',
  serialize: ({snapshot, event}: any) => {
    const selection = snapshot.context.selection

    if (!selection) {
      return {
        type: 'serialization.failure',
        mimeType: 'application/x-portable-text',
        originEvent: event.originEvent,
        reason: 'No selection',
      }
    }

    const blocks = getSelectedValue(snapshot)

    if (blocks.length === 0) {
      return {
        type: 'serialization.failure',
        mimeType: 'application/x-portable-text',
        reason: 'No blocks serialized',
        originEvent: event.originEvent,
      }
    }

    return {
      type: 'serialization.success',
      data: JSON.stringify(blocks),
      mimeType: 'application/x-portable-text',
      originEvent: event.originEvent,
    }
  },
  deserialize: ({snapshot, event}: any) => {
    const blocks = JSON.parse(event.data)

    if (!Array.isArray(blocks)) {
      return {
        type: 'deserialization.failure',
        mimeType: 'application/x-portable-text',
        reason: 'Data is not an array',
      }
    }

    const parsedBlocks = blocks.flatMap((block) => {
      const parsedBlock = parseBlock({
        context: snapshot.context,
        block,
        options: {
          removeUnusedMarkDefs: true,
          validateFields: false,
        },
      })
      return parsedBlock ? [parsedBlock] : []
    })

    if (parsedBlocks.length === 0 && blocks.length > 0) {
      return {
        type: 'deserialization.failure',
        mimeType: 'application/x-portable-text',
        reason: 'No blocks were parsed',
      }
    }

    return {
      type: 'deserialization.success',
      data: parsedBlocks,
      mimeType: 'application/x-portable-text',
    }
  },
})

export const converterJson = defineConverter({
  mimeType: 'application/json',
  serialize: ({snapshot, event}: any) => {
    const portableTextConverter = snapshot.context.converters.find(
      (converter: any) => converter.mimeType === 'application/x-portable-text',
    )

    if (!portableTextConverter) {
      return {
        type: 'serialization.failure',
        mimeType: 'application/json',
        originEvent: event.originEvent,
        reason: 'No application/x-portable-text Converter found',
      }
    }

    const serializationEvent = portableTextConverter.serialize({
      snapshot,
      event,
    })

    return {
      ...serializationEvent,
      mimeType: 'application/json',
      originEvent: event.originEvent,
    }
  },
  deserialize: ({snapshot, event}: any) => {
    const portableTextConverter = snapshot.context.converters.find(
      (converter: any) => converter.mimeType === 'application/x-portable-text',
    )

    if (!portableTextConverter) {
      return {
        type: 'deserialization.failure',
        mimeType: 'application/json',
        reason: 'No application/x-portable-text Converter found',
      }
    }

    const deserializationEvent = portableTextConverter.deserialize({
      snapshot,
      event,
    })

    return {
      ...deserializationEvent,
      mimeType: 'application/json',
    }
  },
})
