import { Breadcrumb } from '@chakra-ui/react'
import { Fragment } from 'react'

export const Breadcrumbs = (props: { crumbs: { label: string; href?: string }[] }) => {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        {props.crumbs.map((crumb, index) => (
          <Fragment key={crumb.label}>
            <Breadcrumb.Item>
              {crumb.href ? (
                <Breadcrumb.Link href={crumb.href}>{crumb.label}</Breadcrumb.Link>
              ) : (
                <Breadcrumb.CurrentLink>{crumb.label}</Breadcrumb.CurrentLink>
              )}
            </Breadcrumb.Item>
            {index !== props.crumbs.length - 1 && <Breadcrumb.Separator />}
          </Fragment>
        ))}
      </Breadcrumb.List>
    </Breadcrumb.Root>
  )
}
