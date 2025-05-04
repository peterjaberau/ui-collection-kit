import { ajvResolver } from '@hookform/resolvers/ajv'
import { objectFieldResolver } from "../components"
import { JSONSchemaType } from 'ajv'

export { ajvResolver }

export const ajvFieldResolver = (schema: JSONSchemaType<unknown>) => {
  return objectFieldResolver(schema.properties)
}
