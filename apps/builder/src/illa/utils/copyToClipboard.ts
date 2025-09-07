import { COPY_STATUS, copyToClipboard as copy } from "@/public/utils"
// import { createMessage } from "@/design/react"
import i18n from "@/i18n/config"

// const message = createMessage()

export const copyToClipboard = (text: string) => {
  const flag = copy(text)
  if (flag === COPY_STATUS.EMPTY) {
    // message.info({
    //   content: i18n.t("empty_copied_tips"),
    // })

    console.log("Empty text copied to clipboard")

  } else {
    // message.success({
    //   content: i18n.t("copied"),
    // })

    console.log("Text copied to clipboard successfully")
  }
}
