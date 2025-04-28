'use client';

import * as React from 'react';
import { RiInformationFill } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as Hint from '@/components/ui/hint';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as Textarea from '@/components/ui/textarea';

export default function Suggestion() {
  const uniqueId = React.useId();

  return (
    <div className='mx-auto flex w-full flex-col gap-4 xl:max-w-[352px]'>
      <div>
        <div className='text-label-md'>Make a Suggestion</div>
        <p className='mt-1 text-paragraph-sm text-text-sub-600'>
          Recommend an Integration to help us.
        </p>
      </div>

      <Divider.Root variant='line-spacing' />

      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor={`${uniqueId}-name`}>
            Integration Name <Label.Asterisk />
          </Label.Root>

          <Input.Root>
            <Input.Wrapper>
              <Input.Input
                id={`${uniqueId}-name`}
                placeholder='Enter integration name...'
              />
            </Input.Wrapper>
          </Input.Root>
        </div>

        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor={`${uniqueId}-website`}>
            Website <Label.Sub>(Optional)</Label.Sub>
          </Label.Root>

          <Input.Root>
            <Input.Affix>https://</Input.Affix>
            <Input.Wrapper>
              <Input.Input
                id={`${uniqueId}-website`}
                placeholder='www.example.com'
              />
            </Input.Wrapper>
          </Input.Root>
        </div>

        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor={`${uniqueId}-reason`}>
            Reason for Recommendation <Label.Asterisk />
          </Label.Root>

          <Textarea.Root
            className='min-h-[58px]'
            id={`${uniqueId}-reason`}
            placeholder='Explain why you recommend this integration...'
          >
            <Textarea.CharCounter current={0} max={200} />
          </Textarea.Root>

          <Hint.Root>
            <Hint.Icon as={RiInformationFill} />
            We may not be able to fulfill every integration request.
          </Hint.Root>
        </div>
      </div>

      <div className='mt-1 grid grid-cols-2 gap-3'>
        <Button.Root variant='neutral' mode='stroke'>
          Discard
        </Button.Root>
        <Button.Root>Submit</Button.Root>
      </div>
    </div>
  );
}
