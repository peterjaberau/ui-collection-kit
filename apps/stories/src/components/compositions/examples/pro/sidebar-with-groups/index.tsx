import { Navbar } from './navbar'
import { Sidebar } from './sidebar'

export const Index = () => {
  return (
    <>
      <Navbar hideFrom="md" />
      <Sidebar hideBelow="md" />
    </>
  )
}
