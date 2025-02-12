// import { client } from '../../sanity/client';
// import Image from 'next/image';
// import { PortableText } from '@portabletext/react';
// import AuthorCard from '@/components/blog/AuthorCard';
// import TagList from '@/components/blog/TagList';

// export async function getServerSideProps({ params }) {
//   const query = `*[_type == "post" && slug.current == $slug][0]{
//     title,
//     mainImage {
//       asset->{url}
//     },
//     body,
//     author->{
//       name,
//       bio,
//       image {
//         asset->{url}
//       }
//     },
//     category->{
//       title
//     },
//     tags[]->{
//       title
//     }
//   }`;
//   const post = await client.fetch(query, { slug: params.slug });

//   if (!post) {
//     return { notFound: true };
//   }

//   return { props: { post } };
// }

// export default function BlogPost({ post }) {
//   return (
//     <main className="max-w-4xl mx-auto p-6">
//       <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
//       {post.mainImage && (
//         <Image 
//           src={post.mainImage.asset.url} 
//           width={800} 
//           height={400} 
//           alt={post.title} 
//           className="rounded-lg my-4"
//         />
//       )}
//       <p className="text-gray-600">{post.category?.title || 'Uncategorized'}</p>
//       <div className="prose">
//         <PortableText value={post.body} />
//       </div>
//       <TagList tags={post.tags} />
//       <AuthorCard author={post.author} />
//     </main>
//   );
// }
