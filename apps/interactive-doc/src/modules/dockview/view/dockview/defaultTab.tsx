import React from "react"
import { DockviewPanelApi, IDockviewPanelHeaderProps } from "../../core"
import { IconButton, Button } from "@chakra-ui/react"
import { MdClose } from "react-icons/md"

function useTitle(api: DockviewPanelApi): string | undefined {
  const [title, setTitle] = React.useState<string | undefined>(api.title)

  React.useEffect(() => {
    const disposable = api.onDidTitleChange((event) => {
      setTitle(event.title)
    })

    return () => {
      disposable.dispose()
    }
  }, [api])

  return title
}

export type IDockviewDefaultTabProps = IDockviewPanelHeaderProps &
  React.HtmlHTMLAttributes<HTMLDivElement> & {
    hideClose?: boolean
    closeActionOverride?: () => void
  }

export const DockviewDefaultTab: React.FunctionComponent<IDockviewDefaultTabProps> = ({
  api,
  containerApi: _containerApi,
  params: _params,
  hideClose,
  closeActionOverride,
  onPointerDown,
  onPointerUp,
  onPointerLeave,
  tabLocation,
  ...rest
}) => {
  const title = useTitle(api)

  const isMiddleMouseButton = React.useRef<boolean>(false)

  const onClose: any = React.useCallback(
    (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault()

      if (closeActionOverride) {
        closeActionOverride()
      } else {
        api.close()
      }
    },
    [api, closeActionOverride],
  )

  const onBtnPointerDown = React.useCallback((event: React.MouseEvent) => {
    event.preventDefault()
  }, [])

  const _onPointerDown: any = React.useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      isMiddleMouseButton.current = event.button === 1
      onPointerDown?.(event)
    },
    [onPointerDown],
  )

  const _onPointerUp: any = React.useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (isMiddleMouseButton && event.button === 1 && !hideClose) {
        isMiddleMouseButton.current = false
        onClose(event)
      }

      onPointerUp?.(event)
    },
    [onPointerUp, onClose, hideClose],
  )

  const _onPointerLeave: any = React.useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      isMiddleMouseButton.current = false
      onPointerLeave?.(event)
    },
    [onPointerLeave],
  )

  return (
    <Button
      variant="ghost"
      size="sm"
      {...rest as any}
      onPointerDown={_onPointerDown}
      onPointerUp={_onPointerUp}
      onPointerLeave={_onPointerLeave}
      className="dv-default-tab"
    >
      {title}
      {!hideClose && <MdClose className="dv-default-tab-action" onPointerDown={onBtnPointerDown} onClick={onClose} />}
    </Button>
  )
}
