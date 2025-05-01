import * as ButtonGroup from '../ui/button-group';
import { RiLayout2Line, RiLayoutGridLine, RiListCheck } from '@remixicon/react';


import { StoryPage } from './templates/story.page';
import { StoryBlock } from './templates/story.block';
import {
  RiSquareLine,
} from '@remixicon/react';
;





export const ButtonGroupStory = () => {
  return (
    <StoryPage>
      <StoryBlock title='Size' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <ButtonGroup.Root>
            <ButtonGroup.Item>
              <ButtonGroup.Icon as={RiLayoutGridLine} />
              Grid view
            </ButtonGroup.Item>
            <ButtonGroup.Item>
              <ButtonGroup.Icon as={RiListCheck} />
              List view
            </ButtonGroup.Item>
            <ButtonGroup.Item>
              <ButtonGroup.Icon as={RiLayout2Line} />
              Gallery view
            </ButtonGroup.Item>
          </ButtonGroup.Root>
        </div>
      </StoryBlock>

      <StoryBlock title='Radix Toggle Group' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          @radix-ui/react-toggle-group -- not installed in the project

        </div>
      </StoryBlock>

      <StoryBlock title='Radix Toggle Group' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-6'>
          <ButtonGroup.Root>
            <ButtonGroup.Item>
              <ButtonGroup.Icon as={RiLayoutGridLine} />
              Grid view
            </ButtonGroup.Item>
            <ButtonGroup.Item>
              <ButtonGroup.Icon as={RiListCheck} />
              List view
            </ButtonGroup.Item>
            <ButtonGroup.Item>
              <ButtonGroup.Icon as={RiLayout2Line} />
              Gallery view
            </ButtonGroup.Item>
          </ButtonGroup.Root>

          <ButtonGroup.Root size='xsmall'>
            <ButtonGroup.Item>
              <ButtonGroup.Icon as={RiLayoutGridLine} />
              Grid view
            </ButtonGroup.Item>
            <ButtonGroup.Item>
              <ButtonGroup.Icon as={RiListCheck} />
              List view
            </ButtonGroup.Item>
            <ButtonGroup.Item>
              <ButtonGroup.Icon as={RiLayout2Line} />
              Gallery view
            </ButtonGroup.Item>
          </ButtonGroup.Root>

          <ButtonGroup.Root size='xxsmall'>
            <ButtonGroup.Item>
              <ButtonGroup.Icon as={RiLayoutGridLine} />
              Grid view
            </ButtonGroup.Item>
            <ButtonGroup.Item>
              <ButtonGroup.Icon as={RiListCheck} />
              List view
            </ButtonGroup.Item>
            <ButtonGroup.Item>
              <ButtonGroup.Icon as={RiLayout2Line} />
              Gallery view
            </ButtonGroup.Item>
          </ButtonGroup.Root>
        </div>

      </StoryBlock>




    </StoryPage>
  );
};
