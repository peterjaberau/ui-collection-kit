import { createAnatomy } from '@ui-collection-kit/anatomy'

export const fieldAnatomy = createAnatomy('field').parts(
  'root',
  'errorText',
  'helperText',
  'input',
  'label',
  'select',
  'textarea',
  'requiredIndicator',
)
export const parts = fieldAnatomy.build()
