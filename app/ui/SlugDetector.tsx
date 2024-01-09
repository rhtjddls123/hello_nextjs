'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SlugDetector({ slug }: { slug: string[] }) {
  const router = useRouter();
  useEffect(() => {
    if (!slug?.length) {
      router.push('/shop/000');
    }
  }, [router, slug]);

  return <></>;
}
