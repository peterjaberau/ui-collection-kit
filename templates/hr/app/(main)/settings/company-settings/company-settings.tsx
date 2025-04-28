'use client';

import * as React from 'react';
import { RiInformationFill } from '@remixicon/react';
import { Button as AriaButton, FileTrigger } from 'react-aria-components';

import * as Avatar from '@/components/ui/avatar';
import * as Button from '@/components/ui/button';
import * as Divider from '@/components/ui/divider';
import * as Hint from '@/components/ui/hint';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as Textarea from '@/components/ui/textarea';

export default function CompanySettings() {
  let [file, setFile] = React.useState<string | string[] | null>(null);
  const uniqueId = React.useId();

  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='flex gap-5'>
        <Avatar.Root size='64' />
        <div className='space-y-3'>
          <div className='space-y-1'>
            <div className='text-label-md text-text-strong-950'>
              Upload Image
            </div>
            <div className='text-paragraph-sm text-text-sub-600'>
              Min 400x400px, PNG or JPEG
            </div>
          </div>
          <div className='flex gap-3'>
            <FileTrigger
              onSelect={(e) => {
                let files = Array.from(e!);
                let filenames = files.map((file) => file.name);
                setFile(filenames);
              }}
            >
              <Button.Root
                variant='neutral'
                mode='stroke'
                size='xsmall'
                asChild
              >
                <AriaButton>Upload</AriaButton>
              </Button.Root>
            </FileTrigger>
          </div>
        </div>
      </div>

      <Divider.Root variant='line-spacing' />

      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor={`${uniqueId}-name`}>
            Company Name <Label.Asterisk />
          </Label.Root>

          <Input.Root>
            <Input.Wrapper>
              <Input.Input id={`${uniqueId}-name`} defaultValue='Synergy HR' />
            </Input.Wrapper>
          </Input.Root>
        </div>

        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor={`${uniqueId}-url`}>
            Website URL <Label.Asterisk />
          </Label.Root>

          <Input.Root>
            <Input.Affix>https://</Input.Affix>
            <Input.Wrapper>
              <Input.Input
                id={`${uniqueId}-url`}
                placeholder='synergyhr.com'
                defaultValue='synergyhr.com'
              />
            </Input.Wrapper>
          </Input.Root>
        </div>

        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor={`${uniqueId}-slogan`}>
            Slogan/Catchphrase <Label.Asterisk />
          </Label.Root>

          <Input.Root>
            <Input.Wrapper>
              <Input.Input
                id={`${uniqueId}-slogan`}
                placeholder='e.g. Unlocking Potential, Inspiring Growth.'
              />
            </Input.Wrapper>
          </Input.Root>
        </div>

        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor={`${uniqueId}-description`}>
            Company Description <Label.Sub>(Optional)</Label.Sub>
          </Label.Root>

          <Textarea.Root
            className='min-h-[58px]'
            id={`${uniqueId}-description`}
            placeholder='Describe your company...'
          >
            <Textarea.CharCounter current={0} max={200} />
          </Textarea.Root>

          <Hint.Root>
            <Hint.Icon as={RiInformationFill} />
            You can describe your company briefly.
          </Hint.Root>
        </div>
      </div>

      <div className='mt-1 grid grid-cols-2 gap-3'>
        <Button.Root variant='neutral' mode='stroke'>
          Discard
        </Button.Root>
        <Button.Root>Apply Changes</Button.Root>
      </div>
    </div>
  );
}
