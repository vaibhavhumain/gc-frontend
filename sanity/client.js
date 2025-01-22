// import { createClient } from '@sanity/client';
// import imageUrlBuilder from '@sanity/image-url';

// const client = createClient({
//     projectId: "yz267gij",
//     dataset: "production",
//     apiVersion: "2024-01-01",
//     useCdn: true,
// });

// const builder = imageUrlBuilder(client);

// export const urlFor = (source) => builder.image(source);

// export default client;
// export async function getStaticProps() {
//     const categories = await sanityClient.fetch(`*[_type == "category"]`);
//     const portfolio = await sanityClient.fetch(`*[_type == "portfolio"]`);

//     return {
//         props: {
//             categories,
//             portfolio,
//         },
//     };
// }
