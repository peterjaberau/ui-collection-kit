import SettingsModal from '@/components/settings-modal';
import HeaderMobile from '@/components/header-mobile';
import Sidebar from '@/components/sidebar';


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className='flex min-h-screen flex-col items-start lg:grid lg:grid-cols-[auto,minmax(0,1fr)]'>
        <Sidebar />
        <HeaderMobile />
        <div className='relative z-50 mx-auto flex w-full max-w-[1360px] flex-1 flex-col self-stretch'>
          {children}
        </div>
      </div>

      <SettingsModal />
    </>
  );
}
