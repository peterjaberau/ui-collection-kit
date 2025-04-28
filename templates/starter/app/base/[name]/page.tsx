import Link from 'next/link';
import * as Button from '@/components/ui/button';
import { RiGithubFill } from '@remixicon/react';
import ButtonDemo from '@/components/demos/button.demo';

export default async function Page(props: {
  params: Promise<{ name: string }>;
}) {
  const params = await props.params;
  const { name } = params;

  return (
    <div className='flex flex-col gap-6 px-4 pb-6 lg:px-8 lg:pt-1'>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(450px,1fr))] items-start justify-center gap-6'>
        <ButtonDemo />
          <ButtonDemo />
          <ButtonDemo />
          <ButtonDemo />
        <ButtonDemo />
        <ButtonDemo />
      </div>
    </div>
  );
}
