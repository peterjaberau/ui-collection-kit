'use client';

import * as Button from '../ui/button';
import { StoryPage } from './templates/story.page';
import { StoryBlock } from './templates/story.block';
import {
  RiSquareLine,
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

      <StoryBlock title='Size' icon={RiSquareLine}>

      </StoryBlock>

    </StoryPage>
  );
};
