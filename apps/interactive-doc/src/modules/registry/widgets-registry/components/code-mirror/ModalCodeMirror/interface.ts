import { CodeEditorProps } from "../interface"


export interface ModalProps extends BaseModalProps {
  docLink?: string
  canMove?: boolean
  w?: number
  h?: number
}


export interface MovableModalProps extends BaseModalProps {
  defaultPosition?: {
    x: number
    y: number
    width: number
    height: number
  }
}


export interface ModalBodyContent {
  description?: string
  placeholder?: string
  lang?: CodeEditorProps["lang"]
  expectValueType?: CodeEditorProps["expectValueType"]
  scopeOfAutoComplete?: CodeEditorProps["scopeOfAutoComplete"]
  onChange?: CodeEditorProps["onChange"]
  wrappedCodeFunc?: CodeEditorProps["wrappedCodeFunc"]
  onFocus?: CodeEditorProps["onFocus"]
  onBlur?: CodeEditorProps["onBlur"]
  value: string
  codeType?: CodeEditorProps["codeType"]
}

export interface FooterContentProps {
  onClickSaveButton: () => void
}

export interface ModalCodeMirrorProps
  extends Omit<MovableModalProps, "bodyContent" | "footerContent">,
    ModalBodyContent {
  onClickSaveButton?: () => void
}
