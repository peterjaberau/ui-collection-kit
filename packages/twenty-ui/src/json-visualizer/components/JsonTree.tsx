import { JsonList } from '../../json-visualizer/components/internal/JsonList';
import { JsonNode } from '../../json-visualizer/components/JsonNode';
import { JsonTreeContextProvider } from '../../json-visualizer/components/JsonTreeContextProvider';
import { ShouldExpandNodeInitiallyProps } from '../../json-visualizer/contexts/JsonTreeContext';
import { GetJsonNodeHighlighting } from '../../json-visualizer/types/GetJsonNodeHighlighting';
import { JsonValue } from 'type-fest';

export const JsonTree = ({
  value,
  getNodeHighlighting,
  shouldExpandNodeInitially,
  emptyArrayLabel,
  emptyObjectLabel,
  emptyStringLabel,
  arrowButtonCollapsedLabel,
  arrowButtonExpandedLabel,
  onNodeValueClick,
}: {
  value: JsonValue;
  getNodeHighlighting?: GetJsonNodeHighlighting;
  shouldExpandNodeInitially: (
    params: ShouldExpandNodeInitiallyProps,
  ) => boolean;
  emptyArrayLabel: string;
  emptyObjectLabel: string;
  emptyStringLabel: string;
  arrowButtonCollapsedLabel: string;
  arrowButtonExpandedLabel: string;
  onNodeValueClick?: (valueAsString: string) => void;
}) => {
  return (
    <JsonTreeContextProvider
      value={{
        getNodeHighlighting,
        shouldExpandNodeInitially,
        emptyArrayLabel,
        emptyObjectLabel,
        emptyStringLabel,
        arrowButtonCollapsedLabel,
        arrowButtonExpandedLabel,
        onNodeValueClick,
      }}
    >
      <JsonList depth={0}>
        <JsonNode value={value} depth={0} keyPath="" />
      </JsonList>
    </JsonTreeContextProvider>
  );
};
