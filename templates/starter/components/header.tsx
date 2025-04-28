'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import * as Select from './ui/select';
import { componentsForNavigationMenu } from '../store/data';
import { useRouter, usePathname } from 'next/navigation';
import {useState} from "react";

const DynamicThemeSwitch = dynamic(() => import('./theme-switch'), {
  ssr: false,
});

export function NavigationItem({ title, items }: any) {
    const pathname: any = usePathname();

    const [currentValue, setCurrentValue] = useState(pathname?.name ? pathname?.name : '' );

    const navigate = useRouter();

    const gotoPath = (name: string) => {
        setCurrentValue(name);
        navigate.push(`/base/${name}`);
    }

  return (
    <Select.Root variant='inline' value={currentValue} onValueChange={(value) => gotoPath(value)}>
      <Select.Trigger>
        <Select.Value
          placeholder={
            <>
              <div className='flex items-center'>{title}</div>
            </>
          }
        />
      </Select.Trigger>
      <Select.Content>
        {items.map((item: any) => (
          <Select.Item key={item.name} value={item.name} >
            {item.title}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}

export default function Header() {
  return (
    <div className='border-b border-stroke-soft-200'>
      <header className='mx-auto flex h-14 max-w-5xl items-center justify-between px-5'>
        <div
          className={
            'flex items-center justify-start gap-2 text-label-md text-text-strong-950'
          }
        >
          <NavigationItem
            title={'Base'}
            items={componentsForNavigationMenu.base.items}
          />
        </div>

        <DynamicThemeSwitch />
      </header>
    </div>
  );
}
