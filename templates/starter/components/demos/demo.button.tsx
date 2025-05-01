'use client';

import * as Button from '../ui/button';
import { StoryPage } from './templates/story.page';
import { StoryBlock } from './templates/story.block';
import {
  RiSquareLine,
} from '@remixicon/react';
import { Slottable } from '@radix-ui/react-slot';
import * as ButtonPrimitives from '../ui/button';
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiFileCopyLine,
  type RemixiconComponentType,
} from '@remixicon/react';


export const ButtonStory = () => {
  return (
    <StoryPage>
      <StoryBlock title='Primary' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <Button.Root variant='primary' mode='filled'>
            Get Started
          </Button.Root>
          <Button.Root variant='primary' mode='stroke'>
            Get Started
          </Button.Root>
          <Button.Root variant='primary' mode='lighter'>
            Get Started
          </Button.Root>
          <Button.Root variant='primary' mode='ghost'>
            Get Started
          </Button.Root>
        </div>
      </StoryBlock>

      <StoryBlock title='Neutral' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <Button.Root variant='neutral' mode='filled'>
            Learn More
          </Button.Root>
          <Button.Root variant='neutral' mode='stroke'>
            Learn More
          </Button.Root>
          <Button.Root variant='neutral' mode='lighter'>
            Learn More
          </Button.Root>
          <Button.Root variant='neutral' mode='ghost'>
            Learn More
          </Button.Root>
        </div>
      </StoryBlock>

      <StoryBlock title='Size' icon={RiSquareLine}>

        <div className='flex flex-col items-center gap-8'>
          {/* prettier-ignore */}
          <div className='flex flex-col items-center gap-4'>
            <div className='flex items-center gap-4'>
              <Button.Root size='medium'>Medium</Button.Root>
              <Button.Root size='small'>Small</Button.Root>
              <Button.Root size='xsmall'>Xsmall</Button.Root>
              <Button.Root size='xxsmall'>Xxsmall</Button.Root>
            </div>
            <div className='flex items-center gap-4'>
              <Button.Root size='medium' mode='stroke'>Medium</Button.Root>
              <Button.Root size='small' mode='stroke'>Small</Button.Root>
              <Button.Root size='xsmall' mode='stroke'>Xsmall</Button.Root>
              <Button.Root size='xxsmall' mode='stroke'>Xxsmall</Button.Root>
            </div>
            <div className='flex items-center gap-4'>
              <Button.Root size='medium' mode='lighter'>Medium</Button.Root>
              <Button.Root size='small' mode='lighter'>Small</Button.Root>
              <Button.Root size='xsmall' mode='lighter'>Xsmall</Button.Root>
              <Button.Root size='xxsmall' mode='lighter'>Xxsmall</Button.Root>
            </div>
            <div className='flex items-center gap-4'>
              <Button.Root size='medium' mode='ghost'>Medium</Button.Root>
              <Button.Root size='small' mode='ghost'>Small</Button.Root>
              <Button.Root size='xsmall' mode='ghost'>Xsmall</Button.Root>
              <Button.Root size='xxsmall' mode='ghost'>Xxsmall</Button.Root>
            </div>
          </div>
        </div>

      </StoryBlock>



      <StoryBlock title='Error' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <Button.Root variant='error' mode='filled'>
            Try Again
          </Button.Root>
          <Button.Root variant='error' mode='stroke'>
            Try Again
          </Button.Root>
          <Button.Root variant='error' mode='lighter'>
            Try Again
          </Button.Root>
          <Button.Root variant='error' mode='ghost'>
            Try Again
          </Button.Root>
        </div>
      </StoryBlock>


      <StoryBlock title='Button Disabled' icon={RiSquareLine}>

          <div className='flex flex-col items-center gap-4'>
            <Button.Root disabled>Disabled</Button.Root>
            <Button.Root mode='stroke' disabled>
              Disabled
            </Button.Root>
            <Button.Root mode='lighter' disabled>
              Disabled
            </Button.Root>
            <Button.Root mode='ghost' disabled>
              Disabled
            </Button.Root>
          </div>
      </StoryBlock>



      <StoryBlock title='Button With Icon' icon={RiSquareLine}>

        <div className='flex flex-col items-center gap-4'>
          <Button.Root>
            Button
            <Button.Icon as={RiArrowRightSLine} />
          </Button.Root>

          <Button.Root>
            <Button.Icon as={RiFileCopyLine} />
          </Button.Root>
        </div>
      </StoryBlock>


      <StoryBlock title='Button Full Width' icon={RiSquareLine}>
        <div className='mx-auto w-full max-w-96'>
          <Button.Root variant='neutral' className='w-full'>
            Learn More
          </Button.Root>
        </div>


      </StoryBlock>

      <StoryBlock title='Button As Child' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <Button.Root asChild>
            <a href='#'>As link</a>
          </Button.Root>
        </div>
      </StoryBlock>



      <StoryBlock title='Button Primitives' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>

          leadingIcon?: RemixiconComponentType;
          trailingIcon?: RemixiconComponentType;

          Error


        </div>
      </StoryBlock>








    </StoryPage>
  );
};
