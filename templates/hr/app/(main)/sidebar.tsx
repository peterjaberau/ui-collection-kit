'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  RiArrowRightSLine,
  RiCalendarLine,
  RiEqualizerLine,
  RiFileCloudLine,
  RiFoldersLine,
  RiGroupLine,
  RiHeadphoneLine,
  RiLayoutGridLine,
  RiSettings2Line,
  RiStarSmileLine,
  RiTimerLine,
} from '@remixicon/react';
import { useHotkeys } from 'react-hotkeys-hook';

import { cn } from '@/utils/cn';
import { LABEL_COLORS } from '@/utils/consts';
import * as Divider from '@/components/ui/divider';
import * as Kbd from '@/components/ui/kbd';
import { CompanySwitch } from '@/components/company-switch';
import { UserButton } from '@/components/user-button';

import IconCmd from '~/icons/icon-cmd.svg';

type NavigationLink = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  disabled?: boolean;
};

export const navigationLinks: NavigationLink[] = [
  { icon: RiLayoutGridLine, label: 'Dashboard', href: '/' },
  { icon: RiCalendarLine, label: 'Calendar', href: '/calendar' },
  { icon: RiTimerLine, label: 'Time Off', href: '#', disabled: true },
  { icon: RiFoldersLine, label: 'Projects', href: '#', disabled: true },
  { icon: RiGroupLine, label: 'Teams', href: '/teams' },
  { icon: RiEqualizerLine, label: 'Integrations', href: '/integrations' },
  { icon: RiStarSmileLine, label: 'Benefits', href: '#', disabled: true },
  { icon: RiFileCloudLine, label: 'Documents', href: '#', disabled: true },
];

export const favoriteLinks = [
  {
    href: '#',
    color: 'purple',
    projectName: 'Loom Mobile App',
    shortcut: (
      <>
        <IconCmd className='size-2.5' />1
      </>
    ),
  },
  {
    href: '#',
    color: 'red',
    projectName: 'Monday Redesign',
    shortcut: (
      <>
        <IconCmd className='size-2.5' />2
      </>
    ),
  },
  {
    href: '#',
    color: 'pink',
    projectName: 'Udemy Courses',
    shortcut: (
      <>
        <IconCmd className='size-2.5' />3
      </>
    ),
  },
];

function useCollapsedState(): {
  collapsed: boolean;
  sidebarRef: React.RefObject<HTMLDivElement>;
} {
  const [collapsed, setCollapsed] = React.useState(false);
  const sidebarRef = React.useRef<HTMLDivElement>(null);

  useHotkeys(
    ['ctrl+b', 'meta+b'],
    () => setCollapsed((prev) => !prev),
    { preventDefault: true },
    [collapsed],
  );

  React.useEffect(() => {
    if (!sidebarRef.current) return;

    const elementsToHide = sidebarRef.current.querySelectorAll(
      '[data-hide-collapsed]',
    );

    const listeners: { el: Element; listener: EventListener }[] = [];

    elementsToHide.forEach((el) => {
      const hideListener = () => {
        el.classList.add('hidden');
        el.classList.remove('transition', 'duration-300');
      };

      const showListener = () => {
        el.classList.remove('transition', 'duration-300');
      };

      if (collapsed) {
        el.classList.add('opacity-0', 'transition', 'duration-300');
        el.addEventListener('transitionend', hideListener, { once: true });
        listeners.push({ el, listener: hideListener });
      } else {
        el.classList.add('transition', 'duration-300');
        el.classList.remove('hidden');
        setTimeout(() => {
          el.classList.remove('opacity-0');
        }, 1);
        el.addEventListener('transitionend', showListener, { once: true });
        listeners.push({ el, listener: showListener });
      }
    });

    return () => {
      listeners.forEach(({ el, listener }) => {
        el.removeEventListener('transitionend', listener);
      });
    };
  }, [collapsed]);

  return { collapsed, sidebarRef };
}

export function SidebarHeader({ collapsed }: { collapsed?: boolean }) {
  return (
    <div
      className={cn('lg:p-3', {
        'lg:px-2': collapsed,
      })}
    >
      <CompanySwitch
        className={cn('transition-all duration-200 ease-out', {
          'w-16': collapsed,
        })}
      />
    </div>
  );
}

function NavigationMenu({ collapsed }: { collapsed: boolean }) {
  const pathname = usePathname();

  return (
    <div className='space-y-2'>
      <div
        className={cn('p-1 text-subheading-xs uppercase text-text-soft-400', {
          '-mx-2.5 w-14 px-0 text-center': collapsed,
        })}
      >
        Main
      </div>
      <div className='space-y-1'>
        {navigationLinks.map(({ icon: Icon, label, href, disabled }, i) => (
          <Link
            key={i}
            href={href}
            aria-current={pathname === href ? 'page' : undefined}
            aria-disabled={disabled}
            className={cn(
              'group relative flex items-center gap-2 whitespace-nowrap rounded-lg py-2 text-text-sub-600 hover:bg-bg-weak-50',
              'transition duration-200 ease-out',
              'aria-[current=page]:bg-bg-weak-50',
              'aria-[disabled]:pointer-events-none aria-[disabled]:opacity-50',
              {
                'w-9 px-2': collapsed,
                'w-full px-3': !collapsed,
              },
            )}
          >
            <div
              className={cn(
                'absolute top-1/2 h-5 w-1 origin-left -translate-y-1/2 rounded-r-full bg-primary-base transition duration-200 ease-out',
                {
                  '-left-[22px]': collapsed,
                  '-left-5': !collapsed,
                  'scale-100': pathname === href,
                  'scale-0': pathname !== href,
                },
              )}
            />
            <Icon
              className={cn(
                'size-5 shrink-0 text-text-sub-600 transition duration-200 ease-out',
                'group-aria-[current=page]:text-primary-base',
              )}
            />

            <div
              className='flex w-[180px] shrink-0 items-center gap-2'
              data-hide-collapsed
            >
              <div className='flex-1 text-label-sm'>{label}</div>
              {pathname === href && (
                <RiArrowRightSLine className='size-5 text-text-sub-600' />
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Favs({ collapsed }: { collapsed: boolean }) {
  return (
    <div className='space-y-2'>
      <div
        className={cn('p-1 text-subheading-xs uppercase text-text-soft-400', {
          '-mx-2.5 w-14 px-0 text-center': collapsed,
        })}
      >
        Favs
      </div>
      <div className='space-y-1'>
        {favoriteLinks.map((project, i) => (
          <Link
            key={i}
            href={project.href}
            className={cn(
              'group flex items-center gap-2 whitespace-nowrap rounded-lg py-2 text-text-sub-600 transition duration-200 ease-out hover:bg-bg-weak-50',
              {
                'w-9 px-2': collapsed,
                'w-full px-3': !collapsed,
              },
            )}
          >
            <div className='flex size-5 shrink-0 items-center justify-center'>
              <div className='size-3 rounded-full border-2 border-stroke-white-0 shadow-regular-sm'>
                <div
                  className={cn(
                    'size-2 rounded-full',
                    LABEL_COLORS[project.color as keyof typeof LABEL_COLORS].bg,
                  )}
                />
              </div>
            </div>

            <div
              className='flex w-[180px] shrink-0 items-center gap-2'
              data-hide-collapsed
            >
              <div className='flex-1 text-label-sm'>{project.projectName}</div>
              {project.shortcut && <Kbd.Root>{project.shortcut}</Kbd.Root>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function SettingsAndSupport({ collapsed }: { collapsed: boolean }) {
  const pathname = usePathname();

  const links = [
    {
      href: '/settings/general-settings',
      icon: RiSettings2Line,
      label: 'Settings',
    },
    {
      href: '#',
      icon: RiHeadphoneLine,
      label: 'Support',
      disabled: true,
    },
  ];

  return (
    <div className='mt-auto space-y-1.5'>
      {links.map(({ href, icon: Icon, label, disabled }, i) => {
        return (
          <Link
            key={i}
            href={href}
            aria-current={pathname.startsWith(href) ? 'page' : undefined}
            aria-disabled={disabled}
            className={cn(
              'group relative flex items-center gap-2 whitespace-nowrap rounded-lg py-2 text-label-sm text-text-sub-600 transition duration-200 ease-out hover:bg-bg-weak-50',
              'aria-[current=page]:bg-bg-weak-50',
              'aria-[disabled]:pointer-events-none aria-[disabled]:opacity-50',
              {
                'w-9 px-2': collapsed,
                'w-full px-3': !collapsed,
              },
            )}
          >
            <div
              className={cn(
                'absolute top-1/2 h-5 w-1 origin-left -translate-y-1/2 rounded-r-full bg-primary-base transition duration-200 ease-out',
                {
                  '-left-[22px]': collapsed,
                  '-left-5': !collapsed,
                  'scale-100': pathname.startsWith(href),
                  'scale-0': !pathname.startsWith(href),
                },
              )}
            />
            <Icon
              className={cn(
                'size-5 shrink-0',
                'group-aria-[current=page]:text-primary-base',
              )}
            />
            <div
              className='flex w-[180px] shrink-0 items-center gap-2'
              data-hide-collapsed
            >
              <span className='flex-1'>{label}</span>
              {pathname === href && (
                <RiArrowRightSLine className='size-5 text-text-sub-600' />
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

function UserProfile({ collapsed }: { collapsed: boolean }) {
  return (
    <div
      className={cn('p-3', {
        'px-2': collapsed,
      })}
    >
      <UserButton
        className={cn('transition-all duration-200 ease-out', {
          'w-auto': collapsed,
        })}
      />
    </div>
  );
}

function SidebarDivider({ collapsed }: { collapsed: boolean }) {
  return (
    <div className='px-5'>
      <Divider.Root
        className={cn('transition-all duration-200 ease-out', {
          'w-10': collapsed,
        })}
      />
    </div>
  );
}

export default function Sidebar() {
  const { collapsed, sidebarRef } = useCollapsedState();

  return (
    <>
      <div
        className={cn(
          'fixed left-0 top-0 z-40 hidden h-full overflow-hidden border-r border-stroke-soft-200 bg-bg-white-0 transition-all duration-300 ease-out lg:block',
          {
            'w-20': collapsed,
            'w-[272px]': !collapsed,
          },
        )}
      >
        <div
          ref={sidebarRef}
          className='flex h-full w-[272px] min-w-[272px] flex-col overflow-auto'
        >
          <SidebarHeader collapsed={collapsed} />

          <SidebarDivider collapsed={collapsed} />

          <div
            className={cn('flex flex-1 flex-col gap-5 pb-4 pt-5', {
              'px-[22px]': collapsed,
              'px-5': !collapsed,
            })}
          >
            <NavigationMenu collapsed={collapsed} />
            <Favs collapsed={collapsed} />
            <SettingsAndSupport collapsed={collapsed} />
          </div>

          <SidebarDivider collapsed={collapsed} />

          <UserProfile collapsed={collapsed} />
        </div>
      </div>

      {/* a necessary placeholder because of sidebar is fixed */}
      <div
        className={cn('shrink-0', {
          'w-[272px]': !collapsed,
          'w-20': collapsed,
        })}
      />
    </>
  );
}
