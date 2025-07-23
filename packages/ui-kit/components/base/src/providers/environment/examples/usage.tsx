import { useEnvironmentContext } from '..'

export const Usage = () => {
  const { getRootNode } = useEnvironmentContext()

  return <pre>{JSON.stringify(getRootNode(), null, 2)}</pre>
}
