import React from 'react';

export type Post = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export async function generateStaticParams() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/photos?albumId=1'
  );
  const posts = await res.json();
  return posts.map((post: Post) => ({
    photoId: `${post.id}`,
  }));
}

const page = ({ params }: { params: { photoId: string } }) => {
  return <div>real {params.photoId}</div>;
};

export default page;
