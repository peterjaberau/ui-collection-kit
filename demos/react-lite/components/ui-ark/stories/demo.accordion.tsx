import { ChevronDownIcon } from 'lucide-react';
import { StoryPage } from './templates/story.page';
import { StoryBlock } from './templates/story.block';
import * as AccordionAlignUi from '../accordionAlignUi';
import * as AAlign from "../../ui/accordion";

import {RiAccountCircleLine, RiMapPinTimeLine, RiQuestionLine, RiSquareLine} from '@remixicon/react';


export const Accordion = () => {
    return (
    <StoryPage>

        <StoryBlock title='Alignui base on Tailwind' icon={RiSquareLine}>
            {/* @ts-ignore */}

            <div className='flex flex-col items-center gap-4'>

                <AccordionAlignUi.Root multiple={false} collapsible className='space-y-6'>
                    <AccordionAlignUi.Item value='a'>
                        <AccordionAlignUi.Trigger>
                            <AccordionAlignUi.Icon as={RiAccountCircleLine}/>
                            How do I update my account information?
                            <AccordionAlignUi.Arrow/>
                        </AccordionAlignUi.Trigger>
                        <AccordionAlignUi.Content className='px-[30px]'>
                            Insert the accordion description here. It would look better as
                            two lines of text.
                        </AccordionAlignUi.Content>
                    </AccordionAlignUi.Item>

                    <AccordionAlignUi.Item value='b'>
                        <AccordionAlignUi.Trigger>
                            <AccordionAlignUi.Icon as={RiQuestionLine}/>
                            What payment methods are accepted?
                            <AccordionAlignUi.Arrow/>
                        </AccordionAlignUi.Trigger>
                        <AccordionAlignUi.Content className='px-[30px]'>
                            Major credit and debit cards like Visa, MasterCard, and American
                            Express, as well as digital payment options like PayPal and
                            Apple Pay.
                        </AccordionAlignUi.Content>
                    </AccordionAlignUi.Item>

                    <AccordionAlignUi.Item value='c'>
                        <AccordionAlignUi.Trigger>
                            <AccordionAlignUi.Icon as={RiMapPinTimeLine}/>
                            How can I track my order?
                            <AccordionAlignUi.Arrow/>
                        </AccordionAlignUi.Trigger>
                        <AccordionAlignUi.Content className='px-[30px]'>
                            Insert the accordion description here. It would look better as
                            two lines of text.
                        </AccordionAlignUi.Content>
                    </AccordionAlignUi.Item>
                </AccordionAlignUi.Root>

            </div>
        </StoryBlock>

        <StoryBlock title='Basic' icon={RiSquareLine}>
            <div className='flex flex-col items-center gap-4'>
                <AAlign.Root type='single' collapsible className='space-y-6'>
                    <AAlign.Item value='a'>
                        <AAlign.Trigger>
                            <AAlign.Icon as={RiAccountCircleLine} />
                            How do I update my account information?
                            <AAlign.Arrow />
                        </AAlign.Trigger>
                        <AAlign.Content className='px-[30px]'>
                            Insert the accordion description here. It would look better as
                            two lines of text.
                        </AAlign.Content>
                    </AAlign.Item>

                    <AAlign.Item value='b'>
                        <AAlign.Trigger>
                            <AAlign.Icon as={RiQuestionLine} />
                            What payment methods are accepted?
                            <AAlign.Arrow />
                        </AAlign.Trigger>
                        <AAlign.Content className='px-[30px]'>
                            Major credit and debit cards like Visa, MasterCard, and American
                            Express, as well as digital payment options like PayPal and
                            Apple Pay.
                        </AAlign.Content>
                    </AAlign.Item>

                    <AAlign.Item value='c'>
                        <AAlign.Trigger>
                            <AAlign.Icon as={RiMapPinTimeLine} />
                            How can I track my order?
                            <AAlign.Arrow />
                        </AAlign.Trigger>
                        <AAlign.Content className='px-[30px]'>
                            Insert the accordion description here. It would look better as
                            two lines of text.
                        </AAlign.Content>
                    </AAlign.Item>
                </AAlign.Root>
            </div>
        </StoryBlock>




    </StoryPage>
  );
};
