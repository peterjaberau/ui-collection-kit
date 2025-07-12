'use client';
import { useState, useEffect } from 'react';
import { NavigationSystemDemo } from '#components/ui/navigation-system/examples/NavigationSystemDemo';
import { RemoteController } from '#components/dev-tools/RemoteController';

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <RemoteController />
      )}

      <NavigationSystemDemo />
    </>
  );
}
