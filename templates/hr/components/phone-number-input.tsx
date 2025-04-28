'use client';

import * as React from 'react';
import * as PopoverPrimitives from '@radix-ui/react-popover';
import {
  RiArrowDownSLine,
  RiGlobalLine,
  RiSearch2Line,
} from '@remixicon/react';
import { Command } from 'cmdk';
import {
  getExampleNumber,
  getPhoneCode,
  type CountryCode,
} from 'libphonenumber-js';
import examplePhoneNumbers from 'libphonenumber-js/examples.mobile.json';

import { selectedCountries } from '@/lib/countries';
import countryNames from '@/lib/country-names.json';
import { cn } from '@/utils/cn';
import * as Divider from '@/components/ui/divider';
import * as Input from '@/components/ui/input';
import { selectVariants } from '@/components/ui/select';

const countriesWithPhoneAndName = selectedCountries.reduce(
  (acc, code) => {
    acc[code] = {
      phoneCode: getPhoneCode(code),
      // @ts-ignore
      countryName: countryNames[code],
    };
    return acc;
  },
  {} as Record<CountryCode, Record<string, string>>,
);

export function PhoneNumberInput({ inputId }: { inputId?: string }) {
  const [open, setOpen] = React.useState(false);
  const [selectedCountryCode, setSelectedCountryCode] =
    React.useState<CountryCode>('US');

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const { triggerRoot, triggerIcon, triggerArrow } = selectVariants({
    variant: 'compactForInput',
  });

  const exampleNumber = getExampleNumber(
    selectedCountryCode,
    examplePhoneNumbers,
  );

  return (
    <div>
      <PopoverPrimitives.Root modal open={open} onOpenChange={setOpen}>
        <PopoverPrimitives.Anchor>
          <Input.Root>
            <PopoverPrimitives.Trigger className={triggerRoot()}>
              {selectedCountryCode ? (
                <>
                  <img
                    src={`/flags/${selectedCountryCode}.svg`}
                    className={triggerIcon()}
                    alt=''
                  />
                  +
                  {
                    Object.entries(countriesWithPhoneAndName).find(
                      ([countryCode]) => countryCode === selectedCountryCode,
                    )?.[1].phoneCode
                  }
                </>
              ) : (
                <RiGlobalLine className={triggerIcon()} />
              )}
              <RiArrowDownSLine className={triggerArrow()} />
            </PopoverPrimitives.Trigger>

            <Input.Wrapper>
              <Input.Input
                ref={inputRef}
                id={inputId}
                type='text'
                placeholder={exampleNumber?.formatNational()}
              />
            </Input.Wrapper>
          </Input.Root>
        </PopoverPrimitives.Anchor>
        <PopoverPrimitives.Portal>
          <PopoverPrimitives.Content
            onCloseAutoFocus={(e) => e.preventDefault()}
            sideOffset={10}
            collisionPadding={10}
            className={cn(
              // base
              'relative z-50 overflow-hidden rounded-2xl bg-bg-white-0 shadow-regular-md ring-1 ring-inset ring-stroke-soft-200',
              // widths
              'min-w-[--radix-popper-anchor-width]',
              // animation
              'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
              'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
            )}
          >
            <Command
              filter={(value, search, keywords) => {
                const extendValue = value + ' ' + keywords?.join(' ');
                if (
                  extendValue
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase())
                )
                  return 1;
                return 0;
              }}
            >
              <div className='flex items-center gap-2 px-4 pt-2'>
                <RiSearch2Line className='size-5 text-text-soft-400' />
                <Command.Input
                  className='h-9 w-full bg-transparent text-paragraph-sm outline-none placeholder:text-text-soft-400'
                  placeholder='Search...'
                />
              </div>
              <div className='my-1 px-2'>
                <Divider.Root variant='line-spacing' />
              </div>
              <Command.List className='max-h-[188px] overflow-auto p-2 pt-0'>
                <Command.Empty>No country found.</Command.Empty>
                {Object.entries(countriesWithPhoneAndName)
                  .sort(([_aCode, aCountryData], [_bCode, bCountryData]) =>
                    aCountryData.countryName.localeCompare(
                      bCountryData.countryName,
                    ),
                  )
                  .map(([countryCode, countryData]) => (
                    <Command.Item
                      key={countryCode}
                      value={countryCode}
                      keywords={[
                        countryData.countryName,
                        countryData.phoneCode,
                      ]}
                      onSelect={(currentValue) => {
                        setSelectedCountryCode(currentValue as CountryCode);
                        setOpen(false);
                        setTimeout(() => inputRef?.current?.focus());
                      }}
                      className={cn(
                        // base
                        'group cursor-pointer select-none rounded-lg p-2 text-paragraph-sm text-text-strong-950',
                        'flex items-center gap-2',
                        // disabled
                        'data-[disabled=true]:pointer-events-none data-[disabled=true]:text-text-disabled-300',
                        // hover, focus
                        'data-[selected=true]:bg-bg-weak-50 data-[selected]:outline-0',
                      )}
                    >
                      <div className='flex items-center gap-1.5'>
                        <img
                          src={`/flags/${countryCode}.svg`}
                          className='size-5 shrink-0 rounded-full'
                          alt=''
                        />
                        <span className='group-has-[&]/trigger:hidden'>
                          {countryData.countryName}
                        </span>
                        <span>
                          <span className='group-has-[&]/trigger:hidden'>
                            (
                          </span>
                          <span>+{countryData.phoneCode}</span>
                          <span className='group-has-[&]/trigger:hidden'>
                            )
                          </span>
                        </span>
                      </div>
                    </Command.Item>
                  ))}
              </Command.List>
            </Command>
          </PopoverPrimitives.Content>
        </PopoverPrimitives.Portal>
      </PopoverPrimitives.Root>
    </div>
  );
}
