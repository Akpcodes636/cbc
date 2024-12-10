"use client";
import Link from "next/link";
import { urlFor } from "../sanity/lib/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "@/app/ui/Loader";
import { client } from "../sanity/lib/client";
import { groq } from "next-sanity";

// Utility function to capitalize words
const capitalizeWords = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Utility to truncate text
const truncateText = (text, maxLength = 150) => {
  if (!text) return "";
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

export const revalidate = 30;
const query = groq`*[_type == 'post']{
 ...,
 author->,
 categories[]->
 } | order(_createdAt desc)`;

const BlogContent = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSanityBlogs = async () => {
      try {
        const fetchedPosts = await client.fetch(query);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching blog posts", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSanityBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500 bg-gray-50 p-4 text-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Oops! Something went wrong
          </h2>
          <p>Failed to load blog posts. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-[500px] flex flex-col justify-center items-center text-center 
        bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/three.jpg')`,
        }}
      >
        <div className="max-w-3xl px-6">
          <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight">
            {capitalizeWords("Explore Web 3 Insights")}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Dive into Cutting-Edge Blockchain, Cryptocurrency, and Decentralized
            Technology Perspectives
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-16">
        {posts.length === 0 ? (
          <div className="text-center text-gray-500 py-16">
            <h2 className="text-3xl font-semibold mb-4">No Blog Posts Yet</h2>
            <p className="text-gray-600">Check back soon for new content!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              // Safely extract values
              const slug = post?.slug?.current || "";
              const createdAt = post?._createdAt || "";
              const mainImageUrl = post?.mainImage
                ? urlFor(post.mainImage).url()
                : "/placeholder.jpg";
              const category =
                typeof post?.categories?.[0] === "object"
                  ? post.categories[0].title
                  : "Uncategorized";
              const authorImage = post?.author?.image
                ? urlFor(post.author.image).url()
                : "/vision.jpg";
              const authorName =
                typeof post?.author?.name === "string"
                  ? post.author.name
                  : "Anonymous";

              return (
                <Link key={post?._id} href={`/post/${slug}`} className="group">
                  <article
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl 
                    transition-all duration-300 overflow-hidden border border-gray-100
                    transform hover:-translate-y-2 ease-in-out"
                  >
                    {/* Post Image */}
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={mainImageUrl}
                        alt={post?.title || "Blog Post"}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        placeholder="blur"
                        blurDataURL="/placeholder.jpg"
                      />
                    </div>

                    {/* Post Content */}
                    <div className="p-6 flex flex-col h-[calc(100%-16rem)]">
                      {/* Meta Information */}
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <time dateTime={createdAt} className="mr-2">
                          {createdAt
                            ? new Date(createdAt).toLocaleDateString("en-US", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              })
                            : "Date Not Available"}
                        </time>
                        <span className="mx-2">•</span>
                        <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs">
                          {category}
                        </span>
                      </div>

                      {/* Post Title */}
                      <h2
                        className="text-xl font-bold mb-3 text-gray-800 
                        group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[3rem]"
                      >
                        {typeof post?.title === "string"
                          ? post.title
                          : "Untitled Post"}
                      </h2>

                      {/* Post Excerpt */}
                      <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">
                        {truncateText(post?.description)}
                      </p>

                      {/* Author Section */}
                      <div className="flex items-center space-x-3 mt-auto pt-4 border-t border-gray-100">
                        <div className="w-8 h-8">
                          <Image
                            src={authorImage}
                            alt={authorName}
                            width={50}
                            height={50}
                            className="rounded-full object-cover h-full w-full"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {authorName}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogContent;
