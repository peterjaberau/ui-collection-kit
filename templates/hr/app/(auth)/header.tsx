'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import * as Button from '@/components/ui/button';

type PathConfig = {
  message: string;
  linkText: string;
  linkHref: string;
};

const pathConfig: Record<string, PathConfig> = {
  '/login': {
    message: "Don't have an account?",
    linkText: 'Register',
    linkHref: '/register',
  },
  '/register': {
    message: 'Already have an account?',
    linkText: 'Login',
    linkHref: '/login',
  },
  '/reset-password': {
    message: 'Changed your mind?',
    linkText: 'Go back',
    linkHref: '/',
  },
};

const defaultConfig: PathConfig = {
  message: 'Changed your mind?',
  linkText: 'Go back',
  linkHref: '/',
};

function DynamicContent({ pathname }: { pathname: string }) {
  const { message, linkText, linkHref } = pathConfig[pathname] || defaultConfig;

  return (
    <>
      <span className='text-right text-paragraph-sm text-text-sub-600'>
        {message}
      </span>
      <Button.Root variant='neutral' mode='stroke' size='xsmall' asChild>
        <Link href={linkHref}>{linkText}</Link>
      </Button.Root>
    </>
  );
}

export default function AuthHeader() {
  const pathname = usePathname();

  return (
    <div className='mx-auto flex w-full items-center justify-between gap-6 pb-3.5 pt-2.5 lg:py-0'>
      <Link href='/' className='shrink-0'>
        <img src='/images/placeholder/synergy.svg' alt='' className='size-10' />
      </Link>
      <div className='flex items-center gap-3'>
        <DynamicContent pathname={pathname} />
      </div>
    </div>
  );
}
