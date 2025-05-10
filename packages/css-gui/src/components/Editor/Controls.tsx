'use client'
import { produce } from "immer"
import { chakra, HStack, VStack, Box, IconButton, Container, Heading } from "@chakra-ui/react"
import { Children, ComponentType, Fragment, isValidElement, ReactNode, useMemo, useState } from "react"
import { camelCase, isNil, mapValues, uniq } from "lodash-es"
import { RefreshCw } from "react-feather"
import { Styles } from "../../types/css"
import { Theme } from "../../types/theme"
import { EditorProvider, useEditor } from "../providers/EditorContext"
import { useDynamicControls } from "../providers/DynamicPropertiesContext"
import { EditorData, KeyArg, Recipe } from "../providers/types"
import { GenericFieldset, useFieldset } from "./Fieldset"
import { joinPath } from "../providers/util"
import { properties } from "../../data/properties"
import { sentenceCase } from "../../lib/util"
import { useThemeProperty } from "../providers/ThemeContext"
import { UnitSteps } from "../../lib"
import { pascalCase } from "../../lib/util"
import { UnitRanges } from "../../data/ranges"
import { AddPropertyControl } from "../AddProperty"
import { getDefaultValue, isFieldsetGroup, partitionProperties, sortProperties } from "./util"
import { stylesToEditorSchema } from "../../lib/transformers/styles-to-editor-schema"
import { removeInternalCSSClassSyntax } from "../../lib/classes"
import { AddFieldsetControl } from "../AddFieldset"
// import IconButton from "../ui/IconButton"
import { SchemaInput } from "../inputs/SchemaInput"
import { EditorDropdown } from "../ui/dropdowns/EditorDropdown"
import { FieldsetDropdown } from "../ui/dropdowns/FieldsetDropdown"
import { tokenize } from "../../lib/parse"
import {
  addPseudoSyntax,
  getSelectorFunctionArgument,
  getSelectorFunctionName,
  isSelectorFunction,
  removePseudoSyntax,
  stringifySelectorFunction,
} from "../../lib/pseudos"

export const getPropertyFromField: any = (field: KeyArg) => {
  if (Array.isArray(field)) {
    return field[field.length - 1].toString()
  }

  return field.toString()
}

interface ControlProps extends InputProps {
  field: KeyArg
  showRemove?: boolean
}
const Control = ({ field, showRemove = false, ...props }: ControlProps) => {
  const { getField, getParentField, setField, removeField } = useEditor()
  const { removeDynamicProperty } = useDynamicControls()
  const fieldset = useFieldset()
  const property = getPropertyFromField(field)
  const themeValues = useThemeProperty(property)
  const dependantProperties = (properties[property] as any).dependantProperties ?? []

  const fieldsetName = fieldset?.name ?? null
  const fullField = fieldsetName ? joinPath(fieldsetName, field) : field
  const componentProps = { themeValues, ...props }

  if (dependantProperties.length) {
    return (
      <ComponentWithPropertyGroup
        dependantProperties={dependantProperties}
        property={property}
        fullField={fullField}
        showRemove
        {...componentProps}
      />
    )
  }

  const handleRemoveProperty = () => {
    if (removeDynamicProperty) {
      removeDynamicProperty(property)
    }
    removeField(fullField)
  }

  const schema: any = properties[property]

  if (schema.type === "none") {
    return null
  }

  return (
    <SchemaInput
      label={sentenceCase(property)}
      schema={schema}
      {...props}
      value={getField(fullField)}
      onChange={(newValue: any) => {
        setField(fullField, newValue)
      }}
      onRemove={showRemove ? handleRemoveProperty : undefined}
      ruleset={getParentField(fullField)}
      property={property}
    />
  )
}

interface ComponentGroupProps {
  dependantProperties: string[]
  property: string
  fullField: KeyArg
  showRemove: boolean
}
const ComponentWithPropertyGroup = ({
  dependantProperties,
  property,
  fullField,
  showRemove = false,
  ...props
}: ComponentGroupProps) => {
  const Component: ComponentType<any> | undefined = getInputComponent(property)
  const { getFields, setFields, removeField } = useEditor()
  if (!Component) {
    console.error(`Unknown field: ${property}, ignoring`)
    return null
  }

  return (
    <Component
      value={getFields([...dependantProperties, property])}
      onChange={(newValue: any) => setFields(newValue, dependantProperties)}
      onRemove={showRemove ? () => removeField(fullField) : null}
      {...props}
    />
  )
}

type InputProps = {
  label?: string
  steps?: UnitSteps
  range?: UnitRanges
}
export const Inputs: Record<string, any> = {}
Object.keys(properties).forEach((field: string) => {
  const Component = (props: InputProps) => <Control {...props} field={field} />
  Component.displayName = pascalCase(field)
  Inputs[pascalCase(field)] = Component
})

interface ControlsProps {
  styles: Styles
  theme?: Theme
  onChange: (newStyles: any) => void
  children?: ReactNode
  hideResponsiveControls?: boolean
  showRegenerate?: boolean
  showAddProperties?: boolean
}
export const Editor = ({
  theme,
  styles,
  onChange,
  children,
  showRegenerate,
  hideResponsiveControls,
  showAddProperties,
}: ControlsProps) => {
  const handleStylesChange: any = (recipe: Recipe | any) => {
    const newData = produce(stylesToEditorSchema(styles), (draft: any) => {
      const valueData: EditorData | any = {
        value: draft,
      }

      // @ts-ignore
      recipe(valueData)
      draft = valueData as any
    })

    onChange(newData)
  }

  const propertyList = useMemo(() => {
    return getPropertiesFromChildren(children)
  }, [children])

  const defaultStyles = useMemo(() => {
    return Object.fromEntries(
      propertyList
        .filter((property) => !(styles as any)[property])
        .map((property) => {
          return [property, getDefaultValue(property)]
        }),
    )
  }, [propertyList])

  const allStyles: any = { ...defaultStyles, ...styles }

  function regenerateAll(): any {
    return mapValues(allStyles, (value, property) => {
      return (
        properties[property].regenerate?.({
          theme,
          previousValue: value,
          ruleset: allStyles,
          property,
        }) ?? value
      )
    })
  }

  return (
    <EditorProvider
      theme={theme}
      value={allStyles}
      onChange={handleStylesChange}
      hideResponsiveControls={hideResponsiveControls}
    >
      {showRegenerate && (
        <HStack>
          <IconButton onClick={() => onChange(regenerateAll())} size="2xs">
            <RefreshCw size={15} />
          </IconButton>
        </HStack>
      )}
      <EditorControls showAddProperties={showAddProperties}>{children}</EditorControls>
    </EditorProvider>
  )
}

interface EditorControlsProps {
  children?: ReactNode
  showAddProperties?: boolean
}
export const EditorControls = ({ children, showAddProperties }: EditorControlsProps) => {
  const { value: styles, clearAll }: any = useEditor()
  const [fieldsets, properties] = partitionProperties(uniq(Object.keys(styles)))
  const controls = children ? children : <ControlSet properties={sortProperties(properties)} />

  const fieldsetControls = children ? null : <ControlSet properties={sortProperties(fieldsets)} />

  return (
    <Container pb={5}>
      {showAddProperties ? (
        <HStack
          alignItems="flex-end"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="border"
          borderRadius="6px"
          p={3}
          my={3}
        >
          <Box width="100%">
            <AddPropertyControl styles={styles} />
          </Box>
          <Box width={32} flexShrink={0}>
            <EditorDropdown onClearStyles={clearAll} />
          </Box>
        </HStack>
      ) : null}
      {controls}
      {showAddProperties ? (
        <Box py={4}>
          <AddFieldsetControl styles={styles} />
        </Box>
      ) : null}
      {fieldsetControls}
      {children ? <DynamicControls /> : null}
    </Container>
  )
}

const DynamicControls = () => {
  const { dynamicProperties } = useDynamicControls()

  return dynamicProperties?.length ? <ControlSet properties={dynamicProperties} /> : null
}

type ControlSetProps = {
  field?: KeyArg
  properties: string[]
}
const ControlSet = ({ field, properties }: ControlSetProps) => {
  return (
    <VStack>
      {properties.map((property) => {
        const fullField = field ? joinPath(field, property) : property

        return isFieldsetGroup(property) ? (
          <FieldsetControl key={property} field={property} />
        ) : (
          <Control key={property} field={fullField} showRemove />
        )
      })}
    </VStack>
  )
}

type FieldsetControlProps = {
  field: string
}
const FieldsetControl = ({ field }: FieldsetControlProps) => {
  const { getField, removeField, setFields } = useEditor()
  const [argument, setArgument] = useState(getSelectorFunctionArgument(field))

  const styles = getField(field)
  const properties = Object.keys(styles)
  const label = addPseudoSyntax(field)
  const rawFieldsetName = getSelectorFunctionName(field)

  return (
    <Container
      borderTopWidth="1px"
      borderTopColor="border"
      borderTopStyle="solid"
    >
      <HStack alignItems="center" justifyContent="space-between" mb={2} mt={3}>
        <chakra.h3
          css={{
            mt: 0,
            fontSize: 1,
            lineHeight: 1,
            mb: 0,
          }}
        >
          {rawFieldsetName}
          {isSelectorFunction(rawFieldsetName) ? (
            <>
              {"("}
              <chakra.input
                value={argument}
                css={{
                  width: 64,
                }}
                onChange={(e) => {
                  setArgument(e.target.value)
                }}
                onBlur={() => {
                  setFields(
                    {
                      [stringifySelectorFunction(rawFieldsetName, argument)]: styles,
                    },
                    [field],
                  )
                }}
              />
              {")"}
            </>
          ) : null}
        </chakra.h3>
        <FieldsetDropdown onRemove={() => removeField(field)} />
      </HStack>
      <GenericFieldset field={field}>
        <Box mb={3} p={3} borderWidth="1px" borderStyle="solid" borderColor="border" borderRadius="6px">
          <AddPropertyControl field={field} styles={styles} label={`Add property to ${label}`} />
        </Box>
        <ControlSet properties={properties} />
      </GenericFieldset>
    </Container>
  )
}

function getInputComponent(property: string) {
  const propertyData = properties[property]
  return propertyData.input
}

/**
 * Extract the properties from the editor's children
 */
function getPropertiesFromChildren(children: ReactNode): string[] {
  // Based on: https://github.com/remix-run/react-router/blob/main/packages/react-router/lib/components.tsx#L270
  let properties: string[] = []
  Children.forEach(children, (element: any): any => {
    if (!isValidElement(element)) {
      return
    }
    if (element.type === Fragment) {
      properties = [...properties, ...getPropertiesFromChildren((element.props as any).children)]
    }
    // TODO defaults on nested fields
    if (typeof element.type === "function" && (element.type as any).displayName) {
      const property = camelCase((element.type as any).displayName)
      properties = [...properties, property]
    }
    if ((element.props as any).children) {
      properties = [...properties, ...getPropertiesFromChildren((element.props as any).children)]
    }
  })
  return properties
}

export function parseStyles(styles: Record<string, any>) {
  return mapValues(styles, (value, property) => {
    const schema = properties[property]
    if (!schema) {
      throw new Error(`Parsing unknown property: ${property}`)
    }

    const [parsed, rest] = schema.parse!(tokenize(value))
    if (isNil(parsed) || rest.length > 0) {
      throw new Error(`Error parsing given value ${value} into ${property}`)
    }
    return parsed
  })
}
