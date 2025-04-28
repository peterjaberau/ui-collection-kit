import { SearchMenu } from '@/components/search';

import HeaderMobile from './header-mobile';
import Sidebar from './sidebar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className='grid min-h-screen grid-cols-1 content-start items-start lg:grid-cols-[auto,minmax(0,1fr)]'>
        <Sidebar />
        <HeaderMobile />
        <div className='mx-auto flex w-full max-w-[1360px] flex-1 flex-col'>
          {children}
        </div>
      </div>

      <SearchMenu />
    </>
  );
}
