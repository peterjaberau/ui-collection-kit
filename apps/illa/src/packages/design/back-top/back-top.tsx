import { forwardRef, useCallback, useEffect, useRef, useState } from "react"
import { LuChevronUp as UpIcon } from "react-icons/lu"
import { IconButton, Box } from "@chakra-ui/react"
import {
  throttleByRaf,
  isFunction,
  raf,
  caf,
  easingMethod,
} from "../system"


export const BackTop = forwardRef<HTMLDivElement, any>(
  (props, ref) => {
    const {
      visibleHeight = 400,
      target = () => window,
      easing = "quartOut",
      duration = 400,
      onClick,
      children,
      css,
      ...rest
    } = props

    function getScrollTarget(target: HTMLElement | Window): HTMLElement {
      return target === window
        ? document.documentElement
        : (target as HTMLElement)
    }

    const [visible, setVisible] = useState(false)

    const targetRef: any = useRef<HTMLElement | Window>(null)
    const scrollTargetRef: any = useRef<HTMLElement>(null)

    const scrollToTop: any = useCallback(() => {
      const { scrollTop } = scrollTargetRef.current as HTMLElement
      const startTime = Date.now()
      let id: number

      function updateScrollTopPerFrame() {
        const nowTime = Date.now()
        const durationFromStart = nowTime - startTime
        const scrollTarget = scrollTargetRef.current

        if (scrollTarget) {
          scrollTarget.scrollTop =
            scrollTop -
            scrollTop *
              easingMethod[easing](
                durationFromStart > duration ? 1 : durationFromStart / duration,
              )
        }

        durationFromStart < duration
          ? (id = raf(updateScrollTopPerFrame))
          : caf(id)
      }

      raf(updateScrollTopPerFrame)

      isFunction(onClick) && onClick()
    }, [duration])

    useEffect(() => {
      targetRef.current = target()
      scrollTargetRef.current = getScrollTarget(targetRef.current)

      const onScroll = throttleByRaf(() => {
        const { scrollTop } = scrollTargetRef.current as HTMLElement
        setVisible(scrollTop > visibleHeight)
      })

      targetRef.current.addEventListener("scroll", onScroll)

      return () => {
        targetRef?.current?.removeEventListener("scroll", onScroll)
        onScroll.cancel()
      }
    })

    const defaultChildren = (
      <IconButton>
        <UpIcon />
      </IconButton>
    )

    return (
      <Box
        css={{
          position: "fixed",
          right: props.right || '40px',
          bottom: props.bottom || '40px',
          cursor: "pointer",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s ease-in",
          ...css
        }}
        ref={ref}
        onClick={scrollToTop}
      >
        {children || defaultChildren}
      </Box>
    )
  },
)

BackTop.displayName = "BackTop"
