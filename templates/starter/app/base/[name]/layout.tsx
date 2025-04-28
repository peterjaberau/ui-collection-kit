import React from 'react';
import { usePathname } from "next/navigation";


export default async function Layout(props: { children: React.ReactNode; params: Promise<{ name: string }> }) {
    const params = await props.params;
    const { name } = params;




    return (
      <>
      <div className='mx-auto flex w-full max-w-[1360px] flex-1 flex-col'>
          {props.children}
      </div>

      </>
  );
}
