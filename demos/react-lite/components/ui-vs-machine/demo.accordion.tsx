'use client';

import * as Accordion from '../ui/accordion';
import { StoryPage } from './templates/story.page';
import { StoryBlock } from './templates/story.block';
import { RiSquareLine } from '@remixicon/react';

import {
  RiAccountCircleLine,
  RiMapPinTimeLine,
  RiQuestionLine,
} from '@remixicon/react';



// Machine Accordion
import * as accordion from "@ui-collection-kit/accordion"
import { normalizeProps, useMachine } from "@ui-collection-kit/react"
import { useId } from "react"

const items = [
  {
    title: "Watercraft",
    desc: "Yacht, Boats and Dinghies",
    content: "Sample accordion content",
  },
  {
    title: "Automobiles",
    desc: "Cars, Trucks and Vans",
    content: "Sample accordion content",
  },
  {
    title: "Aircraft",
    desc: "Airplanes, Helicopters and Rockets",
    content: "Sample accordion content",
  },
]

type AccordionProps = {
  controls: {
    collapsible: boolean
    multiple: boolean
  }
}


export function AccordionMachine(props: AccordionProps | any) {
  const service = useMachine(accordion.machine, {
    id: useId(),
    defaultValue: ['Aircraft'],
    ...props.controls,
  });

  const api = accordion.connect(service, normalizeProps);

  return (
    <div {...api.getRootProps()}>
      {items.map((item) => (
        <div key={item.title} {...api.getItemProps({ value: item.title })}>
          <h3>
            <button {...api.getItemTriggerProps({ value: item.title })}>
              <div>{item.title}</div>
              <div>{item.desc}</div>
            </button>
          </h3>
          <div {...api.getItemContentProps({ value: item.title })}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}




// render storybook accordion blocks

export const AccordionStory = () => {
  return (
    <StoryPage>
      <StoryBlock title='Accordion AlignUi' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <Accordion.Root type='single' collapsible className='space-y-6'>
            <Accordion.Item value='a'>
              <Accordion.Trigger>
                <Accordion.Icon as={RiAccountCircleLine} />
                How do I update my account information?
                <Accordion.Arrow />
              </Accordion.Trigger>
              <Accordion.Content className='px-[30px]'>
                Insert the accordion description here. It would look better as
                two lines of text.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value='b'>
              <Accordion.Trigger>
                <Accordion.Icon as={RiQuestionLine} />
                What payment methods are accepted?
                <Accordion.Arrow />
              </Accordion.Trigger>
              <Accordion.Content className='px-[30px]'>
                Major credit and debit cards like Visa, MasterCard, and American
                Express, as well as digital payment options like PayPal and
                Apple Pay.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value='c'>
              <Accordion.Trigger>
                <Accordion.Icon as={RiMapPinTimeLine} />
                How can I track my order?
                <Accordion.Arrow />
              </Accordion.Trigger>
              <Accordion.Content className='px-[30px]'>
                Insert the accordion description here. It would look better as
                two lines of text.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </StoryBlock>

      <StoryBlock title='AccordionMachine' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <AccordionMachine />
        </div>
      </StoryBlock>

    </StoryPage>
  );
};
