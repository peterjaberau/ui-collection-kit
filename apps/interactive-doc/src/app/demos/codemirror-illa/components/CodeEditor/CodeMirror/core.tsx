'use client'
import { Popover } from '@chakra-ui/react'
import { Button, HStack, chakra } from "@chakra-ui/react"
import { HintTooltipContent } from '../HintToolTip'
import { Tooltip } from '../ToolTip'
import { closeCompletion } from "@codemirror/autocomplete"
import {
  Compartment,
  EditorState,
  Extension,
  StateEffect,
} from "@codemirror/state"
import {
  EditorView,
  placeholder as placeholderExtension,
} from "@codemirror/view"
import { FC, useCallback, useEffect, useId, useMemo, useRef, useState } from "react"
import { useBasicSetup } from "./extensions"
import {
  CODE_LANG,
  CODE_TYPE,
} from "./extensions/interface"
import { ILLACodeMirrorProps } from "./interface"
import { applyEditorWrapperStyle } from "./style"
import { ILLACodeMirrorTheme } from "./theme"
import { HintToolTip } from "../HintToolTip"
import { VALIDATION_TYPES } from "#codemirror-illa/utils"
import { TriggerRefHandler } from "#components/ui/trigger"

// thk ReactCodeMirror:https://github.com/uiwjs/react-codemirror
export const ILLACodeMirrorCore: FC<ILLACodeMirrorProps> = (props) => {
  const {
    className,
    extensions = [],
    value,
    height = "",
    maxHeight = "",
    minHeight = "",
    width = "",
    maxWidth = "",
    minWidth = "",
    editable = true,
    readOnly = false,
    placeholder,
    showLineNumbers = false,
    lang = CODE_LANG.JAVASCRIPT,
    codeType = CODE_TYPE.EXPRESSION,
    expressions = [],
    result = "",
    hasError = false,
    resultType = VALIDATION_TYPES.STRING,
    canShowCompleteInfo = false,
    sqlScheme = {},
    singleLine,
    onChange,
    onBlur,
    onFocus,
    tooltipContainer,
    scopeOfAutoComplete,
  } = props

  const [isFocus, setIsFocus] = useState(false)

  const editorViewRef = useRef<EditorView>(null)
  const editorWrapperRef = useRef<HTMLDivElement | null>(null)
  const triggerHandlerRef = useRef<TriggerRefHandler | undefined>(undefined)

  const compartmentsRef: any = useRef<Compartment[]>([])

  const extensionOptions = useMemo(() => {
    return {
      showLineNumbers,
      lang,
      codeType,
      expressions,
      canShowCompleteInfo,
      sqlScheme,
      scopeOfAutoComplete,
    }
  }, [
    canShowCompleteInfo,
    codeType,
    expressions,
    lang,
    showLineNumbers,
    sqlScheme,
    scopeOfAutoComplete,
  ])

  const basicExtensions = useBasicSetup(extensionOptions)

  const defaultThemeOption = useMemo(
    () =>
      EditorView.theme({
        "&": {
          height,
          minHeight,
          maxHeight,
          width,
          maxWidth,
          minWidth,
        },
        ...ILLACodeMirrorTheme,
      }),
    [height, maxHeight, maxWidth, minHeight, minWidth, width],
  )

  const focusUpdateListener: Extension = useMemo(() => {
    return EditorView.updateListener.of((viewUpdate) => {
      if (viewUpdate.focusChanged) {
        setIsFocus(viewUpdate.view.hasFocus)
        const currentString = viewUpdate.state.doc.toString()

        if (viewUpdate.view.hasFocus) {
          onFocus?.()
        } else {
          onBlur?.(currentString)
        }
        if (!viewUpdate.view.hasFocus) {
          setTimeout(() => {
            closeCompletion(viewUpdate.view)
          }, 500)
        }
      }
    })
  }, [onBlur, onFocus])

  const changeUpdateListener: Extension = useMemo(() => {
    return EditorView.updateListener.of((viewUpdate) => {
      const currentString = viewUpdate.state.doc.toString()
      if (viewUpdate.docChanged) {
        onChange?.(currentString)
      }
    })
  }, [onChange])

  const readOnlyStateChangeEffect: Extension = useMemo(
    () => EditorState.readOnly.of(readOnly),
    [readOnly],
  )

  const editableStateChangeEffect: Extension = useMemo(
    () => EditorView.editable.of(editable),
    [editable],
  )

  const placeholderExt: Extension = useMemo(() => {
    return typeof placeholder === "string"
      ? placeholderExtension(placeholder)
      : []
  }, [placeholder])

  const singleLineExt: Extension = useMemo(() => {
    return singleLine
      ? EditorState.transactionFilter.of((tr) => {
        return tr.newDoc.lines > 1 ? [] : [tr]
      })
      : EditorView.lineWrapping
  }, [singleLine])

  const allExtensions = useMemo(() => {
    return [
      basicExtensions,
      defaultThemeOption,
      focusUpdateListener,
      changeUpdateListener,
      readOnlyStateChangeEffect,
      editableStateChangeEffect,
      placeholderExt,
      singleLineExt,
      extensions,
    ]
  }, [
    basicExtensions,
    defaultThemeOption,
    focusUpdateListener,
    changeUpdateListener,
    readOnlyStateChangeEffect,
    editableStateChangeEffect,
    placeholderExt,
    singleLineExt,
    extensions,
  ])

  const extensionsWithCompartment = useMemo(() => {
    for (
      let i = compartmentsRef.current.length;
      i < allExtensions.length;
      i++
    ) {
      const compartment = new Compartment()
      compartmentsRef.current.push(compartment)
    }
    return allExtensions.map((ext, index) =>
      compartmentsRef.current[index].of(ext),
    )
  }, [allExtensions])

  useEffect(() => {
    if (
      !editorViewRef.current ||
      (!isFocus && value !== editorViewRef.current.state.doc.toString())
    ) {
      const state = EditorState.create({
        doc: value,
        extensions: extensionsWithCompartment,
      })
      if (editorViewRef.current) {
        editorViewRef.current.setState(state)
      } else {
        if (editorWrapperRef.current) {
          editorViewRef.current = new EditorView({
            state,
            parent: editorWrapperRef.current,
          })
        }
      }
    }
  }, [value, extensionsWithCompartment, isFocus])

  const reconfigure = useCallback(
    (view?: EditorView) => {
      if (view) {
        const effects: StateEffect<unknown>[] = []
        allExtensions.forEach((e, i) => {
          if (compartmentsRef.current[i].get(view.state) !== e) {
            effects.push(compartmentsRef.current[i].reconfigure(e))
          }
        })
        if (effects.length > 0) {
          view.dispatch({ effects })
        }
      }
    },
    [allExtensions],
  )

  useEffect(() => {
    if (editorViewRef.current) {
      reconfigure(editorViewRef.current)
    }
  }, [reconfigure])



  const [isHovered, setIsHovered] = useState(false)


  return (
    <Tooltip
      open={isFocus}
      // interactive={true}
      // closeOnClick={false}
      // closeOnPointerDown={false}
      // closeOnEscape={false}
      content={
        <HintTooltipContent
          hasError={hasError}
          resultType={resultType}
          result={!result ? '""' : result}
          setIsHovered={setIsHovered}
        />
      }
      positioning={{ placement: "bottom" }}
    >
      <div
        ref={editorWrapperRef}
        className={className}
        css={applyEditorWrapperStyle(hasError, isFocus, editable, readOnly)}
      />
    </Tooltip>

    // <Tooltip.Root value={tooltip}>
    //   <Tooltip.Trigger asChild>
    //
    //   </Tooltip.Trigger>
    //   <Tooltip.Positioner>
    //     <Tooltip.Content>
    //       {!result ? '""' : result}
    //     </Tooltip.Content>
    //   </Tooltip.Positioner>
    // </Tooltip.Root>
  )



  // return (
  //   <HintToolTip
  //     isEditorFocused={isFocus}
  //     result={!result ? '""' : result}
  //     hasError={hasError}
  //     resultType={resultType}
  //     toolTipContainer={tooltipContainer}
  //   >
  //     <div
  //       ref={editorWrapperRef}
  //       className={className}
  //       css={applyEditorWrapperStyle(hasError, isFocus, editable, readOnly)}
  //     />
  //   </HintToolTip>
  // )



  // return (
  //   <HintToolTip
  //     isEditorFocused={isFocus}
  //     result={!result ? '""' : result}
  //     hasError={hasError}
  //     resultType={resultType}
  //     toolTipContainer={tooltipContainer}
  //     triggerRef={triggerHandlerRef as any}
  //   >
  //     <div
  //       ref={editorWrapperRef}
  //       className={className}
  //       css={applyEditorWrapperStyle(hasError, isFocus, editable, readOnly)}
  //     />
  //   </HintToolTip>
  // )
}

// return (
//   <Popover.Root open={open} onOpenChange={(e: any) => setOpen(e.open)}>
//     <Popover.Trigger>
//       <div
//         ref={editorWrapperRef}
//         className={className}
//         css={applyEditorWrapperStyle(hasError, isFocus, editable, readOnly)}
//       />
//     </Popover.Trigger>
//     <Portal>
//       <Popover.Positioner>
//         <Popover.Content>
//           <Popover.Arrow />
//           <Popover.Body>
//             This is a popover with the same width as the trigger button
//           </Popover.Body>
//         </Popover.Content>
//       </Popover.Positioner>
//     </Portal>
//   </Popover.Root>
// )
