"use client"
import { ArrayField } from "@formily/core"
import { ISchema, observer, ReactFC, RecursionField, useField, useFieldSchema } from "@formily/react"
import { toArr } from "@formily/shared"
import React, { Fragment, useEffect, useState } from "react"
import ArrayBase from "../array-base"
import { Accordion, Box, HStack, Stack, Float, EmptyState, Badge } from "@chakra-ui/react"
import { LuFolder } from "react-icons/lu"

export interface IArrayCollapseProps {
  defaultOpenPanelCount?: number
  [key: string]: any
}

const isAdditionComponent = (schema: ISchema) => {
  return schema["x-component"]?.indexOf?.("Addition") > -1
}

const isIndexComponent = (schema: ISchema) => {
  return schema["x-component"]?.indexOf?.("Index") > -1
}

const isRemoveComponent = (schema: ISchema) => {
  return schema["x-component"]?.indexOf?.("Remove") > -1
}

const isMoveUpComponent = (schema: ISchema) => {
  return schema["x-component"]?.indexOf?.("MoveUp") > -1
}

const isMoveDownComponent = (schema: ISchema) => {
  return schema["x-component"]?.indexOf?.("MoveDown") > -1
}

const isOperationComponent = (schema: ISchema) => {
  return (
    isAdditionComponent(schema) || isRemoveComponent(schema) || isMoveDownComponent(schema) || isMoveUpComponent(schema)
  )
}

const range = (count: number) => Array.from({ length: count }).map((_, i) => i)

const takeDefaultActiveKeys = (dataSourceLength: number, defaultOpenPanelCount: number) => {
  if (dataSourceLength < defaultOpenPanelCount) return range(dataSourceLength)
  return range(defaultOpenPanelCount)
}

const takeDefaultActiveValues = (dataSourceLength: number, defaultOpenPanelCount: number) => {
  if (dataSourceLength < defaultOpenPanelCount) return range(dataSourceLength)
  return range(defaultOpenPanelCount)
}

const insertActiveKeys = (activeKeys: number[], index: number) => {
  if (activeKeys.length <= index) return activeKeys.concat(index)
  return activeKeys.reduce<number[]>((buf, key) => {
    if (key < index) return buf.concat(key)
    if (key === index) return buf.concat([key, key + 1])
    return buf.concat(key + 1)
  }, [])
}

const InternalArrayCollapse: ReactFC<IArrayCollapseProps> = observer((props: IArrayCollapseProps) => {
  const field = useField<ArrayField>()
  const dataSource = Array.isArray(field.value) ? field.value : []
  const [activeKeys, setActiveKeys] = useState<number[] | string[]>(
    takeDefaultActiveKeys(dataSource.length, props.defaultOpenPanelCount ?? 5),
  )
  const [activeValues, setActiveValues] = useState<string[]>(
    // @ts-ignore
    takeDefaultActiveValues(dataSource.length, props.defaultOpenPanelCount ?? 5),
  )

  const schema = useFieldSchema()

  useEffect(() => {
    if (!field.modified && dataSource.length) {
      setActiveKeys(takeDefaultActiveKeys(dataSource.length, props.defaultOpenPanelCount ?? 5))
    }
  }, [dataSource.length, field])
  if (!schema) throw new Error("can not found schema object")

  const renderAddition = () => {
    return schema.reduceProperties((addition, schema, key) => {
      if (isAdditionComponent(schema)) {
        return <RecursionField schema={schema} name={key} />
      }
      return addition
    }, null)
  }
  const renderEmpty = () => {
    if (dataSource.length) return
    return (
      <>
        <EmptyState.Root>
          <EmptyState.Content>
            <EmptyState.Indicator>
              <LuFolder />
            </EmptyState.Indicator>
            <Stack textAlign="center">
              <EmptyState.Title>No data found.</EmptyState.Title>
              <EmptyState.Description>Please add some data to get started.</EmptyState.Description>
            </Stack>
          </EmptyState.Content>
        </EmptyState.Root>
      </>
    )
  }

  const renderItems = () => {
    return (
      <Accordion.Root
        multiple={true}
        collapsible={true}
        variant="enclosed"
        orientation="vertical"
        value={activeKeys.map(String)}
        onValueChange={(e) => {
          setActiveKeys(toArr(e.value).map(String))
        }}
      >
        {dataSource.map((item, index) => {
          const items = Array.isArray(schema.items) ? schema.items[index] || schema.items[0] : schema.items

          if (!items) return null
          const panelProps = field.query(`${field.address}.${index}`).get("componentProps")
          const props: any = items["x-component-props"]
          const header = () => {
            const header = panelProps?.header || props.header || field.title

            const path = field.address.concat(index)
            const errors = field.form.queryFeedbacks({
              type: "error",
              address: `${path}.**`,
            })

            return (
              <ArrayBase.Item index={index} record={() => field.value?.[index]}>
                <RecursionField
                  schema={items}
                  name={index}
                  filterProperties={(schema) => {
                    if (!isIndexComponent(schema)) return false
                    return true
                  }}
                  onlyRenderProperties
                />
                {errors.length ? (
                  <Box position="relative">
                    {header}
                    <Float placement={"top-end"} offsetX={-3} offsetY={2}>
                      <Badge size="sm" bg="red" color="white" borderRadius="full">
                        {errors.length}
                      </Badge>
                    </Float>
                  </Box>
                ) : (
                  header
                )}
              </ArrayBase.Item>
            )
          }

          const extra = (
            <ArrayBase.Item index={index} record={item}>
              {panelProps?.extra}
              <RecursionField
                schema={items}
                name={index}
                filterProperties={(schema) => {
                  if (!isOperationComponent(schema)) return false
                  return true
                }}
                onlyRenderProperties
              />
            </ArrayBase.Item>
          )

          const content = (
            <RecursionField
              schema={items}
              name={index}
              filterProperties={(schema) => {
                if (isIndexComponent(schema)) return false
                if (isOperationComponent(schema)) return false
                return true
              }}
            />
          )
          return (
            <Accordion.Item key={index} value={String(index)}>
              <HStack w="full" px={4}>
                <Accordion.ItemTrigger px={0}>
                  <HStack flex={1}>{header()}</HStack>
                </Accordion.ItemTrigger>
                <HStack>
                  {extra}
                  <Accordion.ItemIndicator />
                </HStack>
              </HStack>

              <Accordion.ItemContent>
                <Accordion.ItemBody>
                  <ArrayBase.Item index={index} key={index} record={item}>
                    {content}
                  </ArrayBase.Item>
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          )
        })}
      </Accordion.Root>
    )
  }
  return (
    <ArrayBase
      onAdd={(index) => {
        // @ts-ignore
        setActiveKeys(insertActiveKeys(activeKeys, index))
      }}
    >
      <Stack w="full">
        {renderEmpty()}
        {renderItems()}
        {renderAddition()}
      </Stack>
    </ArrayBase>
  )
})

const CollapsePanel: React.FC<any> = ({ children }) => {
  return <Fragment>{children}</Fragment>
}

CollapsePanel.displayName = "CollapsePanel"

export const ArrayCollapse = Object.assign(ArrayBase.mixin(InternalArrayCollapse), {
  CollapsePanel,
})
ArrayCollapse.displayName = "ArrayCollapse"

export default ArrayCollapse
