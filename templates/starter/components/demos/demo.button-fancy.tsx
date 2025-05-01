
import * as React from 'react';
import * as FancyButton from '../ui/fancy-button';


import { StoryPage } from './templates/story.page';
import { StoryBlock } from './templates/story.block';
import {
  RiSquareLine,
} from '@remixicon/react';
import * as CompactButtonPrimitives from '../ui/compact-button';
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  type RemixiconComponentType,
} from '@remixicon/react';




















export const ButtonFancyStory = () => {
  return (
    <StoryPage>
      <StoryBlock title='Fancy Button' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <FancyButton.Root>Button</FancyButton.Root>
        </div>
      </StoryBlock>
      <StoryBlock title='Neutral' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <FancyButton.Root variant='neutral'>Button</FancyButton.Root>
        </div>
      </StoryBlock>

      <StoryBlock title='Primary' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <FancyButton.Root variant='primary'>Button</FancyButton.Root>
        </div>
      </StoryBlock>
      <StoryBlock title='Destructive' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <FancyButton.Root variant='destructive'>Button</FancyButton.Root>
        </div>
      </StoryBlock>
      <StoryBlock title='Basic' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <FancyButton.Root variant='basic'>Button</FancyButton.Root>
        </div>
      </StoryBlock>

      <StoryBlock title='With Icon' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <FancyButton.Root>
            <FancyButton.Icon as={RiArrowLeftSLine} />
            Button
            <FancyButton.Icon as={RiArrowRightSLine} />
          </FancyButton.Root>        </div>
      </StoryBlock>

      <StoryBlock title='Size' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <FancyButton.Root size='medium'>
            <FancyButton.Icon as={RiArrowLeftSLine} />
            Button
            <FancyButton.Icon as={RiArrowRightSLine} />
          </FancyButton.Root>

          <FancyButton.Root size='small'>
            <FancyButton.Icon as={RiArrowLeftSLine} />
            Button
            <FancyButton.Icon as={RiArrowRightSLine} />
          </FancyButton.Root>

          <FancyButton.Root size='xsmall'>
            <FancyButton.Icon as={RiArrowLeftSLine} />
            Button
            <FancyButton.Icon as={RiArrowRightSLine} />
          </FancyButton.Root>
        </div>
      </StoryBlock>

      <StoryBlock title='Disable' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <FancyButton.Root disabled variant='neutral'>
            <FancyButton.Icon as={RiArrowLeftSLine} />
            Button
            <FancyButton.Icon as={RiArrowRightSLine} />
          </FancyButton.Root>
          <FancyButton.Root disabled variant='destructive'>
            <FancyButton.Icon as={RiArrowLeftSLine} />
            Button
            <FancyButton.Icon as={RiArrowRightSLine} />
          </FancyButton.Root>
          <FancyButton.Root disabled variant='primary'>
            <FancyButton.Icon as={RiArrowLeftSLine} />
            Button
            <FancyButton.Icon as={RiArrowRightSLine} />
          </FancyButton.Root>
          <FancyButton.Root disabled variant='basic'>
            <FancyButton.Icon as={RiArrowLeftSLine} />
            Button
            <FancyButton.Icon as={RiArrowRightSLine} />
          </FancyButton.Root>
        </div>
      </StoryBlock>

      <StoryBlock title='asChild' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <FancyButton.Root asChild>
            <a href='#'>Button</a>
          </FancyButton.Root>
        </div>
      </StoryBlock>








    </StoryPage>

  );
};
