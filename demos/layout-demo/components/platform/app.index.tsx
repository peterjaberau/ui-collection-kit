import { AppRoot } from './app.root'
import { AppHeader } from './app.header'
import { AppFooter } from './app.footer'
import { AppBody } from './app.body'
import { AppContent } from './app.content'
import { AppLeftBar } from './app.left-bar'
import { AppRightBar } from './app.right-bar'
import { AppLeftAside } from './app.left-aside'
import { AppRightAside } from './app.right-aside'
import { GenericLayoutProps } from './common.types'

export const AppIndex = (props: GenericLayoutProps) => {

  return (
    <AppRoot>
      <AppHeader>topHeader</AppHeader>
      <AppBody>
        <AppLeftBar>LB</AppLeftBar>
          <AppLeftAside>LeftAside</AppLeftAside>
          <AppContent>{props.children}</AppContent>
          <AppRightAside>RightAside</AppRightAside>
        <AppRightBar>RB</AppRightBar>
      </AppBody>
      <AppFooter>footer</AppFooter>
    </AppRoot>
  )
}
