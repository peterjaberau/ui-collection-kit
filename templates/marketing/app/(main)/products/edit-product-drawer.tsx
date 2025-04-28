'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as LabelPrimitives from '@radix-ui/react-label';
import {
  RiAddLine,
  RiInformationFill,
  RiMore2Line,
  RiStarSFill,
  RiSubtractLine,
  RiUploadCloud2Line,
} from '@remixicon/react';
import { atom, useAtom } from 'jotai';
import {
  Button as ReactAriaButton,
  Group as ReactAriaGroup,
  Input as ReactAriaInput,
  Label as ReactAriaLabel,
  NumberField as ReactAriaNumberField,
} from 'react-aria-components';

import { cn } from '@/utils/cn';
import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import { compactButtonVariants } from '@/components/ui/compact-button';
import * as Divider from '@/components/ui/divider';
import Drawer from '@/components/ui/drawer';
import * as Hint from '@/components/ui/hint';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as Select from '@/components/ui/select';
import * as Switch from '@/components/ui/switch';
import * as TabMenuHorizontal from '@/components/ui/tab-menu-horizontal';
import * as Textarea from '@/components/ui/textarea';
import * as Tooltip from '@/components/ui/tooltip';
import CheckButton from '@/components/check-button';

import IconInfoCustom from '~/icons/icon-info-custom-fill.svg';

export const editProductDrawerOpenAtom = atom(false);

function GeneralDetailsContent() {
  const [productName, setProductName] = React.useState(
    'Apple Watch S5 GPS 40mm White',
  );
  const [category, setCategory] = React.useState('technology');
  const [sku, setSku] = React.useState('MWVE2LL/A');
  const [description, setDescription] = React.useState(
    'Apple Watch Series 5 GPS brings smart features and elegant design for daily convenience.',
  );
  const [price, setPrice] = React.useState('478.80');

  return (
    <>
      <div className='flex flex-col gap-3 p-5 pb-6'>
        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor='product-name'>
            Product Name
            <Tooltip.Root>
              <Tooltip.Trigger>
                <IconInfoCustom className='size-5 text-text-disabled-300' />
              </Tooltip.Trigger>
              <Tooltip.Content className='max-w-80'>
                Enter product name following format: <br />
                Brand + Model + Key Specs (e.g. size, color)
              </Tooltip.Content>
            </Tooltip.Root>
          </Label.Root>

          <Input.Root>
            <Input.Wrapper>
              <Input.Input
                id='product-name'
                type='text'
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </Input.Wrapper>
          </Input.Root>
        </div>

        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor='category'>Category</Label.Root>

          <Select.Root value={category} onValueChange={setCategory}>
            <Select.Trigger id='category'>
              <Select.Value placeholder='Select a category...' />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value='technology'>Technology</Select.Item>
              <Select.Item value='electronics'>Electronics</Select.Item>
              <Select.Item value='wearables'>Wearables</Select.Item>
              <Select.Item value='audio'>Audio & Headphones</Select.Item>
              <Select.Item value='gaming'>Gaming & Consoles</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor='sku'>
            SKU
            <Tooltip.Root>
              <Tooltip.Trigger>
                <IconInfoCustom className='size-5 text-text-disabled-300' />
              </Tooltip.Trigger>
              <Tooltip.Content className='max-w-80'>
                Unique product identifier (Stock Keeping Unit). Use manufacturer
                SKU when available, or create your own using letters and
                numbers.
              </Tooltip.Content>
            </Tooltip.Root>
          </Label.Root>

          <Input.Root>
            <Input.Wrapper>
              <Input.Input
                id='sku'
                type='text'
                value={sku}
                onChange={(e) => setSku(e.target.value)}
              />
            </Input.Wrapper>
          </Input.Root>
        </div>

        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor='description'>Description</Label.Root>

          <Textarea.Root
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
            <Textarea.CharCounter current={description.length} max={200} />
          </Textarea.Root>

          <Hint.Root>
            <Hint.Icon as={RiInformationFill} />
            Give your product a short and clear description.
          </Hint.Root>
        </div>
      </div>

      <Divider.Root variant='solid-text'>PRICE</Divider.Root>
      <div className='flex flex-col p-5 pb-6'>
        <div className='flex flex-col gap-1'>
          <Label.Root htmlFor='price'>Price</Label.Root>

          <Input.Root>
            <Input.Wrapper>
              <Input.InlineAffix>$</Input.InlineAffix>
              <Input.Input
                id='price'
                type='text'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Input.Wrapper>
          </Input.Root>

          <Hint.Root>
            <Hint.Icon as={RiInformationFill} />
            Specify price in USD (e.g. 780.00)
          </Hint.Root>
        </div>
      </div>
    </>
  );
}

function ProductImagesContent() {
  return (
    <>
      <div className='flex flex-col gap-5 p-5'>
        <div
          className={cn(
            'flex w-full cursor-pointer flex-col items-center gap-4 bg-bg-white-0 p-6 text-center',
            'rounded-2xl border border-dashed border-stroke-sub-300',
            'transition duration-200 ease-out',
          )}
        >
          <div className='flex size-9 items-center justify-center rounded-full bg-bg-weak-50'>
            <RiUploadCloud2Line className='size-5 text-text-soft-400' />
          </div>
          <div>
            <div className='text-label-sm text-text-sub-600'>
              Choose a file or drag & drop it here.
            </div>
            <div className='mt-1 text-label-xs text-text-soft-400'>
              JPEG, PNG, PDF, and MP4 formats, up to 50 MB.
            </div>
          </div>
          <Button.Root variant='neutral' mode='stroke' size='xxsmall'>
            Browse files
          </Button.Root>
        </div>

        <div className='flex flex-col gap-5'>
          <div className='flex items-center gap-4'>
            <div className='flex size-12 shrink-0 items-center justify-center rounded-lg bg-bg-weak-50'>
              <img
                src='/images/products/apple-watch-1.png'
                alt=''
                className='size-10 object-contain'
              />
            </div>
            <div className='flex-1'>
              <div className='flex items-center gap-2'>
                <div className='text-label-md text-text-soft-400'>
                  <span className='text-text-sub-600'>apple-watch</span>.jpg
                </div>
                <Badge.Root variant='lighter' color='purple' size='medium'>
                  <Badge.Icon as={RiStarSFill} />
                  Primary
                </Badge.Root>
              </div>
              <div className='mt-1 text-paragraph-sm text-text-soft-400'>
                753.99 KB
              </div>
            </div>
            <Button.Root variant='neutral' mode='ghost' size='xxsmall'>
              <Button.Icon as={RiMore2Line} />
            </Button.Root>
          </div>

          <div className='flex items-center gap-4'>
            <div className='flex size-12 shrink-0 items-center justify-center rounded-lg bg-bg-weak-50'>
              <img
                src='/images/products/airpods-max-1.png'
                alt=''
                className='size-10 object-contain'
              />
            </div>
            <div className='flex-1'>
              <div className='flex items-center gap-2'>
                <div className='text-label-md text-text-soft-400'>
                  <span className='text-text-sub-600'>airpods-max</span>.jpg
                </div>
              </div>
              <div className='mt-1 text-paragraph-sm text-text-soft-400'>
                753.99 KB
              </div>
            </div>
            <Button.Root variant='neutral' mode='ghost' size='xxsmall'>
              <Button.Icon as={RiMore2Line} />
            </Button.Root>
          </div>

          <div className='flex items-center gap-4'>
            <div className='flex size-12 shrink-0 items-center justify-center rounded-lg bg-bg-weak-50'>
              <img
                src='/images/products/homepod-mini-1.png'
                alt=''
                className='size-10 object-contain'
              />
            </div>
            <div className='flex-1'>
              <div className='flex items-center gap-2'>
                <div className='text-label-md text-text-soft-400'>
                  <span className='text-text-sub-600'>homepod</span>.jpg
                </div>
              </div>
              <div className='mt-1 text-paragraph-sm text-text-soft-400'>
                753.99 KB
              </div>
            </div>
            <Button.Root variant='neutral' mode='ghost' size='xxsmall'>
              <Button.Icon as={RiMore2Line} />
            </Button.Root>
          </div>
        </div>
      </div>
    </>
  );
}

function StockStatusContent() {
  const uniqueId = React.useId();
  const [stock, setStock] = React.useState(200);

  const {
    root: inputRoot,
    wrapper: inputWrapper,
    input,
  } = Input.inputVariants();
  const { root: compactButtonRoot, icon: compactButtonIcon } =
    compactButtonVariants({ variant: 'ghost' });

  const predefinedStocks = [50, 100, 200, 400, 800, 1200];

  return (
    <>
      <div className='p-5 pb-6'>
        <ReactAriaNumberField
          defaultValue={200}
          minValue={0}
          value={stock}
          onChange={setStock}
          className='flex flex-col gap-1'
        >
          <Label.Root asChild>
            <ReactAriaLabel>
              Set Custom Stock Status
              <Label.Asterisk />
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <IconInfoCustom className='size-5 text-text-disabled-300' />
                </Tooltip.Trigger>
                <Tooltip.Content className='max-w-80'>
                  Enter the current quantity of this product available in stock
                </Tooltip.Content>
              </Tooltip.Root>
            </ReactAriaLabel>
          </Label.Root>

          <div className={inputRoot()}>
            <ReactAriaGroup className={inputWrapper()}>
              <ReactAriaButton slot='decrement' className={compactButtonRoot()}>
                <RiSubtractLine className={compactButtonIcon()} />
              </ReactAriaButton>
              <ReactAriaInput className={input({ class: 'text-center' })} />
              <ReactAriaButton slot='increment' className={compactButtonRoot()}>
                <RiAddLine className={compactButtonIcon()} />
              </ReactAriaButton>
            </ReactAriaGroup>
          </div>
        </ReactAriaNumberField>

        <div className='mt-3 flex flex-wrap gap-2'>
          {predefinedStocks.map((s) => (
            <CheckButton
              key={s}
              checked={s === stock}
              onClick={() => setStock(s)}
            >
              {s}
            </CheckButton>
          ))}
        </div>
      </div>

      <Divider.Root variant='solid-text'>GENERAL</Divider.Root>
      <div className='flex flex-col gap-5 p-5'>
        <div className='flex items-center gap-2.5'>
          <LabelPrimitives.Root
            className='flex-1 cursor-pointer text-label-sm text-text-sub-600'
            htmlFor={`${uniqueId}-s1`}
          >
            Show stock quantity on product page
          </LabelPrimitives.Root>
          <Switch.Root id={`${uniqueId}-s1`} defaultChecked />
        </div>
        <div className='flex items-center gap-2.5'>
          <LabelPrimitives.Root
            className='flex-1 cursor-pointer text-label-sm text-text-sub-600'
            htmlFor={`${uniqueId}-s2`}
          >
            Enable stock reservation during checkout
          </LabelPrimitives.Root>
          <Switch.Root id={`${uniqueId}-s2`} />
        </div>
        <div className='flex items-center gap-2.5'>
          <LabelPrimitives.Root
            className='flex-1 cursor-pointer text-label-sm text-text-sub-600'
            htmlFor={`${uniqueId}-s3`}
          >
            Auto-update stock after order
          </LabelPrimitives.Root>
          <Switch.Root id={`${uniqueId}-s3`} />
        </div>
      </div>

      <Divider.Root variant='solid-text'>NOTIFICATION & ALERTS</Divider.Root>
      <div className='flex flex-col gap-5 p-5'>
        <div className='flex items-center gap-2.5'>
          <LabelPrimitives.Root
            className='flex-1 cursor-pointer text-label-sm text-text-sub-600'
            htmlFor={`${uniqueId}-s4`}
          >
            Send low stock notification
          </LabelPrimitives.Root>
          <Switch.Root id={`${uniqueId}-s4`} defaultChecked />
        </div>
        <div className='flex items-center gap-2.5'>
          <LabelPrimitives.Root
            className='flex-1 cursor-pointer text-label-sm text-text-sub-600'
            htmlFor={`${uniqueId}-s5`}
          >
            Alert when stock needs reordering
          </LabelPrimitives.Root>
          <Switch.Root id={`${uniqueId}-s5`} />
        </div>
      </div>
    </>
  );
}

export default function EditProductDrawer() {
  const [open, setOpen] = useAtom(editProductDrawerOpenAtom);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <div className='flex items-start gap-5 p-5'>
        <div className='flex-1'>
          <DialogPrimitive.Title className='text-label-lg text-text-strong-950'>
            Edit Product
          </DialogPrimitive.Title>
          <DialogPrimitive.Description className='mt-1 text-paragraph-sm text-text-sub-600'>
            Manage your product details.
          </DialogPrimitive.Description>
        </div>
        <Button.Root variant='neutral' mode='ghost' size='xxsmall'>
          <Button.Icon as={RiMore2Line} />
        </Button.Root>
      </div>

      <TabMenuHorizontal.Root defaultValue='general-details'>
        <TabMenuHorizontal.List className='px-5'>
          <TabMenuHorizontal.Trigger value='general-details'>
            General Details
          </TabMenuHorizontal.Trigger>
          <TabMenuHorizontal.Trigger value='product-images'>
            Product Images
          </TabMenuHorizontal.Trigger>
          <TabMenuHorizontal.Trigger value='stock-status'>
            Stock Status
          </TabMenuHorizontal.Trigger>
        </TabMenuHorizontal.List>

        <TabMenuHorizontal.Content
          value='general-details'
          className='data-[state=active]:duration-300 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-4'
        >
          <GeneralDetailsContent />
        </TabMenuHorizontal.Content>

        <TabMenuHorizontal.Content
          value='product-images'
          className='data-[state=active]:duration-300 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-4'
        >
          <ProductImagesContent />
        </TabMenuHorizontal.Content>

        <TabMenuHorizontal.Content
          value='stock-status'
          className='data-[state=active]:duration-300 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-4'
        >
          <StockStatusContent />
        </TabMenuHorizontal.Content>
      </TabMenuHorizontal.Root>

      <div className='mt-auto'>
        <Divider.Root />
        <div className='grid grid-cols-2 gap-4 p-5'>
          <Button.Root
            variant='neutral'
            mode='stroke'
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button.Root>
          <Button.Root onClick={() => setOpen(false)}>Save Changes</Button.Root>
        </div>
      </div>
    </Drawer>
  );
}
