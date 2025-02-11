// import { client } from '../../sanity/client';
// import BlogCard from '../../components/blog/BlogCard';

// export async function getServerSideProps() {
//   const query = `*[_type == "post"] | order(_createdAt desc) {
//     title,
//     slug,
//     mainImage {
//       asset->{url}
//     },
//     category->{
//       title
//     }
//   }`;
 
//   const posts = await client.fetch(query);
//   return { props: { posts } };
// }

// export default function Blog({ posts }) {
//   return (
//     <main className="max-w-4xl mx-auto p-6">
//       <h1 className="text-4xl font-bold mb-6">Latest Blog Posts</h1>
//       <div className="grid gap-6">
//         {posts.map((post) => (
//           <BlogCard key={post.slug.current} post={post} />
//         ))}
//       </div>
//     </main>
//   );
// }
