import { JsonNodeHighlighting } from './JsonNodeHighlighting';

export type GetJsonNodeHighlighting = (
  keyPath: string,
) => JsonNodeHighlighting | undefined;
