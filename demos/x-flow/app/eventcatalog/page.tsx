'use client';
import Root from '@/components/eventcatalog/components/Root';
import Accordion from '@/components/eventcatalog/components/Accordion';
import AccordionGroup from '@/components/eventcatalog/components/AccordionGroup';
import Admonition from "@/components/eventcatalog/components/Admonition"

export default function Page() {
  return (
    <Root>
      <div className='container mx-auto flex-1 bg-white px-5'>
        <AccordionGroup>
          <Accordion title='Learn how to raise this event'>
            This will be rendered as a child inside a collapsible section.
          </Accordion>
          <Accordion title="Code snippet 1">
            My code here
          </Accordion>
          <Accordion title="Code snippet 2">
            My other code snippet
          </Accordion>
          <Accordion title="Code snippet 3">
            test
          </Accordion>
        </AccordionGroup>

        <div className='p-4 border-2 border-gray-600 rounded-md'>
          <Admonition type={'note'} title={"Note"}>
            Some content with _Markdown_ syntax. Check [this api](https://eventcatalog.dev/).
          </Admonition>

          <Admonition type={'tip'} title={"Tip"}>
            Some content with _Markdown_ syntax. Check [this api](https://eventcatalog.dev/).
          </Admonition>

          <Admonition type={'warning'} title={"Warning"}>
            Some content with _Markdown_ syntax. Check [this api](https://eventcatalog.dev/).
          </Admonition>

          <Admonition type={'danger'} title={"Danger"}>
            Some content with _Markdown_ syntax. Check [this api](https://eventcatalog.dev/).
          </Admonition>

        </div>


        </div>
    </Root>
);
}
