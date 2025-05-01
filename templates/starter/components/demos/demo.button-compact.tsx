
import * as React from 'react';

import { StoryPage } from './templates/story.page';
import { StoryBlock } from './templates/story.block';
import {
  RiSquareLine,
} from '@remixicon/react';
import * as CompactButton from '../ui/compact-button';
import { RiAddLine, type RemixiconComponentType } from '@remixicon/react';
import * as CompactButtonPrimitives from '../ui/compact-button';











const CompactButtonComposition = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof CompactButtonPrimitives.Root> & {
  icon: RemixiconComponentType;
}
>(({ children, icon: Icon, ...rest }, forwardedRef) => {
  return (
    <CompactButtonPrimitives.Root ref={forwardedRef} {...rest}>
      <CompactButtonPrimitives.Icon as={Icon} />
    </CompactButtonPrimitives.Root>
  );
});
















export const ButtonCompactStory = () => {
  return (
    <StoryPage>
      <StoryBlock title='Compact Button' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <CompactButton.Root>
            <CompactButton.Icon as={RiAddLine} />
          </CompactButton.Root>
        </div>
      </StoryBlock>

      <StoryBlock title='Stroke' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <CompactButton.Root variant='stroke'>
            <CompactButton.Icon as={RiAddLine} />
          </CompactButton.Root>
        </div>
      </StoryBlock>

      <StoryBlock title='Ghost' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <CompactButton.Root variant='ghost'>
            <CompactButton.Icon as={RiAddLine} />
          </CompactButton.Root>
        </div>
      </StoryBlock>



      <StoryBlock title='White' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <CompactButton.Root variant='white'>
            <CompactButton.Icon as={RiAddLine} />
          </CompactButton.Root>
        </div>
      </StoryBlock>



      <StoryBlock title='Modifiable' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <CompactButton.Root
            variant='modifiable'
            className='text-error-base hover:bg-error-lighter'
          >
            <CompactButton.Icon as={RiAddLine} />
          </CompactButton.Root>

        </div>
      </StoryBlock>


      <StoryBlock title='Size' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <CompactButton.Root>
            <CompactButton.Icon as={RiAddLine} />
          </CompactButton.Root>

          <CompactButton.Root size='medium'>
            <CompactButton.Icon as={RiAddLine} />
          </CompactButton.Root>

        </div>
      </StoryBlock>


      <StoryBlock title='Full Radius' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <CompactButton.Root fullRadius>
            <CompactButton.Icon as={RiAddLine} />
          </CompactButton.Root>

        </div>
      </StoryBlock>


      <StoryBlock title='Disabled' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <CompactButton.Root disabled>
            <CompactButton.Icon as={RiAddLine} />
          </CompactButton.Root>

        </div>
      </StoryBlock>


      <StoryBlock title='asChild' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <CompactButton.Root asChild>
            <a href='#'>
              <CompactButton.Icon as={RiAddLine} />
            </a>
          </CompactButton.Root>

        </div>
      </StoryBlock>

      <StoryBlock title='Composition' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <CompactButtonComposition icon={RiAddLine} variant='stroke' />

        </div>
      </StoryBlock>



    </StoryPage>

  );
};
