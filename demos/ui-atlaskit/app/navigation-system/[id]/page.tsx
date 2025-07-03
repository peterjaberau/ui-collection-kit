'use client'
import { notFound } from 'next/navigation';
import { Stack } from '@chakra-ui/react';
import { Suspense, lazy, ComponentType, use } from 'react';

const componentRegistry: Record<string, () => Promise<{ default: ComponentType<any> }>> = {
  'button-menu-item': () => import('./examples/button-menu-item'),
  'drag-and-drop': () => import('./examples/drag-and-drop'),
  'company-hub-mock': () => import('./examples/company-hub-mock'),
  'composition': () => import('./examples/composition'),
};

const lazyComponents = Object.entries(componentRegistry).reduce((acc, [key, importFn]) => {
  acc[key] = lazy(importFn);
  return acc;
}, {} as Record<string, ComponentType<any>>);


export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);


  if (!componentRegistry[id]) {
    notFound();
  }

  const Component = lazyComponents[id];


  return (
        <Component />
  );
}
