'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export type Post = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const PhotosPage = () => {
  const [url, setUrl] = useState<Post[]>();
  useEffect(() => {
    const urls = `https://jsonplaceholder.typicode.com/photos?albumId=1`;
    const controller = new AbortController();
    const { signal } = controller;
    fetch(urls, { signal })
      .then((res) => res.json())
      .then((data) => setUrl(data));
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <>
      <div className=' grid grid-cols-5'>
        {url?.map(
          (item) =>
            item.id < 6 && (
              <Link href={`/photos/${item.id}`} key={item.id}>
                <Image src={item.url} width={300} height={300} alt='dd'></Image>
              </Link>
            )
        )}
      </div>
    </>
  );
};
export default PhotosPage;
