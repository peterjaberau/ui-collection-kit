import { IconBrackets } from '../../display';
import { JsonNestedNode } from '../../json-visualizer/components/JsonNestedNode';
import { useJsonTreeContextOrThrow } from '../../json-visualizer/hooks/useJsonTreeContextOrThrow';
import { JsonNodeHighlighting } from '../../json-visualizer/types/JsonNodeHighlighting';
import { JsonArray } from "type-fest"

export const JsonArrayNode = ({
  label,
  value,
  depth,
  keyPath,
  highlighting,
}: {
  label?: string;
  value: JsonArray;
  depth: number;
  keyPath: string;
  highlighting: JsonNodeHighlighting | undefined;
}) => {
  const { emptyArrayLabel } = useJsonTreeContextOrThrow();

  return (
    <JsonNestedNode
      elements={[...value.entries()].map(([key, value]) => ({
        id: key,
        label: String(key),
        value,
      }))}
      renderElementsCount={(count) => `[${count}]`}
      label={label}
      Icon={IconBrackets}
      depth={depth}
      emptyElementsText={emptyArrayLabel}
      keyPath={keyPath}
      highlighting={highlighting}
    />
  );
};
