// "use client";

// import React from "react";
// import { client } from "../../sanity/lib/client"; // Adjust path to your Sanity client
// import { groq } from "next-sanity";

// const BlogPage = async () => {
//   // Fetch blog posts query
//   const query = groq`*[_type == "post"] | order(publishedAt desc) {
//     _id,
//     title,
//     slug,
//     publishedAt,
//     excerpt,
//     "mainImage": mainImage.asset->url
//   }`;

//   const posts = await client.fetch(query);

//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {posts.map((post) => (
//           <div
//             key={post._id}
//             className="border rounded-lg overflow-hidden shadow-md"
//           >
//             {post.mainImage && (
//               <img
//                 src={post.mainImage}
//                 alt={post.title}
//                 className="w-full h-48 object-cover"
//               />
//             )}
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
//               <p className="text-gray-600 mb-4">{post.excerpt}</p>
//               <a
//                 href={`/blog/${post.slug.current}`}
//                 className="text-blue-500 hover:underline"
//               >
//                 Read More
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogPage;
import BlogContent from "../../components/BlogContent";
import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";

export const revalidate = 30;
const query = groq`*[_type == 'post']{
...,
author->,
categories[]->
} | order(_createdAt asc)`;

export default async function page() {
  const posts = await client.fetch(query);
  return (
    <div>
      <BlogContent posts={posts} />
    </div>
  );
}
