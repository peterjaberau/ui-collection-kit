import { IFieldResetOptions, IFormFeedback } from '@formily/core'
import { useParentForm } from '@formily/react'
import { isFn } from '@formily/shared'
import { Button as ChakraButton } from '@chakra-ui/react'
import React from 'react'

export interface IResetProps extends IFieldResetOptions {
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => any
  onResetValidateSuccess?: (payload: any) => void
  onResetValidateFailed?: (feedbacks: IFormFeedback[]) => void
  [key: string]: any
}

export const Reset: React.FC<React.PropsWithChildren<IResetProps>> = ({
  forceClear,
  validate,
  onResetValidateSuccess,
  onResetValidateFailed,
  ...props
}) => {
  const form = useParentForm()
  return (
    <ChakraButton
      {...props}
      variant='subtle'
      onClick={(e) => {
        if (isFn(props.onClick)) {
          if (props.onClick(e) === false) return
        }
        form
          .reset('*', {
            forceClear,
            validate,
          })
          .then(onResetValidateSuccess)
          .catch(onResetValidateFailed)
      }}
    >
      {props.children}
    </ChakraButton>
  )
}

export default Reset
