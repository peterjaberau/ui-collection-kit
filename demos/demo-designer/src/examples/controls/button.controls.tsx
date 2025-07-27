import React from "react"
import { Input, Select, Switch, FormItem } from "@ui-kit/forms"
import { createForm } from "@formily/core"
import { FormProvider, createSchemaField, useFieldSchema, FormConsumer } from "@formily/react"
import { schemaComponents } from "../../schema/schema.formily.uikit"
import { HStack, Box, Code, Stack, Button } from "@chakra-ui/react"

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
    Switch,
  },
})

const form = createForm()

export const ButtonControls = () => {
  return (
    <FormProvider form={form}>
      <HStack w="full" h="full" alignItems="start" gap={4}>
        <Box flex={1} w="full" h="full" p={4} borderRadius="md" shadow="md">
          <SchemaField schema={schemaComponents.Button} />
        </Box>
        <Stack flex={1} w="full" h="full" p={4} borderRadius="md" shadow="md">
          <Box>
            <FormConsumer>
              {(form) => <ComponentRenderer {...form.values} />}
            </FormConsumer>
          </Box>
          <Code flex={1} w="full" minH={"full"} p={4} borderRadius="md" shadow="md">
            <FormConsumer>{(form) => JSON.stringify(form.values, null, 2)}</FormConsumer>
          </Code>
        </Stack>
      </HStack>
    </FormProvider>
  )
}

export const ComponentRenderer = (props: any) => {
  return (
    <Button {...props}>
      {props.text || "Button"}
    </Button>
  )
}

export const ControlOutputComponent = () => {
  const schema = useFieldSchema()

  return <>{JSON.stringify(schema.toJSON(), null, 2)}</>
}
