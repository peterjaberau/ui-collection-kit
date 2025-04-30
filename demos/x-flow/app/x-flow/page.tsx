'use client';
import { XFlowView } from '@/views/x-flow';

export default function Page() {
  return (
    <div className='container mx-auto flex-1 bg-white px-5'>
      <div className='mt-48 flex flex-col items-center'>
        <h1 className='max-w-3xl text-balance text-center text-title-h3 text-text-strong-950'>
          X-Flow
        </h1>
          <XFlowView />
      </div>
    </div>
  );
}
