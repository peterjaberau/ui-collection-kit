import { createAnatomy } from '@ui-collection-kit/anatomy'

export const fieldsetAnatomy = createAnatomy('fieldset').parts('root', 'errorText', 'helperText', 'legend')
export const parts = fieldsetAnatomy.build()
