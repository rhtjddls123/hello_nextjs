import { getPhotos } from '@/app/_lib/utils';
import Image from 'next/image';
import Modal from '../../Modal';

const Photopage = async ({ params }: { params: { photoId: string } }) => {
  const photos = await getPhotos();
  const photo = photos.find((photo) => photo.id === Number(params.photoId));
  return (
    <>
      {photo && (
        <Modal>
          <Image src={photo.url} width={400} height={400} alt='aa'></Image>
        </Modal>
      )}
    </>
  );
};

export default Photopage;
