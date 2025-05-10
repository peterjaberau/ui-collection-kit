'use client'
import * as React from 'react'
import { kebabCase } from 'lodash-es'
import { useCombobox } from 'downshift'
import { FontFamilyType } from '../../../types/css'
import { EditorProps } from '../../../types/editor'
import { Label } from '../../primitives'
import { NumberInput } from '../NumberInput'
import { DeletePropButton } from '../Dimension/Input'
import { useEditor } from '../../providers/EditorContext'

type Font = {
  name: string
  category: FontCategory
}
type VariableFont = Record<string, VariableAttribute | string>
type VariableAttribute = {
  min: number
  max: number
  default: number
  step: number
}
const enum FontCategory {
  Sans = 'sans-serif',
  Mono = 'monospace',
  Serif = 'serif',
  Display = 'display',
  Handwriting = 'handwriting',
}
const nameMap: any = {
  opsz: 'Optical Size',
  CASL: 'Casual',
  CRSV: 'Cursive',
  MONO: 'Mono',
  slnt: 'Slant',
  wdth: 'Width',
  wght: 'Weight',
}

interface Props extends EditorProps<FontFamilyType> {
  label: string
  defaultValue?: FontFamilyType
}

export function FontFamilyInput({ label, value, onChange, onRemove }: Props) {
  const { theme } = useEditor()
  const id = React.useId()
  const fullId = `${id}-${label ? kebabCase(label) : 'font-family'}`

  const [allOptions, setAllOptions] = React.useState<Font[]>([])
  const [inputItems, setInputItems] = React.useState<string[]>([])
  const [variableFont, setVariableFont] = React.useState<
    VariableFont | undefined
  >()
  const [variableFontsData, setVariableFontsData] = React.useState<any>({})

  const inputRef = React.useRef(null)

  React.useEffect(() => {
    const getFontData = async () => {
      const fontData = await getFontsData()
      const fontFamily = value?.fontFamily || ''

      setAllOptions(fontData?.fontOptions)
      setVariableFontsData(fontData?.variableFontsData)
      setVariableFont(fontData.variableFontsData[fontFamily])

      handleFilterItems(fontFamily)
    }

    getFontData()
  }, [])

  const themeFonts = Object.keys(theme.fonts || {})
  const [includeSans, setIncSans] = React.useState<boolean>(true)
  const [includeSerif, setIncSerif] = React.useState<boolean>(true)
  const [includeMono, setIncMono] = React.useState<boolean>(true)
  const [includeDisplay, setIncDisplay] = React.useState<boolean>(true)
  const [includeHandwriting, setIncHandwriting] = React.useState<boolean>(true)

  React.useEffect(() => {
    handleFilterItems(value.fontFamily)
  }, [
    includeMono,
    includeSans,
    includeSerif,
    includeDisplay,
    includeHandwriting,
  ])

  const {
    isOpen,
    toggleMenu,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    id: fullId,
    items: inputItems,
    selectedItem: value.fontFamily,
    onInputValueChange: ({ inputValue }) => {
      handleFilterItems(inputValue!)
    },
    onSelectedItemChange: ({ selectedItem }) => {
      handleFontChange(selectedItem ?? '')
    },
  })

  const handleFilterItems = (inputValue: string) => {
    const filteredOptions = allOptions.filter((item) => {
      if (item.name.toLowerCase().startsWith(inputValue?.toLowerCase() || '')) {
        return (
          (includeSans && item.category === FontCategory.Sans) ||
          (includeSerif && item.category === FontCategory.Serif) ||
          (includeMono && item.category === FontCategory.Mono) ||
          (includeDisplay && item.category === FontCategory.Display) ||
          (includeHandwriting && item.category === FontCategory.Handwriting)
        )
      }
    })

    const items = filteredOptions.map((opt) => opt.name).sort()
    setInputItems([...themeFonts, ...items])
  }

  const handleFontChange = (name: string) => {
    const fontData = variableFontsData[name] ?? {}
    onChange({
      ...(name === variableFont?.name ? value : {}),
      fontFamily: name,
    })
    setVariableFont(fontData)
  }

  const handleCustomAxisChange = (axisKey: string, newValue: any) => {
    const axisDict: Record<string, any> = {}
    value.fontVariationSettings?.split(',').forEach((axis: string) => {
      const axisSplit = axis.split(' ')
      const k = axisSplit[0]
      const v = axisSplit[1]
      axisDict[k] = v
    })

    axisDict[`'${axisKey}'`] = newValue

    const fontVariationSettings = Object.entries(axisDict)
      .map(([k, v]) => `${k} ${v}`)
      .join(',')

    onChange({ ...value, fontVariationSettings })
  }

  return (
    <div {...getComboboxProps()}>
      {label && (
        <Label htmlFor={id} sx={{ display: 'block' }}>
          {label}
        </Label>
      )}
      <div sx={{ pb: 2, display: 'flex', flexDirection: 'row', gap: '8px' }}>
        <input
          type="text"
          value={value.fontFamily}
          {...getInputProps({
            ref: inputRef,
            onChange: (e: any) => handleFontChange(e.target.value),
          })}
          onFocus={() => {
            if (!isOpen) {
              toggleMenu()
              handleFilterItems('')
            }
          }}
          sx={{ width: '100%' }}
        />
        {onRemove && <DeletePropButton onRemove={onRemove} />}
      </div>
      <div
        sx={{
          position: 'relative',
          width: '100%',
          display: isOpen ? 'block' : 'none',
        }}
      >
        <ul
          {...getMenuProps()}
          sx={{
            bg: 'background',
            fontSize: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingBottom: 0,
            pl: 0,
            pr: 0,
            marginLeft: 0,
            marginRight: 0,
            top: 0,
            left: '-1px',
            position: 'absolute',
            right: 0,
            width: 'calc(100% + 2px)',
            listStyleType: 'none',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'border',
            borderTopWidth: 0,
            borderTopColor: 'transparent',
            borderBottomColor: isOpen ? 'border' : 'transparent',
            maxHeight: 320,
            overflow: 'auto',
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            zIndex: 10,
          }}
        >
          {isOpen && inputItems.length > 0 && (
            <div
              sx={{ display: 'flex', maxWidth: '100%', overflowX: 'scroll' }}
            >
              <FontFamilyToggle
                label="Sans"
                checked={includeSans}
                onToggle={() => setIncSans(!includeSans)}
              />
              <FontFamilyToggle
                label="Serif"
                checked={includeSerif}
                onToggle={() => setIncSerif(!includeSerif)}
              />
              <FontFamilyToggle
                label="Mono"
                checked={includeMono}
                onToggle={() => setIncMono(!includeMono)}
              />
              <FontFamilyToggle
                label="Display"
                checked={includeDisplay}
                onToggle={() => setIncDisplay(!includeDisplay)}
              />
              <FontFamilyToggle
                label="Handwriting"
                checked={includeHandwriting}
                onToggle={() => setIncHandwriting(!includeHandwriting)}
              />
            </div>
          )}
          {isOpen && inputItems.length === 0 && (
            <div
              sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                py: 2,
                px: 3,
                fontSize: 1,
              }}
            >
              <span>No results</span>
              <button
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
                onClick={() => {
                  handleFontChange('')
                  // @ts-ignore
                  inputRef.current.focus()
                  if (!isOpen) {
                    toggleMenu()
                  }
                }}
              >
                <span sx={{ mr: 2 }}>Clear</span>
              </button>
            </div>
          )}
          {isOpen &&
            inputItems.map((item, index) => {
              return (
                <li
                  sx={{
                    margin: 0,
                    pl: 3,
                    py: 1,
                    fontWeight: themeFonts.includes(item) ? 600 : 400,
                    backgroundColor:
                      highlightedIndex === index
                        ? 'backgroundOffset'
                        : 'inherit',
                    ':last-of-type': {
                      borderBottomRightRadius: 7,
                      overflow: 'hidden',
                      pb: 1,
                    },
                  }}
                  key={`${item}${index}`}
                  {...getItemProps({ item, index })}
                  onClick={() => {
                    handleFontChange(inputItems[highlightedIndex])
                    toggleMenu()
                  }}
                >
                  {item}
                </li>
              )
            })}
        </ul>
      </div>
      <section sx={{
        display: 'flex', flexDirection: 'column', gap: '8px'
      }}>
      {variableFont &&
        Object.entries(variableFont).map(([k, v]) => {
          if (['name', 'ital'].includes(k)) return null
          if (typeof v === 'string') return null

          return (
            <CustomAxis
              key={k}
              defaultValue={v.default}
              value={value.fontVariationSettings}
              onChange={(e: any) => handleCustomAxisChange(k, e)}
              axisKey={k}
              min={v.min}
              max={v.max}
              step={v.step}
              label={nameMap[k] ?? k}
              sx={{ width: '100%', }}
            />
          )
        })}
      </section>
    </div>
  )
}

type FontFamilyToggleProps = {
  checked: boolean
  onToggle: () => void
  label: string
}
const FontFamilyToggle = ({
  checked,
  onToggle,
  label,
}: FontFamilyToggleProps) => {
  return (
    <label
      sx={{
        whiteSpace: 'nowrap',
        pr: 2,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <input type="checkbox" checked={checked} onChange={onToggle} />
      <span sx={{ fontWeight: 400, pl: 0 }}>{label}</span>
    </label>
  )
}

const CustomAxis = ({
  defaultValue,
  axisKey,
  value,
  onChange,
  ...props
}: any) => {
  const parseCustomAxisValue = (): number => {
    const splitAxis = value?.split(',')

    if (splitAxis?.length > 0) {
      for (const ax of splitAxis) {
        if (ax.startsWith(`'${axisKey}'`)) {
          return Number(ax.match(/-?[\d.]+/))
        }
      }
    }

    return defaultValue
  }

  const parsedValue = parseCustomAxisValue()

  return <NumberInput {...props} value={parsedValue} onChange={onChange} />
}

type APIFontData = {
  fontOptions: Font[]
  variableFontsData: any
}
const TYPEFACE_API_BASE_URL = 'https://components.ai/api'
const getFontsData = async (): Promise<APIFontData> => {
  const fontOptions: Font[] = []
  const rawGoogData = await fetch(
    `${TYPEFACE_API_BASE_URL}/v1/typefaces/list?v1=a`
  )
  const rawSystemData = await fetch(
    `${TYPEFACE_API_BASE_URL}/v1/typefaces/system`
  )
  const variableFontsData = await fetch(
    `${TYPEFACE_API_BASE_URL}/v1/typefaces/variable`
  )

  const systemFonts = (await rawSystemData.json()) as any
  systemFonts.forEach(({ name, type }: any) => {
    if (
      type === FontCategory.Sans ||
      type === FontCategory.Serif ||
      type === FontCategory.Mono
    ) {
      fontOptions.push({
        name,
        category: type,
      })
    }
  })

  const googFontsData = (await rawGoogData.json()) as any
  googFontsData.forEach((font: any) => {
    const { category, name } = font
    if (
      category === FontCategory.Sans ||
      category === FontCategory.Serif ||
      category === FontCategory.Mono ||
      category === FontCategory.Display ||
      category === FontCategory.Handwriting
    ) {
      fontOptions.push({ name, category })
    }
  })

  return {
    fontOptions,
    variableFontsData: await variableFontsData.json(),
  }
}
