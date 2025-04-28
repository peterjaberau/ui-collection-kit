import dynamic from 'next/dynamic';

import * as Avatar from '@/components/ui/avatar';
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
        <div className='grid size-full min-h-0 justify-center overflow-hidden rounded-2xl bg-bg-weak-50 pl-20 pt-20 2xl:pl-40 2xl:pt-32 [@media(min-height:1024px)]:content-center'>
          <div className='pr-20 2xl:pr-40'>
            <div className='text-title-h5 text-text-sub-600'>
              The <span className='text-text-strong-950'>HR Management</span>{' '}
              app has transformed how we handle HR tasks. It&apos;s incredibly
              efficient and user-friendly, simplifying everything from.
            </div>

            <div className='mt-10 flex items-center gap-4'>
              <Avatar.Root color='purple' size='48'>
                <Avatar.Image src='/images/avatar/memoji/matthew.png' />
              </Avatar.Root>
              <div className='space-y-1'>
                <div className='text-label-md'>Matthew Johnson</div>
                <div className='text-paragraph-sm text-text-sub-600'>
                  Data Software Engineer · Freelancer
                </div>
              </div>
            </div>
          </div>
          <div className='mr-auto mt-14 h-fit overflow-hidden rounded-l-20 bg-bg-white-0 shadow-regular-md'>
            <DynamicAuthImage />
          </div>
        </div>
      </div>
    </div>
  );
}
