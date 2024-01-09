import Image from 'next/image';
import Link from 'next/link';
import { getPhotos } from '../_lib/utils';

export type Post = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const PhotosPage = async () => {
  const photos = await getPhotos();
  return (
    <>
      <div className=' grid grid-cols-5'>
        {photos?.map((item) => (
          <Link href={`/photos/${item.id}`} key={item.id} scroll={false}>
            <Image src={item.url} width={300} height={300} alt='dd'></Image>
          </Link>
        ))}
      </div>
    </>
  );
};
export default PhotosPage;
