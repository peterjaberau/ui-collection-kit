'use client'
import { Dock } from '#components/ui/dock'


export const DockDemo = () => {
  return (
    <Dock
      position="bottom"
      size={300}
      isVisible={true}
      fluid={false}
      defaultSize={100}
    >
      <div style={{ height: '100%' }}>
        <h1>Dock Demo</h1>
        <p>This is a demo of the Dock component.</p>
      </div>
    </Dock>
  );
};
