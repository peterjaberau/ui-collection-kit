import dynamic from 'next/dynamic';

export const DynamicThemeSwitch = dynamic(() => import('./theme-switch'), {
  ssr: false,
});
