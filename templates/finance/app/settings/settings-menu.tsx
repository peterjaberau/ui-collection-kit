'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  RiArrowRightSLine,
  RiBuilding2Line,
  RiEqualizerLine,
  RiGlobalLine,
  RiGroupLine,
  RiNotificationBadgeLine,
  RiShieldUserLine,
  RiUserSettingsLine,
} from '@remixicon/react';

import * as Divider from '@/components/ui/divider';
import * as TabMenuHorizontal from '@/components/ui/tab-menu-horizontal';
import * as TabMenuVertical from '@/components/ui/tab-menu-vertical';

const links = [
  {
    label: 'Profile',
    icon: RiUserSettingsLine,
    href: '/settings/profile-settings',
  },
  {
    label: 'Company',
    icon: RiBuilding2Line,
    href: '/settings/company-settings',
  },
  {
    label: 'Notifications',
    icon: RiNotificationBadgeLine,
    href: '/settings/notification-settings',
  },
  {
    label: 'Team',
    icon: RiGroupLine,
    href: '/settings/team-settings',
  },
  {
    label: 'Privacy & Security',
    icon: RiShieldUserLine,
    href: '/settings/privacy-security',
  },
  {
    label: 'Integrations',
    icon: RiEqualizerLine,
    href: '/settings/integrations',
  },
  {
    label: 'Localization',
    icon: RiGlobalLine,
    href: '/settings/localization',
  },
];

export default function SettingsVerticalMenu() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {/* mobile */}
      <TabMenuHorizontal.Root
        defaultValue={pathname}
        onValueChange={(v) => router.push(v)}
        className='lg:hidden'
      >
        <TabMenuHorizontal.List className='border-t-0 px-4'>
          {links.map(({ label, icon: Icon, href }) => (
            <TabMenuHorizontal.Trigger key={label} asChild value={href}>
              <Link href={href}>
                <TabMenuHorizontal.Icon as={Icon} />
                {label}
              </Link>
            </TabMenuHorizontal.Trigger>
          ))}
        </TabMenuHorizontal.List>
      </TabMenuHorizontal.Root>

      {/* desktop */}
      <div className='hidden w-[264px] shrink-0 flex-col gap-5 border-r border-stroke-soft-200 p-5 lg:flex'>
        <div>
          <div className='text-label-lg text-text-strong-950'>Settings</div>
          <div className='mt-1 text-paragraph-sm text-text-sub-600'>
            Choose between categories.
          </div>
        </div>

        <Divider.Root />

        <TabMenuVertical.Root
          defaultValue={pathname}
          onValueChange={(v) => router.push(v)}
        >
          <TabMenuVertical.List>
            {links.map(({ label, icon: Icon, href }) => (
              <TabMenuVertical.Trigger key={label} asChild value={href}>
                <Link href={href}>
                  <TabMenuVertical.Icon as={Icon} />
                  {label}
                  <TabMenuVertical.ArrowIcon as={RiArrowRightSLine} />
                </Link>
              </TabMenuVertical.Trigger>
            ))}
          </TabMenuVertical.List>
        </TabMenuVertical.Root>
      </div>
    </>
  );
}
