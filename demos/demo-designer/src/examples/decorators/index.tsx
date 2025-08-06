import React from "react"
import { createForm } from "@formily/core"
import { FormProvider } from "@formily/react"
import { SimpleGrid, Stack } from "@chakra-ui/react"
import { DecoratorController } from "./decorator.controller"
import { DecoratorConsumer } from "./decorator.consumer"

const form = createForm()


export const DecoratorRenderer = ({
  component: Component,
  schema,
}: {
  component: React.ComponentType<any>
  schema: any
}) => {
  return (
    <FormProvider form={form}>
      <SimpleGrid w="full" h="full" minH='800px' columns={2} gap={4}>
        <BoxWrapper>
          <DecoratorController schema={schema} />
        </BoxWrapper>

        <BoxWrapper>
          <DecoratorConsumer render={(values: any) => <Component {...values} />} />
        </BoxWrapper>
      </SimpleGrid>
    </FormProvider>
  )
}

export const BoxWrapper = ({ children }: any) => {
  return (
    <Stack
      css={{
        shadow: "md",
        borderRadius: "md",
        p: 4,
      }}
    >
      {children}
    </Stack>
  )
}
