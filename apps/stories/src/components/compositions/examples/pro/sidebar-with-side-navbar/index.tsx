import { MobileNavbar } from './mobile-navbar'
import { Sidebar } from './sidebar'

export const Index = () => {
  return (
    <>
      <MobileNavbar hideFrom="md" />
      <Sidebar hideBelow="md" />
    </>
  )
}
