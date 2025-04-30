'use client';

import * as WidgetBox from '../../ui/blocks/widget-box';
import * as Divider from '../../ui/divider';

export function StoryBlock({ title, icon, children, ...rest }: any) {
  return (
    <WidgetBox.Root {...rest}>
      <WidgetBox.Header>
        {icon && <WidgetBox.HeaderIcon as={icon} />}
        {title}
      </WidgetBox.Header>
      <Divider.Root />

      <div className='pb-0.5 pt-4'>
        <div className='flex h-[208px] items-center justify-center gap-4'>
          { children }
        </div>
      </div>
    </WidgetBox.Root>
  );
}
