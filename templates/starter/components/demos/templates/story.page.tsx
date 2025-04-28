
export const StoryPage = ({ children }: any) => {
  return (
      <>
        <div className='flex flex-col gap-6 px-4 pb-6 lg:px-8 lg:pt-1'>
          <div className='grid grid-cols-[repeat(auto-fill,minmax(344px,1fr))] items-start justify-center gap-6'>
            {children}
          </div>
        </div>
      </>
  );
};
