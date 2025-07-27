'use client';
import { DesignablePlayground } from '#packages/formily/antd/playground/main'
import { useEffect, useState } from 'react';

export default function Page() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
   <>
     { mounted && <DesignablePlayground />}
   </>
  );
}
