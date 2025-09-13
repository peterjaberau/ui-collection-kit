"use client"
import "./globals.css"
import { Box, Button, SimpleGrid } from "@chakra-ui/react"
import { useCallback, useEffect } from "react"
import copy from "copy-text-to-clipboard"
import TransformStep from "./components/TransformStep"
import { validateTransformers } from "./lib/validators"
import { generateOutput } from "./lib/output-generator"
import { steps } from "./data/steps"
import { inputExample, transformersExample } from "./data/examples"
import useEditorState from "./hooks/useEditorState"
import { useJsonataRoot } from "./actors/hooks/useJsonataRoot"

export const JsonataApp = () => {

  const { sendToJsonataRoot } = useJsonataRoot()


  const [inputJson, setInputJson, inputJsonRef] = useEditorState(inputExample)
  const [transformers, setTransformers, transformersRef, transformersErrors, setTransformersErrors] =
    useEditorState(transformersExample)

  const [generatedOutput, setGenerateOut] = useEditorState()
  const [transformersEditor, setTransformersEditor, transformersEditorRef] = useEditorState()

  transformersEditorRef.current = transformersEditor

  const copyToClipboard = (message: string, payload: any) => {
    copy(payload)
  }

  const validateTransformersEditor = useCallback(
    async ({ input, transformers }: { input?: any; transformers?: any }) => {
      const { editor, monaco } = transformersEditorRef.current

      const errors = await validateTransformers(
        input || inputJsonRef.current,
        transformers || transformersRef.current,
        editor,
      )
      const model = editor.getModel()
      monaco.editor.setModelMarkers(model, "Example", errors)
      setTransformersErrors(errors)
    },
    [inputJsonRef, transformersEditorRef, transformersRef, setTransformersErrors],
  )

  const generateEditorOutput = useCallback(async () => {
    const output = await generateOutput(inputJsonRef.current, transformersRef.current)
    setGenerateOut(output)
  }, [inputJsonRef, transformersRef, setGenerateOut])

  // Try to generate output if any values change in the flow
  useEffect(() => {
    try {
      if (transformers) {
        generateEditorOutput().catch(() => {})
      }
    } catch (error) {}
  }, [inputJson, generateEditorOutput, transformers])

  // If things are empty then clear editors
  useEffect(() => {
    if (!inputJson) {
      setTransformers(null)
      setGenerateOut(null)
    }
  }, [inputJson, transformers, setGenerateOut, setTransformers])

  const outPutErrorMessage =
    transformersErrors.length > 0 ? "Failed to render output. Please fix the transformers errors" : ""

  return (
    <Box bg={"bg.panel"}>
      <Box>
        <Button onClick={() => sendToJsonataRoot({ type: "execute" })}>Execute</Button>
        <SimpleGrid columns={3}>
          <TransformStep
            id="input"
            color="blue"
            title={<>Input JSON &rarr;</>}
            subtitle="Your source JSON you want to transform."
            value={inputJson}
            onCopy={(value) => copyToClipboard("Input JSON", JSON.stringify(value, null, 4))}
            onChange={(value: any) => {
              try {
                const input = value ? JSON.parse(value) : null
                setInputJson(input)
                if (input) {
                  validateTransformersEditor({ input }).catch(() => {})
                }
              } catch (error) {}
            }}
            renderEditorWhenEmpty
          />
          <TransformStep
            id="transformers"
            color="orange"
            title={<>Transformers &rarr;</>}
            subtitle="Define transformations."
            value={transformers}
            onCopy={(value) => copyToClipboard("Transformers", JSON.stringify(value, null, 4))}
            errors={transformersErrors}
            onInit={(editor, monaco) => {
              setTransformersEditor({ editor, monaco })
            }}
            onChange={(value: any) => {
              try {
                const transformers = value ? JSON.parse(value || {}) : null
                setTransformers(transformers)
                if (transformers) {
                  validateTransformersEditor({ transformers }).catch(() => {})
                }
              } catch (error) {}
            }}
            renderEditorWhenEmpty
          />
          <TransformStep
            id="output"
            color="green"
            title={<>Output</>}
            subtitle="Output based on your transformation rules."
            value={generatedOutput}
            onCopy={(value) => copyToClipboard("Output JSON", JSON.stringify(value, null, 4))}
            errors={[]}
            errorOverLayMessage={outPutErrorMessage}
            readOnly
            renderEditorWhenEmpty
          />
        </SimpleGrid>
      </Box>
    </Box>
  )
}
