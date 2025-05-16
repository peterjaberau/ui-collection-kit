import { PageRoot } from './page.root'
import { PageHeader } from './page.header'
import { PageBody } from './page.body'
import { PageFooter } from './page.footer'
import { PageContent } from './page.content'
import { PageLeftAside } from './page.left-aside'
import { PageRightAside } from './page.right-aside'
import { GenericLayoutProps } from './common.types'

export const PageIndex = (props: GenericLayoutProps) => {

  return (
    <PageRoot>
      <PageHeader>PageHeader</PageHeader>
      <PageBody>
        <PageLeftAside>PageLeftAside</PageLeftAside>
        <PageContent>{props.children}</PageContent>
        <PageRightAside>PageRightAside</PageRightAside>
      </PageBody>
      <PageFooter>PageFooter</PageFooter>
    </PageRoot>
  )
}
