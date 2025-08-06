import { Center, CodeBlock, createShikiAdapter, Separator } from "@chakra-ui/react"
import type { HighlighterGeneric } from "shiki"
import { FormConsumer } from "@formily/react"
import React from "react"
// import { ComponentRenderer } from "./decorators"

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki")
    return createHighlighter({
      langs: ["tsx", "json"],
      themes: ["github-dark", "github-light"],
    })
  },
})


export const DecoratorConsumer = ({render}) => {

  return (
    <FormConsumer>
      {(form: any) => (
        <>
          <Center
            css={{
              flex: 1,
            }}
          >
            {/*<ComponentRenderer {...form.values} />*/}

            {render(form.values)}
          </Center>

          <Separator />
          <CodeBlock.AdapterProvider value={shikiAdapter}>
            <CodeBlock.Root
              css={{
                flex: 1,
                p: 4,
                alignItems: "flex-start",
              }}
              code={JSON.stringify(form.values, null, 2)}
              language="json"
            >
              <CodeBlock.Content>
                <CodeBlock.Code>
                  <CodeBlock.CodeText />
                </CodeBlock.Code>
              </CodeBlock.Content>
            </CodeBlock.Root>
          </CodeBlock.AdapterProvider>
        </>
      )}
    </FormConsumer>
  )

}
