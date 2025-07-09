import * as React from "react"
import type { IconProps } from "../types"
const VerifiedBadge = React.forwardRef<SVGSVGElement, IconProps>(
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
          fill="#3B82F6"
          fillRule="evenodd"
          d="M4.887 1.192A3.45 3.45 0 0 1 7.5 0a3.45 3.45 0 0 1 2.613 1.192 3.45 3.45 0 0 1 2.69 1.005 3.46 3.46 0 0 1 1.006 2.69 3.455 3.455 0 0 1 .88 4.05c-.206.45-.506.851-.88 1.176a3.46 3.46 0 0 1-1.006 2.69 3.45 3.45 0 0 1-2.69 1.005 3.455 3.455 0 0 1-4.05.88 3.45 3.45 0 0 1-1.176-.88 3.45 3.45 0 0 1-2.69-1.004 3.45 3.45 0 0 1-1.006-2.69A3.45 3.45 0 0 1 0 7.5a3.45 3.45 0 0 1 1.192-2.613 3.45 3.45 0 0 1 1.005-2.69 3.45 3.45 0 0 1 2.69-1.005"
          clipRule="evenodd"
        />
        <path
          fill="url(#a)"
          fillOpacity={0.2}
          fillRule="evenodd"
          d="M4.887 1.192A3.45 3.45 0 0 1 7.5 0a3.45 3.45 0 0 1 2.613 1.192 3.45 3.45 0 0 1 2.69 1.005 3.46 3.46 0 0 1 1.006 2.69 3.455 3.455 0 0 1 .88 4.05c-.206.45-.506.851-.88 1.176a3.46 3.46 0 0 1-1.006 2.69 3.45 3.45 0 0 1-2.69 1.005 3.455 3.455 0 0 1-4.05.88 3.45 3.45 0 0 1-1.176-.88 3.45 3.45 0 0 1-2.69-1.004 3.45 3.45 0 0 1-1.006-2.69A3.45 3.45 0 0 1 0 7.5a3.45 3.45 0 0 1 1.192-2.613 3.45 3.45 0 0 1 1.005-2.69 3.45 3.45 0 0 1 2.69-1.005"
          clipRule="evenodd"
        />
        <path
          stroke={color}
          strokeOpacity={0.24}
          strokeWidth={0.6}
          d="m4.866 1.49.15.011.098-.113A3.15 3.15 0 0 1 7.5.3a3.15 3.15 0 0 1 2.387 1.088l.098.113.15-.01a3.15 3.15 0 0 1 2.457.918 3.16 3.16 0 0 1 .918 2.457l-.01.15.113.098A3.16 3.16 0 0 1 14.7 7.5a3.15 3.15 0 0 1-1.088 2.386l-.113.099.01.15a3.16 3.16 0 0 1-.918 2.456 3.15 3.15 0 0 1-2.457.918l-.15-.01-.098.113A3.15 3.15 0 0 1 7.5 14.7a3.15 3.15 0 0 1-2.386-1.088l-.099-.114-.15.011a3.15 3.15 0 0 1-2.457-.917 3.15 3.15 0 0 1-.918-2.458l.01-.15-.113-.098A3.15 3.15 0 0 1 .3 7.5a3.15 3.15 0 0 1 1.088-2.387l.113-.098-.01-.15a3.15 3.15 0 0 1 .918-2.456 3.15 3.15 0 0 1 2.457-.918Z"
        />
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="m4.584 7.792 2.333 2.333 3.5-5.25"
        />
        <defs>
          <linearGradient
            id="a"
            x1={7.5}
            x2={7.5}
            y1={0}
            y2={15}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset={1} stopColor="#fff" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
    )
  }
)
VerifiedBadge.displayName = "VerifiedBadge"
export default VerifiedBadge
