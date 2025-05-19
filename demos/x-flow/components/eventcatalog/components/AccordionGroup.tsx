'use client'

export default function AccordionGroup({ children }: any) {
  return (
    <div className='accordian-group shadow-sm accordion my-2 rounded-md border border-gray-200'>
      {children}
    </div>
  );
}
