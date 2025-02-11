import Image from 'next/image';

export default function AuthorCard({ author }) {
  return (
    <div className="flex items-center space-x-4 mt-6">
      {author.image && (
        <Image 
          src={author.image.asset.url} 
          width={50} 
          height={50} 
          alt={author.name} 
          className="rounded-full"
        />
      )}
      <div>
        <p className="text-lg font-semibold">{author.name}</p>
        <p className="text-gray-500 text-sm">{author.bio}</p>
      </div>
    </div>
  );
}
