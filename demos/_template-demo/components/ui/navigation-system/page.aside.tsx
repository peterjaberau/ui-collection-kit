import { Box } from "@chakra-ui/react"


export const PageAside = ({children}: any) => {

  return (
    <Box
      data-name="page-aside"
      css={{
        height: "full",
        width: "50px",
        bg: "bg.panel",
      }}
    >
      {children}
    </Box>
  )
}
