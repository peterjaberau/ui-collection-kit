'use client';

import { DashedDivider } from '@/components/dashed-divider';
import { EditableInput } from '@/components/editable-input';

export default function ContactInformation() {
  return (
    <div className='flex flex-col gap-5 p-6'>
      <div className='grid gap-4 sm:grid-cols-[minmax(0,1fr),312px] sm:items-center sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Contact Email
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Your name will be visible to your contacts.
          </div>
        </div>
        <EditableInput value='contact@alignui.com' />
      </div>
      <DashedDivider />
      <div className='grid gap-4 sm:grid-cols-[minmax(0,1fr),312px] sm:items-center sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Support Email
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Email address for customer support inquiries.
          </div>
        </div>
        <EditableInput value='support@alignui.com' />
      </div>
      <DashedDivider />
      <div className='grid gap-4 sm:grid-cols-[minmax(0,1fr),312px] sm:items-center sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>Phone Number</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Business phone number for customer contact.
          </div>
        </div>
        <EditableInput value='+1 (012) 345-6789' />
      </div>
      <DashedDivider />
      <div className='grid gap-4 sm:grid-cols-[minmax(0,1fr),312px] sm:items-center sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            WhatsApp Number
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            WhatsApp contact number for customer messaging.
          </div>
        </div>
        <EditableInput value='+1 (555) 000-0000' />
      </div>
      <DashedDivider />
      <div className='grid gap-4 sm:grid-cols-[minmax(0,1fr),312px] sm:items-center sm:gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>Address</div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Enter your store&apos;s physical location address.
          </div>
        </div>
        <EditableInput placeholder='Enter full store adress...' />
      </div>
      <DashedDivider />
    </div>
  );
}
