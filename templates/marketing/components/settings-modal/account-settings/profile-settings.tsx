'use client';

import * as Avatar from '@/components/ui/avatar';
import * as Button from '@/components/ui/button';
import { DashedDivider } from '@/components/dashed-divider';
import { EditableInput } from '@/components/editable-input';

import IconRemove from '~/icons/icon-remove.svg';

export default function ProfileSettings() {
  return (
    <div className='flex flex-col gap-5 p-6'>
      <div className='grid items-center gap-4 sm:grid-cols-[minmax(0,1fr),312px] sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Profile Photo
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Min 400x400px, PNG or JPEG formats.
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <Avatar.Root size='40'>
            <Avatar.Image src='/images/avatar/illustration/james.png' />
            <Avatar.Indicator position='top'>
              <IconRemove />
            </Avatar.Indicator>
          </Avatar.Root>
          <Button.Root variant='neutral' mode='stroke' size='xxsmall'>
            Change
          </Button.Root>
        </div>
      </div>
      <DashedDivider />
      <div className='grid items-center gap-4 sm:grid-cols-[minmax(0,1fr),312px] sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>Full Name</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Your name will be visible to your contacts.
          </div>
        </div>
        <EditableInput value='James Brown' />
      </div>
      <DashedDivider />
      <div className='grid items-center gap-4 sm:grid-cols-[minmax(0,1fr),312px] sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Email Address
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Business email address recommended.
          </div>
        </div>
        <EditableInput value='james@alignui.com' />
      </div>
      <DashedDivider />
      <div className='grid items-center gap-4 sm:grid-cols-[minmax(0,1fr),312px] sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>Phone Number</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Business phone number recommended.
          </div>
        </div>
        <EditableInput value='+1 (012) 345-6789' />
      </div>
    </div>
  );
}
