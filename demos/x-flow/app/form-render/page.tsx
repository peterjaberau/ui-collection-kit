'use client';
import { FormRenderView } from '@/views/form-render';

export default function Page() {
  return (
      <div className='container mx-auto flex-1 px-5 bg-white'>
        <div className=' flex flex-col items-center w-[1000px]'>
          <h1 className=' text-balance text-center text-title-h3 text-text-strong-950'>
              Form Render
          </h1>
            <div className={'flex-grow w-full'}>
                <FormRenderView />
            </div>
        </div>
      </div>

)
  ;
}
