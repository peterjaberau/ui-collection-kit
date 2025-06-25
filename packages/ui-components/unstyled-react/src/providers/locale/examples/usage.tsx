import { useLocaleContext } from '..'

export const Usage = () => {
  const { locale, dir } = useLocaleContext()

  return <pre>{JSON.stringify({ locale, dir }, null, 2)}</pre>
}
