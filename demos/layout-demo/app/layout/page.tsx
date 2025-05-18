'use client';
import LayoutRoot from '#components/platform/layout/app-root'

export default function Page() {
  return (
    <>
      <LayoutRoot
        header={{
          start: <div>root.header.start</div>,
          center: <div>root.header.center</div>,
          end: <div>root.header.end</div>,
        }}
        footer={{
          start: <div>root.footer.start</div>,
          center: <div>root.footer.center</div>,
          end: <div>root.footer.end</div>,
        }}
        left={{
          start: <div>root.aside.left</div>,
          center: <div>root.aside.center</div>,
          end: <div>root.aside.end</div>,
        }}
        main={<div>root.main</div>}
        right={{
          start: <div>root.aside.right</div>,
          center: <div>root.aside.center</div>,
          end: <div>root.aside.end</div>,
        }}
      />
    </>
  );
}
