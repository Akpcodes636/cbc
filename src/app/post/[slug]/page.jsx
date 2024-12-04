import { groq } from "next-sanity";
import { client, urlFor } from "../../../sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import BlogCard from "@/app/ui/BlogCard";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

const capitalizeWords = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Fetch other posts query
const otherPostsQuery = groq`*[_type == 'post' && slug.current != $slug]{
  _id,
  title,
  slug,
  mainImage,
  description,
  _createdAt,
  categories[]->,
  author->
} | order(_createdAt desc)[0...4]`;

const SlugPage = async ({ params: { slug } }) => {
  const currentPostQuery = groq`*[_type == 'post' && slug.current == $slug][0]{
    ...,
    body,
    author->
  }`;

  // Custom RichText components
  const RichTextComponents = {
    types: {
      image: ({ value }) => (
        <Image
          src={urlFor(value).url()}
          alt={value.alt || "Rich Text Image"}
          width={500}
          height={300}
          className="object-cover"
        />
      ),
    },
    marks: {
      link: ({ children, value }) => (
        <Link href={value.href} className="text-blue-500 underline">
          {children}
        </Link>
      ),
    },
  };

  // Fetch the current post
  const post = await client.fetch(currentPostQuery, { slug });

  // Fetch other posts for "Read More"
  const otherPosts = await client.fetch(otherPostsQuery, { slug });

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="py-2">
        {/* Post Header */}
        <div className="flex items-center mb-10">
          <div className="w-full">
            <div
              className="h-[50vh] sm:h-[50vh] flex flex-col"
              style={{
                background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${urlFor(post?.mainImage).url()})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 className="blog-header font-raleway text-center text-4xl text-white">
                {capitalizeWords("Welcome to our blog ")}
              </h1>
              <p className="text-white text-center">
                Learn Web 3 from our expert advice
              </p>
            </div>
          </div>
        </div>

        {/* Post Body */}
        <div className="px-8 container-sm mx-auto">
          <PortableText value={post?.body} components={RichTextComponents} />
        </div>

        {/* Read More Section */}
        <div className="px-4 mt-16 container-sm mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#005effdd] border-b pb-2">
            More Articles You Might Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherPosts.map((p) => (
              <BlogCard key={p._id} post={p} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SlugPage;
