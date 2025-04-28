import OnboardingFooter from '@/app/onboarding/footer';

import BackButton from './back-button';
import Header from './header';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <div className='relative isolate mx-auto flex w-full max-w-[1392px] flex-1 flex-col'>
        <img
          src='/images/onboarding-pattern.svg'
          alt=''
          width={964}
          height={456}
          className='pointer-events-none absolute left-1/2 top-0 -z-10 hidden -translate-x-1/2 lg:block'
        />

        <div className='absolute left-[84px] top-8 hidden lg:block'>
          <BackButton />
        </div>

        <div className='w-full px-6 lg:px-5'>{children}</div>

        <OnboardingFooter />
      </div>
    </div>
  );
}
