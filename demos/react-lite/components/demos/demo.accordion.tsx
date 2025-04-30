'use client';

import * as Accordion from '../ui/accordion';
import { StoryPage } from './templates/story.page';
import { StoryBlock } from './templates/story.block';
import { RiSquareLine } from '@remixicon/react';

import {
  RiAccountCircleLine,
  RiMapPinTimeLine,
  RiQuestionLine,
} from '@remixicon/react';
import { RiAddLine, RiSubtractLine } from '@remixicon/react';

import {
  RiArrowDownSLine,
  RiCheckboxCircleFill,
  RiLoader2Line,
} from '@remixicon/react';

//@ts-ignore
import { useQRCode } from 'use-qrcode-hook';

import * as Badge from '../ui/badge';
import * as Button from '../ui/button';
import * as Input from '../ui/input';
import * as Label from '../ui/label';
import * as CompactButton from '../ui/compact-button';

import { cn } from '../../utils/cn';

type AccordionSectionProps = {
  value: string;
  title: string;
  steps: string[];
  isLast?: boolean;
};

const AccordionSection = ({
  value,
  title,
  steps,
  isLast = false,
}: AccordionSectionProps) => (
  <AccordionItem value={value} isLast={isLast}>
    <AccordionTrigger>
      <div className='flex w-full items-center'>
        <span className='text-label-sm text-text-sub-600 group-hover:text-text-strong-950 group-data-[state=open]:text-text-strong-950'>
          {title}
        </span>
      </div>
    </AccordionTrigger>
    <AccordionContent>{steps}</AccordionContent>
  </AccordionItem>
);

function IconInfoCustom(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 16.25a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5zm1.116-3.041l.1-.408a1.709 1.709 0 01-.25.083 1.176 1.176 0 01-.308.048c-.193 0-.329-.032-.407-.095-.079-.064-.118-.184-.118-.359a3.514 3.514 0 01.118-.672l.373-1.318c.037-.121.062-.255.075-.4a3.73 3.73 0 00.02-.304.866.866 0 00-.292-.678c-.195-.174-.473-.26-.833-.26-.2 0-.412.035-.636.106-.224.07-.459.156-.704.256l-.1.409c.073-.028.16-.057.262-.087.101-.03.2-.045.297-.045.198 0 .331.034.4.1.07.066.105.185.105.354 0 .093-.01.197-.034.31a6.216 6.216 0 01-.084.36l-.374 1.325c-.033.14-.058.264-.073.374-.015.11-.022.22-.022.325 0 .272.1.496.301.673.201.177.483.265.846.265.236 0 .443-.03.621-.092s.417-.152.717-.27zM11.05 7.85a.772.772 0 00.26-.587.78.78 0 00-.26-.59.885.885 0 00-.628-.244.893.893 0 00-.63.244.778.778 0 00-.264.59c0 .23.088.426.263.587a.897.897 0 00.63.243.888.888 0 00.629-.243z'
        fill='currentColor'
      />
    </svg>
  );
}

const Divider = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn('relative h-0 w-full text-stroke-soft-200', className)}
      role='separator'
    >
      <div
        className='absolute left-0 h-px w-full'
        style={{
          background:
            'linear-gradient(90deg, currentColor 4px, transparent 4px) 50% 50% / 8px 1px repeat no-repeat',
        }}
      />
    </div>
  );
};

const AccordionItem = ({
  children,
  value,
  isLast,
}: {
  children: React.ReactNode;
  value: string;
  isLast: boolean;
}) => (
  <Accordion.Item
    value={value}
    className={cn(
      'pb-4',
      'group transition-colors duration-200',
      '[&:hover_[data-hover]]:border-transparent',
      '[&:hover_[data-hover]]:bg-bg-weak-50',
      '[&:hover_[data-hover]]:text-text-strong-950',
      '[&:hover_[data-hover]]:shadow-none',
      '[&[data-state=open]_[data-hover]]:border-transparent',
      '[&[data-state=open]_[data-hover]]:bg-bg-surface-800',
      '[&[data-state=open]_[data-hover]]:text-text-strong-950',
      '[&[data-state=open]_[data-hover]]:shadow-none',
    )}
  >
    {children}
    {!isLast && <Divider className='pt-4' />}
  </Accordion.Item>
);
const AccordionTrigger = ({ children }: { children: React.ReactNode }) => {
  return (
    <Accordion.Header>
      <Accordion.Trigger className='group flex w-full items-center justify-between gap-2.5 text-left'>
        <div className='relative z-10 flex items-center'>
          <CompactButton.Root
            asChild
            fullRadius
            data-hover
            className='size-[20px]'
          >
            <div>
              <CompactButton.Icon
                as={({ className }) => (
                  <div className='group-data-[state=open]:hidden'>
                    <RiAddLine className={className} />
                  </div>
                )}
              />
              <CompactButton.Icon
                as={({ className }) => (
                  <div className='hidden group-data-[state=open]:block'>
                    <RiSubtractLine
                      className={cn(
                        className,
                        'rounded-full bg-bg-surface-800 text-white',
                      )}
                    />
                  </div>
                )}
              />
            </div>
          </CompactButton.Root>
        </div>
        {children}
      </Accordion.Trigger>
    </Accordion.Header>
  );
};
const AccordionContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
      <div className='pl-[30px] pt-4'>
        <ol className='space-y-3'>
          {(children as string[]).map((step: string, index: number) => (
            <li
              key={index}
              className='flex items-center gap-2 break-words text-label-sm text-text-sub-600'
            >
              <CompactButton.Root
                asChild
                fullRadius
                variant='ghost'
                className='size-[22px] bg-faded-lighter text-faded-base'
              >
                <div className='select-none'>{index + 1}</div>
              </CompactButton.Root>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </Accordion.Content>
  );
};

const Accordion02 = () => {
  const sections: AccordionSectionProps[] = [
    {
      value: 'web',
      title: 'Web Browser',
      steps: [
        'Go to our website',
        'Click on Sign Up button',
        'Choose your target language',
        'Complete registration',
      ],
    },
    {
      value: 'mobile',
      title: 'Mobile App',
      steps: [
        'Download the app from the App Store or Google Play.',
        'Open the app and tap Sign up.',
        'Choose your target language and current proficiency level.',
        'Select a subscription plan.',
        'Sign in with your Apple or Google account.',
      ],
    },
    {
      value: 'tablet',
      title: 'Tablet Devices',
      steps: [
        'Download tablet version',
        'Install the app',
        'Follow registration steps',
      ],
    },
    {
      value: 'tv',
      title: 'Smart TV',
      steps: [
        'Open Smart TV app store',
        'Search for our app',
        'Install and launch',
      ],
    },
  ];

  return (
    <div className='w-[448px]'>
      <Accordion.Root
        type='single'
        collapsible
        defaultValue='mobile'
        className='w-full'
      >
        <div>
          <h2 className='mb-1 text-label-md font-medium text-text-strong-950'>
            How to sign up for the app?
          </h2>
          <p className='pb-8 text-label-sm text-text-sub-600'>
            Follow the steps for your preferred device below.
          </p>

          <div className='w-full pl-1'>
            {sections.map((section, index) => (
              <AccordionSection
                key={section.value}
                {...section}
                isLast={index === sections.length - 1}
              />
            ))}
          </div>
        </div>
      </Accordion.Root>
    </div>
  );
};

export function InputWithButton() {
  return (
    <div className='w-full max-w-[300px]'>
      <div className='flex flex-col gap-1'>
        <Input.Root>
          <Input.Wrapper>
            <Input.Input placeholder='james@alignui.com' />
          </Input.Wrapper>
          <button
            type='button'
            className={cn(
              'inline-flex items-center justify-center whitespace-nowrap rounded-none bg-bg-weak-50 px-3 py-2 text-label-sm text-text-sub-600 outline-none ring-1 ring-inset ring-transparent transition duration-200 ease-out',
              'hover:bg-bg-white-0 hover:text-text-strong-950',
              'focus-visible:bg-bg-white-0 focus-visible:text-text-strong-950 focus-visible:ring-transparent',
            )}
          >
            Send link
          </button>
        </Input.Root>
      </div>
    </div>
  );
}

function QRCodeComponent() {
  const { qrCodeDataUrl, error, isLoading } = useQRCode('https://alignui.com', {
    width: 88,
    height: 88,
    color: {
      foreground: '#000',
      background: '#fff',
    },
  });

  if (isLoading)
    return (
      <div className='flex size-[88px] items-center justify-center'>
        <RiLoader2Line className='animate-spin' />
      </div>
    );

  if (error)
    return (
      <div className='text-error-base'>QR code could not be generated</div>
    );

  return <img src={qrCodeDataUrl} alt='QR kod' className='size-[88px]' />;
}

const Accordion01 = () => (
  <div className='flex max-w-[624px] flex-col gap-4'>
    <div className='flex w-full flex-col gap-2'>
      <Label.Root>
        Set-up your online store
        <IconInfoCustom className='size-5 text-text-disabled-300' />
      </Label.Root>
      <Accordion.Root
        className='w-full rounded-xl border border-stroke-soft-200 bg-bg-white-0'
        type='single'
        defaultValue='item-2'
        collapsible
      >
        <Accordion.Item
          value='item-1'
          className='border-b border-stroke-soft-200 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl hover:bg-bg-weak-50 data-[state=open]:hover:bg-transparent'
        >
          <Accordion.Trigger className='group flex w-full items-center px-4 py-3.5 text-left'>
            <div className='flex w-full items-center gap-4'>
              <div className='flex w-0 flex-1 items-center gap-2.5'>
                <RiCheckboxCircleFill className='size-5 shrink-0 text-success-base' />
                <span className='truncate text-left text-label-sm text-text-strong-950'>
                  Add products
                </span>
                <Badge.Root
                  variant='lighter'
                  color='green'
                  size='medium'
                  className='ml-auto shrink-0'
                >
                  Ready
                </Badge.Root>
              </div>
              <RiArrowDownSLine className='size-5 shrink-0 text-text-soft-400 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-text-sub-600' />
            </div>
          </Accordion.Trigger>
          <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
            <div className='pb-4 pl-[46px] pr-[52px]'>
              <p className='text-paragraph-sm text-text-sub-600'>
                Add and manage products in your store effortlessly. Control
                product details, pricing, and inventory levels all in one place.
                Create categories to keep your products organized and easily
                accessible.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value='item-2'
          className='border-b border-stroke-soft-200 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl hover:bg-bg-weak-50 data-[state=open]:hover:bg-transparent'
        >
          <Accordion.Trigger className='group flex w-full items-center px-4 py-3.5 text-left'>
            <div className='flex w-full items-center gap-4'>
              <div className='flex w-0 flex-1 items-center gap-2.5'>
                <RiLoader2Line className='size-5 shrink-0 text-text-soft-400 group-data-[state=open]:animate-spin group-data-[state=open]:text-warning-base' />
                <span className='truncate text-left text-label-sm text-text-sub-600 group-data-[state=open]:text-text-strong-950'>
                  Get the point of sale application
                </span>
              </div>
              <RiArrowDownSLine className='size-5 shrink-0 text-text-soft-400 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-text-sub-600' />
            </div>
          </Accordion.Trigger>
          <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
            <div className='flex flex-col gap-6 pb-4 pl-[46px] pr-[52px] sm:flex-row'>
              <div>
                <p className='text-paragraph-sm text-text-sub-600'>
                  Scan the QR code or send yourself the link to get the app. The
                  mobile app is where you&apos;ll manage orders, track
                  inventory, and view analytics on the go.
                </p>
                <div className='mt-4 flex items-center gap-4'>
                  <InputWithButton />
                </div>
              </div>
              <div className='h-[112px] w-[112px] shrink-0 rounded-lg border border-stroke-soft-200 p-3'>
                <QRCodeComponent />
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value='item-3'
          className='transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl hover:bg-bg-weak-50 data-[state=open]:hover:bg-transparent'
        >
          <Accordion.Trigger className='group flex w-full items-center px-4 py-3.5 text-left'>
            <div className='flex w-full items-center gap-4'>
              <div className='flex w-0 flex-1 items-center gap-2.5'>
                <RiLoader2Line className='size-5 shrink-0 text-text-soft-400 group-data-[state=open]:animate-spin group-data-[state=open]:text-warning-base' />
                <span className='truncate text-left text-label-sm text-text-sub-600 group-data-[state=open]:text-text-strong-950'>
                  Product price & stock
                </span>
              </div>
              <RiArrowDownSLine className='size-5 shrink-0 text-text-soft-400 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-text-sub-600' />
            </div>
          </Accordion.Trigger>
          <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
            <div className='pb-4 pl-[46px] pr-[52px]'>
              <p className='text-paragraph-sm text-text-sub-600'>
                Set competitive prices and monitor inventory levels. Update
                product prices, track stock quantities in real-time, and receive
                low-stock alerts. Manage multiple pricing options and automate
                stock notifications for seamless inventory control.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>

    <div className='flex w-full flex-col gap-2'>
      <Label.Root>
        Store settings
        <IconInfoCustom className='size-5 text-text-disabled-300' />
      </Label.Root>
      <Accordion.Root
        className='w-full rounded-xl border border-stroke-soft-200 bg-bg-white-0'
        type='single'
        collapsible
      >
        <Accordion.Item
          value='item-1'
          className='transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl hover:bg-bg-weak-50 data-[state=open]:hover:bg-transparent'
        >
          <Accordion.Trigger className='group flex w-full items-center px-4 py-3.5 text-left'>
            <div className='flex w-full items-center gap-4'>
              <div className='flex w-0 flex-1 items-center gap-2.5'>
                <RiLoader2Line className='size-5 shrink-0 text-text-soft-400 group-data-[state=open]:animate-spin group-data-[state=open]:text-warning-base' />
                <span className='truncate text-left text-label-sm text-text-sub-600 group-data-[state=open]:text-text-strong-950'>
                  Customize your store-front
                </span>
              </div>
              <RiArrowDownSLine className='size-5 shrink-0 text-text-soft-400 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-text-sub-600' />
            </div>
          </Accordion.Trigger>
          <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
            <div className='pb-4 pl-[46px] pr-[52px]'>
              <p className='text-paragraph-sm text-text-sub-600'>
                Customize your store&apos;s appearance and functionality. Choose
                themes, configure layouts, and add features to create a unique
                shopping experience for your customers.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>

    <div className='flex w-full flex-col gap-2'>
      <Label.Root>
        Prepare for launch
        <IconInfoCustom className='size-5 text-text-disabled-300' />
      </Label.Root>
      <Accordion.Root
        className='w-full rounded-xl border border-stroke-soft-200 bg-bg-white-0'
        type='single'
        collapsible
      >
        <Accordion.Item
          value='item-1'
          className='border-b border-stroke-soft-200 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl hover:bg-bg-weak-50 data-[state=open]:hover:bg-transparent'
        >
          <Accordion.Trigger className='group flex w-full items-center px-4 py-3.5 text-left'>
            <div className='flex w-full items-center gap-4'>
              <div className='flex w-0 flex-1 items-center gap-2.5'>
                <RiLoader2Line className='size-5 shrink-0 text-text-soft-400 group-data-[state=open]:animate-spin group-data-[state=open]:text-warning-base' />
                <span className='truncate text-left text-label-sm text-text-sub-600 group-data-[state=open]:text-text-strong-950'>
                  Set up shipping options
                </span>
              </div>
              <RiArrowDownSLine className='size-5 shrink-0 text-text-soft-400 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-text-sub-600' />
            </div>
          </Accordion.Trigger>
          <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
            <div className='pb-4 pl-[46px] pr-[52px]'>
              <p className='text-paragraph-sm text-text-sub-600'>
                Configure multiple shipping methods to meet your customers&apos;
                needs. Set up local and international delivery options, define
                shipping zones, and create flexible pricing rules. Integrate
                with popular carriers for real-time rates and tracking
                capabilities.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item
          value='item-2'
          className='transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl hover:bg-bg-weak-50 data-[state=open]:hover:bg-transparent'
        >
          <Accordion.Trigger className='group flex w-full items-center px-4 py-3.5 text-left'>
            <div className='flex w-full items-center gap-4'>
              <div className='flex flex-1 items-center gap-2.5'>
                <RiLoader2Line className='size-5 shrink-0 text-text-soft-400 group-data-[state=open]:animate-spin group-data-[state=open]:text-warning-base' />
                <span className='truncate text-left text-label-sm text-text-sub-600 group-data-[state=open]:text-text-strong-950'>
                  Configure tax settings
                </span>
              </div>
              <RiArrowDownSLine className='size-5 shrink-0 text-text-soft-400 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-text-sub-600' />
            </div>
          </Accordion.Trigger>
          <Accordion.Content className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
            <div className='pb-4 pl-[46px] pr-[52px]'>
              <p className='text-paragraph-sm text-text-sub-600'>
                Set up your tax configurations to ensure compliance with local
                and international regulations. Define tax rates for different
                regions, configure tax exemptions, and automate tax calculations
                for various product categories. Stay up-to-date with tax
                reporting and documentation requirements.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>

    <div className='flex w-full flex-col items-start gap-4 rounded-xl bg-bg-weak-50 p-4'>
      <div>
        <div>
          <div className='flex items-center justify-start gap-2'>
            <span className='text-label-sm text-text-strong-950'>
              Boost your online presence
            </span>
            <Badge.Root variant='light' color='purple' size='small'>
              PRO
            </Badge.Root>
          </div>
        </div>
        <p className='text-paragraph-sm text-text-sub-600'>
          Take your e-commerce business to the next level with advanced features
          designed to increase sales and improve customer experience
        </p>
      </div>

      <Button.Root variant='neutral' mode='filled' size='xxsmall'>
        Upgrade
      </Button.Root>
    </div>
  </div>
);

export const AccordionStory = () => {
  return (
    <StoryPage>
      <StoryBlock title='Basic' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <Accordion.Root type='single' collapsible className='space-y-6'>
            <Accordion.Item value='a'>
              <Accordion.Trigger>
                <Accordion.Icon as={RiAccountCircleLine} />
                How do I update my account information?
                <Accordion.Arrow />
              </Accordion.Trigger>
              <Accordion.Content className='px-[30px]'>
                Insert the accordion description here. It would look better as
                two lines of text.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value='b'>
              <Accordion.Trigger>
                <Accordion.Icon as={RiQuestionLine} />
                What payment methods are accepted?
                <Accordion.Arrow />
              </Accordion.Trigger>
              <Accordion.Content className='px-[30px]'>
                Major credit and debit cards like Visa, MasterCard, and American
                Express, as well as digital payment options like PayPal and
                Apple Pay.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value='c'>
              <Accordion.Trigger>
                <Accordion.Icon as={RiMapPinTimeLine} />
                How can I track my order?
                <Accordion.Arrow />
              </Accordion.Trigger>
              <Accordion.Content className='px-[30px]'>
                Insert the accordion description here. It would look better as
                two lines of text.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </StoryBlock>

      <StoryBlock title='Arrow Position' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <div className='w-full max-w-96'>
            <Accordion.Root type='single' collapsible className='space-y-6'>
              <Accordion.Item value='a'>
                <Accordion.Trigger>
                  <Accordion.Arrow />
                  Insert your accordion title here
                </Accordion.Trigger>
                <Accordion.Content className='pl-[30px]'>
                  Insert the accordion description here. It would look better as
                  two lines of text.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value='b'>
                <Accordion.Trigger>
                  <Accordion.Arrow />
                  Insert your accordion title here
                </Accordion.Trigger>
                <Accordion.Content className='pl-[30px]'>
                  Insert the accordion description here. It would look better as
                  two lines of text.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value='c'>
                <Accordion.Trigger>
                  <Accordion.Arrow />
                  Insert your accordion title here
                </Accordion.Trigger>
                <Accordion.Content className='pl-[30px]'>
                  Insert the accordion description here. It would look better as
                  two lines of text.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </div>
      </StoryBlock>

      <StoryBlock title='Accordion 01' icon={RiSquareLine}>
        <Accordion01 />

        {/*<div className='flex flex-col items-center gap-4'>*/}
        {/*</div>*/}
      </StoryBlock>

      <StoryBlock title='Accordion 02' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'>
          <Accordion02 />
        </div>
      </StoryBlock>

      <StoryBlock title='Accordion 03' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'></div>
      </StoryBlock>

      <StoryBlock title='Accordion 04' icon={RiSquareLine}>
        <div className='flex flex-col items-center gap-4'></div>
      </StoryBlock>
    </StoryPage>
  );
};
