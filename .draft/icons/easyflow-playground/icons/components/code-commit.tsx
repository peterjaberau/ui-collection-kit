import * as React from "react"
import type { IconProps } from "../types"
const CodeCommit = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={15}
        height={15}
        fill="none"
        ref={ref}
        {...props}
      >
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M.833 7.5h3.959M14.167 7.5h-3.959M7.5 10.209a2.708 2.708 0 1 0 0-5.417 2.708 2.708 0 0 0 0 5.417"
        />
      </svg>
    )
  }
)
CodeCommit.displayName = "CodeCommit"
export default CodeCommit
