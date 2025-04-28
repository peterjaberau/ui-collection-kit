import HeaderMobile from '@/components/header-mobile';
import Sidebar from '@/components/sidebar';

import SettingsVerticalMenu from './settings-menu';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex min-h-screen flex-col items-start lg:grid lg:grid-cols-[auto,minmax(0,1fr)]'>
      <Sidebar defaultCollapsed />
      <HeaderMobile />
      <div className='w-full flex-1 self-stretch lg:grid lg:grid-cols-[auto,minmax(0,1fr)]'>
        <SettingsVerticalMenu />
        <div className='mx-auto flex w-full max-w-[1360px] flex-col'>
          {children}
        </div>
      </div>
    </div>
  );
}
