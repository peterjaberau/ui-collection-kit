import { createAnatomy } from '@ui-kit/core-anatomy'

export const fieldsetAnatomy = createAnatomy('fieldset').parts('root', 'errorText', 'helperText', 'legend')
export const parts = fieldsetAnatomy.build()
