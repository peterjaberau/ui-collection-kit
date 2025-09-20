"use client"

import { Button, NativeSelect, Field, HStack, Box, IconButton } from "@chakra-ui/react" // Assuming Chakra UI
import { useJsonata } from "./JsonataProvider"
import { FaSave } from "react-icons/fa"

export function Configurator() {
  const { datasets, expressionSets, activeDatasetKey, activeExpressionSetKey, send } = useJsonata()

  const activeExpressions = activeExpressionSetKey ? expressionSets[activeExpressionSetKey] : {}

  return (
    <HStack alignItems={"end"}>
      {/* Dataset Selector */}
      <Field.Root>
        <Field.Label>Dataset</Field.Label>
        <NativeSelect.Root size="sm">
          <NativeSelect.Field
            placeholder={"Select a dataset"}
            value={activeDatasetKey}
            onChange={(e: any) => send({ type: "SELECT_DATASET", key: e.target.value })}
          >
            {Object.keys(datasets).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      </Field.Root>

      <IconButton
        aria-label="Save Dataset"
        size="sm"
        onClick={() => send({ type: "SAVE_ACTIVE_DATASET" })}
        disabled={!activeDatasetKey}
      >
        <FaSave />
      </IconButton>

      {/* Expression Set Selector */}
      <Field.Root>
        <Field.Label>Expression Set</Field.Label>
        <NativeSelect.Root
          size="sm"
          // value={activeExpressionSetKey || ''}
        >
          <NativeSelect.Field
            placeholder={"Select a set"}
            value={activeExpressionSetKey}
            onChange={(e: any) => send({ type: "SELECT_EXPRESSION_SET", key: e.target.value })}
          >
            {Object.keys(expressionSets).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      </Field.Root>

      {/* Expression Loader */}
      {activeExpressionSetKey && (
        <Field.Root>
          <Field.Label>Load Expression</Field.Label>
          <NativeSelect.Root size="sm">
            <NativeSelect.Field
              placeholder={"Select an expression"}
              onChange={(e: any) => send({ type: "LOAD_EXPRESSION", key: e.target.value })}
            >
              {Object.entries(activeExpressions).map(([key, value]: any) => (
                <option key={key} value={key}>
                  {value.name}
                </option>
              ))}
            </NativeSelect.Field>
          </NativeSelect.Root>
        </Field.Root>
      )}
    </HStack>
  )
}
