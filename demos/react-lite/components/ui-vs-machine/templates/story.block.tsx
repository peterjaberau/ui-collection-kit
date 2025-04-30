'use client';

import * as WidgetBox from './widget-box';
import * as Divider from '../../ui/divider';
import {WidgetWithTabs} from "./widget-with-tabs";

export function StoryBlock({ title, icon, children, ...rest }: any) {
  return (
      <div className={"flex flex-col gap-4"}>
    <WidgetBox.Root {...rest}>
      <WidgetBox.Header>
        {icon && <WidgetBox.HeaderIcon as={icon} />}
        {title}
      </WidgetBox.Header>
      <Divider.Root />

      <div className='pb-0.5 pt-4'>
        <div className='flex min-h-[208px] h-[400px] items-center justify-center gap-4'>
          { children }
        </div>
      </div>
    </WidgetBox.Root>

          <WidgetWithTabs/>
      </div>
  );
}
