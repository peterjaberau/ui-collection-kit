import { IconCube } from '../../display';
import { JsonNestedNode } from '../../json-visualizer/components/JsonNestedNode';
import { useJsonTreeContextOrThrow } from '../../json-visualizer/hooks/useJsonTreeContextOrThrow';
import { JsonNodeHighlighting } from '../../json-visualizer/types/JsonNodeHighlighting';
import { JsonObject } from 'type-fest';

export const JsonObjectNode = ({
  label,
  value,
  depth,
  keyPath,
  highlighting,
}: {
  label?: string;
  value: JsonObject;
  depth: number;
  keyPath: string;
  highlighting: JsonNodeHighlighting | undefined;
}) => {
  const { emptyObjectLabel } = useJsonTreeContextOrThrow();

  return (
    <JsonNestedNode
      elements={Object.entries(value).map(([key, value]) => ({
        id: key,
        label: key,
        value,
      }))}
      renderElementsCount={(count) => `{${count}}`}
      label={label}
      Icon={IconCube}
      depth={depth}
      emptyElementsText={emptyObjectLabel}
      keyPath={keyPath}
      highlighting={highlighting}
    />
  );
};
