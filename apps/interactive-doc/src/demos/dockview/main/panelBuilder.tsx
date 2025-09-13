"use client"
import { DockviewApi } from "#dockview"
import { Button, HStack, Stack, Field, Input, Fieldset } from "@chakra-ui/react"
import * as React from "react"
import { nextId } from "./utils"
import { useDockApi } from "./hooks/useDockApi"

export const PanelBuilder = (props: { api: DockviewApi | any; done: () => void }) => {
  const [parameters, setParameters] = React.useState<any>({})
  return (
    <Fieldset.Root size="sm">
      <Fieldset.Content>
        <Field.Root>
          <Field.Label>Initial Width</Field.Label>
          <Input
            type="number"
            value={parameters.initialWidth}
            onChange={(event) =>
              setParameters((_: any) => ({
                ..._,
                initialWidth: Number(event.target.value),
              }))
            }
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Initial Height</Field.Label>
          <Input
            type="number"
            value={parameters.initialHeight}
            onChange={(event) =>
              setParameters((_: any) => ({
                ..._,
                initialHeight: Number(event.target.value),
              }))
            }
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Maximum Width</Field.Label>

          <Input
            type="number"
            value={parameters.maximumWidth}
            onChange={(event) =>
              setParameters((_: any) => ({
                ..._,
                maximumWidth: Number(event.target.value),
              }))
            }
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>{"Maximum Height"}</Field.Label>
          <Input
            type="number"
            value={parameters.maximumHeight}
            onChange={(event) =>
              setParameters((_: any) => ({
                ..._,
                maximumHeight: Number(event.target.value),
              }))
            }
          />
        </Field.Root>

        <Field.Root>
          <Field.Label>Minimum Width</Field.Label>
          <Input
            type="number"
            value={parameters.minimumWidth}
            onChange={(event) =>
              setParameters((_: any) => ({
                ..._,
                minimumWidth: Number(event.target.value),
              }))
            }
          />
        </Field.Root>

        <Field.Root>
          <Field.Label>Minimum Height</Field.Label>
          <Input
            type="number"
            value={parameters.minimumHeight}
            onChange={(event) =>
              setParameters((_: any) => ({
                ..._,
                minimumHeight: Number(event.target.value),
              }))
            }
          />
        </Field.Root>
      </Fieldset.Content>
      <HStack justifyContent="flex-end">
        <Button
          onClick={() => {
            props.done()
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            props.api?.addPanel({
              id: `id_${Date.now().toString()}`,
              component: "default",
              title: `Tab ${nextId()}`,
              renderer: "always",
              ...parameters,
            })

            props.done()
          }}
        >
          Go
        </Button>
      </HStack>
    </Fieldset.Root>
  )
}
