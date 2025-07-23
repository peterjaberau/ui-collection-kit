import { ChakraProvider } from "@chakra-ui/react"
import { useStylingActor } from "../actors/hooks/useStylingActor"
import { useEffect, useState } from "react"

export const WithTheme: any = ({ story, context }: any) => {
  const { getStyleByName, defaultStyle } = useStylingActor()
  const [locaStyle, setLocalStyle] = useState(defaultStyle)

  useEffect(() => {
    setLocalStyle(getStyleByName(context?.globals?.style) || defaultStyle)
  }, [context?.globals?.style])

  return (
    <ChakraProvider value={locaStyle}>
        {story}
    </ChakraProvider>
  )
}

