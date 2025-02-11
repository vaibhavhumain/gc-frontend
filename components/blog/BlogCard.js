import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ post }) {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">
      {post.mainImage && (
        <Image 
          src={post.mainImage.asset.url} 
          width={400} 
          height={250} 
          alt={post.title} 
          className="rounded-lg mb-2"
        />
      )}
      <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600">{post.category?.title || 'Uncategorized'}</p>
      <Link href={`/blog/${post.slug.current}`} className="text-red-600 hover:underline">
        Read More →
      </Link>
    </div>
  );
}
