import {
  getStringSnippets,
  isDynamicStringSnippet,
} from "#core-utils/dynamic-string"
import { debounce } from "lodash"
import { forwardRef, useMemo } from "react"
import { RenderCodeMirrorCore } from "./CodeMirror/core"
import { IExpressionShape } from "./CodeMirror/extensions/interface"
import { renderCodeMirrorTooltipStyle } from "./CodeMirror/theme"
import { fixedValue } from "./CodeMirror/utils"
import { CodeEditorProps } from "./interface"
import { RenderCodeMirrorTooltipStyle } from "./style"

const WidgetCodeMirror = forwardRef<HTMLDivElement, CodeEditorProps>(
  (props, _ref) => {
    const {
      value = "",
      onChange = () => {},
      placeholder,
      width,
      maxWidth,
      height,
      maxHeight,
      editable = true,
      readOnly,
      minWidth,
      minHeight,
      wrapperCss,
      completionOptions,
      onBlur = () => {},
      onFocus = () => {},
      className,
    } = props

    const stringSnippets = useMemo(() => {
      const result: IExpressionShape[] = []
      const dynamicStrings = getStringSnippets(value)
      dynamicStrings.forEach((stringSnippet: any) => {
        if (isDynamicStringSnippet(stringSnippet)) {
          const currentKey = stringSnippet.split("{{")[1].split("}}")[0].trim()
          if (
            !currentKey ||
            completionOptions.find((item) => item.key.trim() === currentKey)
          ) {
            result.push({ hasError: false, value: stringSnippet })
          } else {
            result.push({ hasError: true, value: stringSnippet })
          }
        }
      })
      return result
    }, [completionOptions, value])

    const debounceHandleChange = useMemo(() => {
      return debounce(onChange, 160)
    }, [onChange])

    return (
      <div
        //@ts-ignore
        css={[
          RenderCodeMirrorTooltipStyle,
          wrapperCss,
          renderCodeMirrorTooltipStyle,
        ]}
      >
        <RenderCodeMirrorCore
          className={className}
          placeholder={placeholder}
          value={fixedValue(value)}
          onChange={debounceHandleChange}
          expressions={stringSnippets}
          width={width}
          maxWidth={maxWidth}
          height={height}
          maxHeight={maxHeight}
          editable={editable}
          readOnly={readOnly}
          minWidth={minWidth}
          minHeight={minHeight}
          onBlur={onBlur}
          onFocus={onFocus}
          completionOptions={completionOptions}
        />
      </div>
    )
  },
)

export default WidgetCodeMirror
