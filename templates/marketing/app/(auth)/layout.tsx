import AuthSlider from "@/app/(auth)/auth-slider";
import AuthFooter from './footer';
import AuthHeader from './header';



export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className='grid min-h-screen lg:grid-cols-[minmax(0,1fr),500px] xl:grid-cols-[minmax(0,1fr),596px] min-[1440px]:grid-cols-[minmax(0,844fr),minmax(0,596fr)]'
      style={{
        background:
          'linear-gradient(180deg, #CA5F16 0%, #DC6818 25%, #E97D35 50%, #F1AC7E 75%, #F9DCC8 100%), #FFFFFF',
      }}
    >
      <div className='flex h-full flex-col p-1.5 lg:p-2 lg:pr-0'>
        <div className='flex flex-1 flex-col rounded-2xl bg-bg-white-0 px-3.5 lg:px-11 lg:py-6'>
          <AuthHeader />
          <div className='flex flex-1 flex-col py-6 lg:py-[100px] [@media_(min-height:901px)]:justify-center'>
            <div className='mx-auto flex w-full max-w-[392px] flex-col gap-6 md:translate-x-1.5'>
              {children}
            </div>
          </div>
          <AuthFooter />
        </div>
      </div>

      <div className='hidden lg:block'>
        <div className='relative size-full'>
          <AuthSlider />
        </div>
      </div>
    </div>
  );
}
