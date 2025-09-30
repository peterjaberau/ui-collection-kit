"use client"
import { useState } from "react"
import BaseInputEditor from "./BaseInputEditor"
import { getFromMock } from "#app/common/state-actors/mock"
import { VALIDATION_TYPES } from "./utils"
import { useRootStore } from "./store"
import { componentsSelector, executionSelector, configSelector } from "#state-actors"
import { Container, SimpleGrid, GridItem, Field } from "@chakra-ui/react"
import JsonView from "react18-json-view"

const scope = {
  component: "txt_left_summary",
  attribute: "value",
}

export default function Page() {
  // using actor model
  const [localActorModelEvent, setLocalActorModelEvent]: any = useState(null)
  const { componentsContext } = componentsSelector()
  const { configContext } = configSelector()
  const { executionContext } = executionSelector()

  const selectComponents = configContext.selectedComponents
  const selectedComponent = componentsContext[scope.component]
  const selectedComponentExecutionResult = executionContext.result[scope.component]

  const [val, setVal] = useState(selectedComponent.props[scope.attribute])
  const handleUpdateActorModelDsl: any = (attrPath: string, value: unknown) => {
    const updateSlice = { [attrPath]: value }

    setLocalActorModelEvent({
      action: 'updateComponentPropsReducer',
      payload: {
        displayName: scope.component,
        updateSlice,
      },
    })


    // rootStore.trigger.updateComponentPropsReducer({
    //   payload: {
    //     displayName: scope.component,
    //     updateSlice,
    //   },
    // })
  }
  const onChangeEvent: any = (event: any) => {
    const { attrName, value } = event
    handleUpdateActorModelDsl(attrName, value)
  }

  // using xstate store
  const [rootContext, rootStore]: any = useRootStore((s: any) => s.context)
  const [localStateEvent, setLocalStateEvent]: any = useState(null)

  const selectedWidgets = rootContext.config.selectedComponents
  const selectedWidget = rootContext.currentApp.components[scope.component]
  const selectedWidgetResult = rootContext.currentApp.execution.result[scope.component]

  const [value, setValue] = useState(selectedWidget.props[scope.attribute])

  const handleUpdateDsl: any = (attrPath: string, value: unknown) => {
    const updateSlice = { [attrPath]: value }

    setLocalStateEvent({
      action: 'updateComponentPropsReducer',
      payload: {
        displayName: scope.component,
        updateSlice,
      },
    })

    rootStore.trigger.updateComponentPropsReducer({
      payload: {
        displayName: scope.component,
        updateSlice,
      },
    })
  }
  const onChange: any = (event: any) => {
    const { attrName, value } = event
    setLocalStateEvent(event)
    handleUpdateDsl(attrName, value)
  }

  return (
    <>
      <Container p={4} boxShadow={"sm"}>
        <SimpleGrid columns={2} gap={4}>
          <GridItem>
            <SimpleGrid columns={1}>
              <GridItem>
                <JsonView
                  src={localStateEvent}
                  collapsed={3}
                  theme="github"
                  displaySize
                  displayArrayIndex
                  style={{ fontSize: 13, fontWeight: "bold" }}
                />
              </GridItem>
              <GridItem>
                <Field.Root>
                  <Field.Label>using state store</Field.Label>
                  <BaseInputEditor
                    isSetterSingleRow={true}
                    onlyHasSetter={false}
                    attrName={scope.attribute}
                    expectedType={"String" as any}
                    value={selectedWidget.props[scope.attribute]}
                    widgetDisplayName={selectedWidget.displayName}
                    widgetType={selectedWidget.type}
                    // handleUpdateDsl={handleUpdateDsl}
                    onChange={onChange}

                    // scopeOfAutoComplete="global"
                    // canShowCompleteInfo={true}
                    // showLineNumbers={false}
                    // placeholder="add code here"
                    // lang={"javascript"}
                    // maxHeight="208px"
                    // maxWidth="100%"
                    // codeType={"EXPRESSION"}
                  />
                </Field.Root>
              </GridItem>
            </SimpleGrid>
          </GridItem>
          <GridItem>
            <SimpleGrid>
              <GridItem>
                <JsonView
                  src={localActorModelEvent}
                  collapsed={3}
                  theme="github"
                  displaySize
                  displayArrayIndex
                  style={{ fontSize: 13, fontWeight: "bold" }}
                />
              </GridItem>
              <GridItem>
                <Field.Root>
                  <Field.Label>using actor model</Field.Label>
                  <BaseInputEditor
                    isSetterSingleRow={true}
                    onlyHasSetter={false}
                    attrName={scope.attribute}
                    expectedType={"String" as any}
                    value={selectedComponent.props[scope.attribute]}
                    widgetDisplayName={selectedComponent.displayName}
                    widgetType={selectedComponent.type}
                    // handleUpdateDsl={handleUpdateDsl}
                    onChange={onChangeEvent}

                    // scopeOfAutoComplete="global"
                    // canShowCompleteInfo={true}
                    // showLineNumbers={false}
                    // placeholder="add code here"
                    // lang={"javascript"}
                    // maxHeight="208px"
                    // maxWidth="100%"
                    // codeType={"EXPRESSION"}
                  />
                </Field.Root>
              </GridItem>
            </SimpleGrid>
          </GridItem>
        </SimpleGrid>
      </Container>
    </>
  )
}
