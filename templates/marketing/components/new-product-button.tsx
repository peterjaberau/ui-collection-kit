'use client';

import Link from 'next/link';
import { RiAddLine } from '@remixicon/react';

import { cn } from '@/utils/cn';
import * as Button from '@/components/ui/button';

export function NewProductButton({ className }: { className?: string }) {
  return (
    <Button.Root className={cn('rounded-xl', className)} asChild>
      <Link href='/add-product'>
        <Button.Icon as={RiAddLine} />
        New Products
      </Link>
    </Button.Root>
  );
}
