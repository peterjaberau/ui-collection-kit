import { defineTextStyles } from "@chakra-ui/react"

export const textStyles: any = defineTextStyles({
  "2xs": { value: { fontSize: "2xs", lineHeight: "0.75rem" } },
  xs: { value: { fontSize: "xs", lineHeight: '1rem',
      letterSpacing: '0em',
      fontWeight: '500', }
  },

  sm: { value: { fontSize: "sm",  lineHeight: '1.25rem',
      letterSpacing: '-0.006em',
      fontWeight: '500', }
  },

  md: { value: { fontSize: "md",  lineHeight: '1.5rem',
      letterSpacing: '-0.011em',
      fontWeight: '500',}
  },

  lg: { value: { fontSize: "lg",  lineHeight: '1.5rem',
      letterSpacing: '-0.015em',
      fontWeight: '500' }
  },



  xl: { value: { fontSize: "xl",lineHeight: '2rem',
      letterSpacing: '-0.015em',
      fontWeight: '500', }
  },

  "2xl": { value: { fontSize: "2xl",  lineHeight: '1.75rem',
      letterSpacing: '0em',
      fontWeight: '500', }
  },

  "3xl": { value: { fontSize: "3xl", lineHeight: "2rem", letterSpacing: "0em", fontWeight: "500" } },
  "4xl": {
    value: {
      fontSize: "2rem",
      lineHeight: "2.5rem",
      letterSpacing: "-0.005em",
      fontWeight: "500",
    },
  },

  "5xl": {
    value: {
      fontSize: "5xl",
      lineHeight: "3rem",
      letterSpacing: "-0.01em",
      fontWeight: "500",
    },
  },
  "6xl": {
    value: { fontSize: "6xl", lineHeight: "3.5rem", letterSpacing: "-0.01em", fontWeight: "500" },
  },
  "7xl": {
    value: {
      fontSize: "7xl",
      lineHeight: "4rem",
      letterSpacing: "-0.025em",
      fontWeight: "500",
    },
  },
  none: {
    value: {},
  },
})
