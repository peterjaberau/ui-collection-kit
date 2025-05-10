'use client'
import * as React from 'react'
import { debounce } from 'lodash-es'
import {
  toGoogleFontUrl,
  toGoogleVariableFontUrl,
  FontFamilyData,
} from '../../../lib/util'

const getVariableFontFamiliesData = async (fonts: string[]) => {
  const data = []
  for (const font of fonts) {
    const formattedName = font.replace(/['"]+/g, '')
    try {
      const res = await fetch(
        `https://components.ai/api/v1/typefaces/variable?name=${formattedName}`
      )
      const varFontData = await res.json()
      data.push({
        name: font,
        ...(varFontData ?? {}),
      })
    } catch (e) {
      console.error(`Failed to fetch variable font ${font}`)
    }
  }

  return data
}

const getFontFamiliesData = async (
  fonts: string[]
): Promise<FontFamilyData[]> => {
  const data: FontFamilyData[] = []
  for (const font of fonts) {
    try {
      const res = await fetch(`https://components.ai/api/v1/typefaces/${font}`)
      const rawFontData = await res.json()

      const styles = Object.keys(rawFontData?.variants)
      const weights = Object.keys(rawFontData?.variants[styles[0]])
      data.push({
        name: rawFontData?.name,
        weights,
        styles,
      })
    } catch (e) {
      console.error(`Failed to fetch ${font}`)
    }
  }

  return data
}

export const buildVariableFontFamiliesHref = async (
  fonts: string[]
): Promise<string | null> => {
  const fontData = await getVariableFontFamiliesData(fonts)
  return toGoogleVariableFontUrl(fontData)
}

export const buildFontFamiliesHref = async (
  fonts: string[]
): Promise<string | null> => {
  const fontData = await getFontFamiliesData(fonts)
  return toGoogleFontUrl(fontData)
}

const getVariableStyleSheet = async (
  fontFamily: string,
  setVariableStyleSheet: Function
) => {
  const sheet = await buildVariableFontFamiliesHref([fontFamily])
  setVariableStyleSheet(sheet)
}
const debouncedVariableStyleSheet = debounce(getVariableStyleSheet, 1000)

const getStyleSheet = async (fontFamily: string, setStyleSheet: Function) => {
  const sheet = await buildFontFamiliesHref([fontFamily])
  setStyleSheet(sheet)
}
const debouncedGetStyleSheet = debounce(getStyleSheet, 1000)

export const FontTags = ({ fontFamily }: any) => {
  const [styleSheet, setStyleSheet] = React.useState<string | null>('')
  const [variableStyleSheet, setVariableStyleSheet] = React.useState<
    string | null
  >('')

  React.useEffect(() => {
    debouncedVariableStyleSheet(fontFamily, setVariableStyleSheet)
    debouncedGetStyleSheet(fontFamily, setStyleSheet)
  }, [fontFamily])

  if (!fontFamily) {
    return null
  }

  return (
    <>
      {styleSheet || variableStyleSheet ? (
        <link rel="stylesheet" href={variableStyleSheet || styleSheet || ''} />
      ) : null}
    </>
  )
}
