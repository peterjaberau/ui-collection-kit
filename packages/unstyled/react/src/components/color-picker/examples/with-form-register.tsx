import { ColorPicker } from '..'
import { parseColor } from '@ui-collection-kit/color-utils'
import { useForm } from 'react-hook-form'
import { ColorPickerContent } from './_template'

interface FieldValues {
  color: string
}

export const WithFormRegister = () => {
  const { register, handleSubmit } = useForm<FieldValues>()

  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ColorPicker.Root open defaultValue={parseColor('#eb5e41')}>
        <ColorPickerContent />
        <ColorPicker.HiddenInput {...register('color')} />
      </ColorPicker.Root>

      <button type="submit">Submit</button>
    </form>
  )
}
