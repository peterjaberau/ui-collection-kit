import copy from "copy-to-clipboard"
import { LuCopy as Dcopy } from "react-icons/lu"
import { IconButton as ActionIcon } from "@chakra-ui/react"

export function CopyTextButton(props: { text: string }) {

  return (
    <ActionIcon
      title={"Copy"}
      onClick={(e) => {
        e.stopPropagation()
        if (props.text) {
          // messageInstance.success({ content: "Copy Successes" })
          console.log('---Copy Successes-----', props.text);
          return copy(props.text)
        }
        console.log('---Copy Failed-----', props.text)

        // messageInstance.error({ content: "Copy Failed" })
        return
      }}
    >
      <Dcopy />
    </ActionIcon>
  )
}
