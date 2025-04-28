import dynamic from 'next/dynamic';

import AuthFooter from '@/app/(auth)/footer';
import AuthHeader from '@/app/(auth)/header';

const DynamicAuthImage = dynamic(() => import('./auth-image'), {
  ssr: false,
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='grid min-h-screen lg:grid-cols-[minmax(0,608fr),minmax(0,832fr)] xl:grid-cols-[608px,minmax(0,1fr)] min-[1440px]:grid-cols-[minmax(0,608fr),minmax(0,832fr)]'>
      <div className='flex h-full flex-col px-6 lg:px-11 lg:py-6'>
        <AuthHeader />
        <div className='flex flex-1 flex-col py-6 lg:py-24 [@media_(min-height:901px)]:justify-center'>
          <div className='mx-auto flex w-full max-w-[392px] flex-col gap-6 md:translate-x-1.5'>
            {children}
          </div>
        </div>
        <AuthFooter />
      </div>
      <div className='hidden h-0 min-h-full p-2 pl-0 lg:block'>
        <div className='flex size-full min-h-0 items-center justify-center rounded-2xl bg-bg-weak-50 py-[72px] pl-[76px] min-[2090px]:pl-0'>
          <div className='mt-2 h-fit overflow-hidden rounded-l-20 shadow-regular-md ring-4 ring-stroke-white-0 min-[2090px]:rounded-r-20'>
            <DynamicAuthImage />
          </div>
        </div>
      </div>
    </div>
  );
}
