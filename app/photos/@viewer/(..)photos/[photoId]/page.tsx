'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Modal from '../../Modal';

export type Post = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const Photopage = ({ params }: { params: { photoId: string } }) => {
  const [url, setUrl] = useState<Post>();
  useEffect(() => {
    const urls = `https://jsonplaceholder.typicode.com/photos?albumId=1`;
    const controller = new AbortController();
    const { signal } = controller;
    const id = Number(params.photoId) - 1;
    fetch(urls, { signal })
      .then((res) => res.json())
      .then((data) => setUrl(data[id]));
    return () => {
      controller.abort();
    };
  }, [params]);
  console.log(url);
  return (
    <>
      {url && (
        <div>
          <Modal>
            <Image src={url.url} width={400} height={400} alt='aa'></Image>
          </Modal>
          <div>{url.id}</div>
        </div>
      )}
    </>
  );
};

export default Photopage;
