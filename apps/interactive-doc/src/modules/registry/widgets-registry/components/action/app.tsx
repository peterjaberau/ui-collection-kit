import { Button } from "@chakra-ui/react"

interface WidgetActionProps {
  id: string
  text: string
  onClick?: () => void
  [key: string]: any
}

const WidgetActionApp = (props: WidgetActionProps | any) => {
  // const { text, id, onClick = () => {}, ...rest } = props

  const onClickHandler = () => {
    props?.onClick()
  }
  // console.log("WidgetAction: ", props)

  return (
    <Button  onClick={onClickHandler} {...props}>
      {props?.text}
    </Button>
  )
}

export default WidgetActionApp

