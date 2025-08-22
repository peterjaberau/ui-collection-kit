import { SMPTAction, SMTPActionContenType } from "@/public/public-types"

export const SMTPActionInitial: SMPTAction = {
  from: "",
  to: "",
  bcc: "",
  cc: "",
  setReplyTo: false,
  replyTo: "",
  subject: "",
  contentType: SMTPActionContenType.PLAIN,
  body: "",
  attachment: "",
}
