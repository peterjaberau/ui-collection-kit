'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { RiSettings2Line } from '@remixicon/react';

import * as Select from '@/components/ui/select';
import * as TabMenuHorizontal from '@/components/ui/tab-menu-horizontal';
import Header from '@/app/(main)/header';

const items = [
  {
    label: 'General Settings',
    href: '/settings/general-settings',
  },
  {
    label: 'Profile Settings',
    href: '/settings/profile-settings',
  },
  {
    label: 'Company Settings',
    href: '/settings/company-settings',
  },
  {
    label: 'Notification Settings',
    href: '/settings/notification-settings',
  },
  {
    label: 'Privacy & Security',
    href: '/settings/privacy-security',
  },
  {
    label: 'Integrations',
    href: '/settings/integrations',
  },
];

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <Header
        icon={
          <div className='flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <RiSettings2Line className='size-6 text-text-sub-600' />
          </div>
        }
        title='Settings Page'
        description='Manage your preferences and configure various options.'
        contentClassName='hidden'
      />

      <div className='px-4 lg:px-8'>
        <Select.Root
          defaultValue={pathname}
          onValueChange={(val) => router.push(val)}
        >
          <Select.Trigger className='md:hidden'>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            {items.map((item) => (
              <Select.Item key={item.href} value={item.href}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>

        <TabMenuHorizontal.Root defaultValue={pathname}>
          <TabMenuHorizontal.List className='hidden md:flex'>
            {items.map(({ label, href }) => (
              <TabMenuHorizontal.Trigger key={label} value={href} asChild>
                <Link href={href}>{label}</Link>
              </TabMenuHorizontal.Trigger>
            ))}
          </TabMenuHorizontal.List>
        </TabMenuHorizontal.Root>

        <div className='py-5 md:py-8'>{children}</div>
      </div>
    </>
  );
}
