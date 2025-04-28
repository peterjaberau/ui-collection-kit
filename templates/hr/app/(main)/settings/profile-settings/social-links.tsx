'use client';

import * as React from 'react';
import { RiAddLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';

export default function SocialLinks() {
  const uniqueId = React.useId();

  return (
    <div className='flex w-full flex-col gap-4'>
      <div>
        <div className='text-label-md'>Social Links</div>
        <p className='mt-1 text-paragraph-sm text-text-sub-600'>
          Manage your social media connections.
        </p>
      </div>

      <Divider.Root variant='line-spacing' />

      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor={`${uniqueId}-facebook`}>
            Facebook <Label.Sub>(Optional)</Label.Sub>
          </Label.Root>

          <Input.Root>
            <Input.Affix>facebook.com</Input.Affix>
            <Input.Wrapper>
              <Input.Input id={`${uniqueId}-facebook`} placeholder='username' />
            </Input.Wrapper>
          </Input.Root>
        </div>

        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor={`${uniqueId}-instagram`}>
            Instagram <Label.Sub>(Optional)</Label.Sub>
          </Label.Root>

          <Input.Root>
            <Input.Affix>instagram.com</Input.Affix>
            <Input.Wrapper>
              <Input.Input
                id={`${uniqueId}-instagram`}
                placeholder='username'
              />
            </Input.Wrapper>
          </Input.Root>
        </div>

        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor={`${uniqueId}-x`}>
            X <Label.Sub>(Optional)</Label.Sub>
          </Label.Root>

          <Input.Root>
            <Input.Affix>x.com</Input.Affix>
            <Input.Wrapper>
              <Input.Input id={`${uniqueId}-x`} placeholder='username' />
            </Input.Wrapper>
          </Input.Root>
        </div>
      </div>

      <Button.Root variant='neutral' mode='stroke' className='mt-1 w-full'>
        <Button.Icon as={RiAddLine} />
        Add Social Link
      </Button.Root>
    </div>
  );
}
