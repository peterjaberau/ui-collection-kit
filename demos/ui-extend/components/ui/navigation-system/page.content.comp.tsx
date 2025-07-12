import { Flex } from "@chakra-ui/react"

export const PageContentComponent = ({ children, direction }: any) => {
  return (
    <Flex
      data-name="FlexibleComponent"
      flex={1}
      py={2}
      css={{
        width: "full",
        height: "full",
      }}
    >
      <Flex
        flexDirection={direction}
        css={{
          width: "full",
          height: "full",
          overflow: "auto",

          // scrollbarWidth: "thin",
          "&::-webkit-scrollbar:vertical": {
            // display: "none",
            width: "5px",
            height: "5px",
            // height: "50px",
          },
          "&::-webkit-scrollbar": {
            height: "0px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "gray.100",
            borderRadius: "5px",
          },
        }}
      >
        {children}
      </Flex>
    </Flex>
  )
}
