'use client';

import * as WidgetBox from '@/components/ui/blocks/widget-box';
import * as Divider from '@/components/ui/divider';
import * as Button from '@/components/ui/button';

export default function ButtonDemo({
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <WidgetBox.Root {...rest}>
      <WidgetBox.Header>Button</WidgetBox.Header>

      <Divider.Root />

      <div className='pb-0.5 pt-4'>
        <div className='flex justify-center items-center gap-4 h-[250px]'>
          <Button.Root>Button</Button.Root>
        </div>
      </div>
    </WidgetBox.Root>
  );
}
