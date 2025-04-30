'use client';
import * as Button from "../../react-lite/components/ui/button";
import Link from "next/link";
export default function Page() {
    return (
        <div className='container mx-auto flex-1 bg-white px-5'>
            <div className='mt-48 flex flex-col items-center'>
                <h1 className='max-w-3xl text-balance text-center text-title-h3 text-text-strong-950'>
                    x-flow demo project
                </h1>

                <div className='pb-0.5 pt-4'>
                    <div className='flex h-[208px] items-center justify-center gap-4'>
                       <Button.Root variant='primary' >
                           <Link href='/x-flow'>Goto XFlow</Link>
                       </Button.Root>
                        <Button.Root variant='primary'>
                            <Link href='/form-render'>Goto Form Render</Link>
                        </Button.Root>
                    </div>
                </div>
            </div>
        </div>
    );
}
