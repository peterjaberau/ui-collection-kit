import { Format } from '..'

export const ByteBasic = () => {
  return (
    <div>
      File size: <Format.Byte value={1450.45} />
    </div>
  )
}
