import Link from 'next/link';
import * as LabelPrimitive from '@radix-ui/react-label';
import { RiMailLine, RiUserAddFill } from '@remixicon/react';

import { cn } from '@/utils/cn';
import * as Checkbox from '@/components/ui/checkbox';
import * as Divider from '@/components/ui/divider';
import * as FancyButton from '@/components/ui/fancy-button';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as LinkButton from '@/components/ui/link-button';
import * as SocialButton from '@/components/ui/social-button';

import IconApple from '~/icons/brands/apple.svg';
import IconGoogle from '~/icons/brands/google.svg';
import IconLinkedin from '~/icons/brands/linkedin.svg';

export default function PageOnboarding() {
  return (
    <div className='flex justify-center py-6 lg:py-12'>
      <div className='mx-auto flex w-full max-w-[392px] flex-col gap-6'>
        <div className='flex flex-col items-center space-y-2'>
          {/* icon */}
          <div
            className={cn(
              'relative flex size-[68px] shrink-0 items-center justify-center rounded-full backdrop-blur-xl lg:size-24',
              // bg
              'before:absolute before:inset-0 before:rounded-full',
              'before:bg-gradient-to-b before:from-neutral-500 before:to-transparent before:opacity-10',
              // stroke
              'after:absolute after:inset-0 after:rounded-full',
              'after:bg-gradient-to-b after:from-neutral-500 after:to-transparent after:opacity-[.16]',
              'after:mask-exclude after:p-px',
            )}
          >
            <div className='relative z-10 flex size-12 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 lg:size-16'>
              <RiUserAddFill className='size-6 text-text-sub-600 lg:size-8' />
            </div>
          </div>

          <div className='space-y-1 text-center'>
            <div className='text-title-h6 lg:text-title-h5'>
              Join Synergy Team
            </div>
            <div className='text-paragraph-sm text-text-sub-600 lg:text-paragraph-md'>
              Get started by submitting email address.
            </div>
          </div>
        </div>

        <div className='grid w-full auto-cols-fr grid-flow-col gap-3'>
          <SocialButton.Root
            mode='stroke'
            brand='apple'
            className='text-social-apple'
          >
            <SocialButton.Icon as={IconApple} />
          </SocialButton.Root>
          <SocialButton.Root mode='stroke' brand='google'>
            <SocialButton.Icon as={IconGoogle} />
          </SocialButton.Root>
          <SocialButton.Root mode='stroke' brand='linkedin'>
            <SocialButton.Icon as={IconLinkedin} />
          </SocialButton.Root>
        </div>

        <Divider.Root variant='line-text'>OR</Divider.Root>

        <div>
          <Label.Root htmlFor='email'>
            Email Address <Label.Asterisk />
          </Label.Root>

          <Input.Root className='mt-1'>
            <Input.Wrapper>
              <Input.Icon as={RiMailLine} />
              <Input.Input
                id='email'
                type='email'
                placeholder='hello@alignui.com'
              />
            </Input.Wrapper>
          </Input.Root>

          <div className='mt-4 flex items-start gap-2'>
            <Checkbox.Root id='agree' />
            <LabelPrimitive.Root
              htmlFor='agree'
              className='block cursor-pointer text-paragraph-sm text-text-sub-600'
            >
              I agree to the{' '}
              <LinkButton.Root variant='black' underline>
                Terms & Conditions
              </LinkButton.Root>{' '}
              and{' '}
              <LinkButton.Root variant='black' underline>
                Privacy Policy
              </LinkButton.Root>
              .
            </LabelPrimitive.Root>
          </div>
        </div>

        <FancyButton.Root variant='primary' size='medium' asChild>
          <Link href='/onboarding/steps'>Get Started</Link>
        </FancyButton.Root>

        <div className='text-center text-paragraph-sm text-text-sub-600'>
          Already have an account?{' '}
          <LinkButton.Root variant='black' underline>
            Login
          </LinkButton.Root>
        </div>
      </div>
    </div>
  );
}
