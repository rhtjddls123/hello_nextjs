import SlugDetector from '@/app/ui/SlugDetector';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// export const dynamicParams = true;
export async function generateStaticParams() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?userId=1'
  );
  const posts = await res.json();
  return posts.map((post: Post) => ({
    slug: [`${post.id}`],
  }));
}

export default function Slug({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  console.log(slug);

  return (
    <div>
      <SlugDetector slug={slug}></SlugDetector>
      <div>
        SlugPage: <strong>{slug?.join()}</strong>
      </div>
    </div>
  );
}
