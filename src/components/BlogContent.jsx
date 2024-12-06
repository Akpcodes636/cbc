"use client";
import Link from "next/link";
import { urlFor } from "../sanity/lib/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "@/app/ui/Loader";
import { client } from "../sanity/lib/client";
import { groq } from "next-sanity";

// Add capitalizeWords function
const capitalizeWords = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const revalidate = 30;
const query = groq`*[_type == 'post']{
 ...,
 author->,
 categories[]->
 } | order(_createdAt asc)`;

// const BlogContent = ({ posts = [] }) => {
const BlogContent = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const getSanityBlogs = async () => {
      setLoading(true);
      try {
        const posts = await client.fetch(query);
        console.log(posts);
        if (posts) {
          setPost(posts);
        }
        // const res = await axios.get();
      } catch (error) {
        console.log("Error fetching items", e);
      } finally {
        setLoading(false);
      }
    };
    getSanityBlogs();
  }, []);
  // getSanityBlogs();
  return (
    <div className="min-h-screen">
      {loading ? (
        <div className="relativ">
          <Loader />{" "}
        </div>
      ) : (
        <div className="bg-gray-100">
          <div
            className="h-[50vh] sm:h-[50vh] flex flex-col"
            style={{
              background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/three.jpg')`,
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
              Learn Web 3 from our expert advices
            </p>
          </div>

          <div className="container mx-auto px-4 py-20">
            <div className="flex items-center justify-center flex-wrap gap-8">
              {console.log(posts)}
              {posts.map((post) => {
                // Safely extract values to avoid rendering objects
                const slug = post?.slug?.current || "";
                const createdAt = post?._createdAt || "";
                const mainImageUrl = post?.mainImage
                  ? urlFor(post.mainImage).url()
                  : "/placeholder.jpg";
                const category =
                  typeof post?.categories?.[0] === "object"
                    ? post.categories[0].title
                    : "Marketing";
                const authorImage = post?.author?.image
                  ? urlFor(post.author.image).url()
                  : "/vision.jpg";
                const authorName =
                  typeof post?.author?.name === "string"
                    ? post.author.name
                    : "Anonymous";
                  const descriptions = post?.description
                return (
                  <Link
                    key={post?._id}
                    href={`/post/${slug}`}
                    className="group"
                  >
                    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-[350px] w-[350px] relative">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={mainImageUrl}
                          alt={post?.title || "Blog Post"}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <time dateTime={createdAt}>
                            {createdAt
                              ? new Date(createdAt).toLocaleDateString(
                                  "en-US",
                                  {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                  }
                                )
                              : "Date Not Available"}
                          </time>
                          <span className="mx-2">•</span>
                          <span className="bg-gray-100 px-2 py-1 rounded-full">
                            {category}
                          </span>
                        </div>

                        <h2 className="text-xl font-semibold mb-3 group-hover:text-[#005effdd]">
                          {typeof post?.title === "string"
                            ? post.title
                            : "Untitled Post"}
                        </h2>

                        <p className="text-gray-600 line-clamp-3 mb-4">
                          {descriptions}
                        </p>

                        <div className="flex items-center space-x-4">
                          <Image
                            src={authorImage}
                            alt={authorName}
                            width={500}
                            height={500}
                            className="rounded-full w-7 h-7"
                          />
                          <span className="font-medium dark:text-white">
                            {" "}
                            {authorName}
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogContent;
