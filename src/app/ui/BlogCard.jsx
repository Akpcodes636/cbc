"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/lib/client";

const builder = imageUrlBuilder(client);

// Function to generate image URL safely
function urlFor(source) {
  // Check if source exists before trying to create an image URL
  return source ? builder.image(source) : null;
}

const BlogCard = ({ post }) => {
  // Add a fallback image or null check
  const imageUrl = post?.mainImage?.asset
    ? urlFor(post.mainImage.asset).url()
    : "/placeholder-image.jpg"; // Add a placeholder image path

  return (
    <div className="max-w-s bg-white border border-gray-200 rounded-lg shadow">
      <Link
        href={`/post/[slug]`}
        as={`/post/${post?.slug?.current}`}
        className="w-full h-52 overflow-hidden inline-block"
      >
        {imageUrl && (
          <Image
            className="rounded-t-lg h-full w-full object-cover object-center"
            src={imageUrl}
            width={500}
            height={500}
            alt={post?.title || "Blog post image"}
          />
        )}
      </Link>
      <div className="p-5">
        <Link href={`/post/[slug]`} as={`/post/${post?.slug?.current}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post?.title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {post?.description}
        </p>
        <Link
          href={`/post/[slug]`}
          as={`/post/${post?.slug?.current}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#005effdd] rounded-lg hover:bg-blue-800 transition-all duration-300 ease-in-out"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
