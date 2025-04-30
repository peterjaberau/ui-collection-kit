import { ChevronDownIcon } from 'lucide-react';
import { StoryPage } from './templates/story.page';
import { StoryBlock } from './templates/story.block';
import * as Accordion from "../../ui/accordion";

import {RiAccountCircleLine, RiMapPinTimeLine, RiQuestionLine, RiSquareLine} from '@remixicon/react';


export const AccordionStory = () => {
    return (
    <StoryPage>


        <StoryBlock title='Basic' icon={RiSquareLine}>
            <div className='flex flex-col items-center gap-4'>
                <Accordion.Root multiple={true} collapsible className='space-y-6'>
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




    </StoryPage>
  );
};
