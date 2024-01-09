import React from 'react';

const page = ({ params }: { params: { photoId: string } }) => {
  return <div>real {params.photoId}</div>;
};

export default page;
