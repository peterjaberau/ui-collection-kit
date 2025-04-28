'use client';

import * as React from 'react';
import { RiShareForwardBoxLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as Divider from '@/components/ui/divider';
import * as Label from '@/components/ui/label';
import * as Select from '@/components/ui/select';
import * as Tooltip from '@/components/ui/tooltip';

import IconInfoCustomFill from '~/icons/icon-info-custom-fill.svg';

export default function ExportData() {
  const uniqueId = React.useId();

  return (
    <div className='flex w-full flex-col gap-4'>
      <div>
        <div className='text-label-md'>Export Data</div>
        <p className='mt-1 text-paragraph-sm text-text-sub-600'>
          Export your HR data for personal records.
        </p>
      </div>

      <Divider.Root variant='line-spacing' />

      <div className='flex items-center gap-2'>
        <Checkbox.Root id={`${uniqueId}-c1`} defaultChecked />
        <Label.Root className='text-paragraph-sm' htmlFor={`${uniqueId}-c1`}>
          Include Company Information
        </Label.Root>
      </div>

      <div className='flex items-center gap-2'>
        <Checkbox.Root id={`${uniqueId}-c2`} defaultChecked />
        <Label.Root className='text-paragraph-sm' htmlFor={`${uniqueId}-c2`}>
          Employee Management
        </Label.Root>
      </div>

      <div className='flex items-center gap-2'>
        <Checkbox.Root id={`${uniqueId}-c3`} />
        <Label.Root className='text-paragraph-sm' htmlFor={`${uniqueId}-c3`}>
          Leave and Attendance
        </Label.Root>
      </div>

      <div className='flex items-center gap-2'>
        <Checkbox.Root id={`${uniqueId}-c4`} />
        <Label.Root className='text-paragraph-sm' htmlFor={`${uniqueId}-c4`}>
          Performance Analytics
        </Label.Root>
      </div>

      <Divider.Root variant='line-spacing' />

      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor={`${uniqueId}-file-format`}>
            Select preferred file format <Label.Asterisk />
            <Tooltip.Root>
              <Tooltip.Trigger>
                <IconInfoCustomFill className='size-5 text-text-disabled-300' />
              </Tooltip.Trigger>
              <Tooltip.Content side='top' size='xsmall'>
                Select the preferred file format for downloading or exporting
                your document
              </Tooltip.Content>
            </Tooltip.Root>
          </Label.Root>

          <Select.Root defaultValue='docx'>
            <Select.Trigger id={`${uniqueId}-file-format`}>
              <Select.Value placeholder='Select a file format' />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value='docx'>Word Document (DOCX)</Select.Item>
              <Select.Item value='excel'>Excel Spreadsheet (XLSX)</Select.Item>
              <Select.Item value='pptx'>
                PowerPoint Presentation (PPTX)
              </Select.Item>
              <Select.Item value='txt'>Plain Text File (TXT)</Select.Item>
              <Select.Item value='csv'>CSV File (CSV)</Select.Item>
              <Select.Item value='json'>JSON File (JSON)</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </div>

      <Button.Root mode='stroke' className='mt-1 w-full'>
        <Button.Icon as={RiShareForwardBoxLine} />
        Export
      </Button.Root>
    </div>
  );
}
