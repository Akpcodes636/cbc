"use client";
import Link from "next/link";
import { urlFor } from "../sanity/lib/client";
import Image from "next/image";

// Add capitalizeWords function
const capitalizeWords = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const BlogContent = ({ posts = [] }) => {
  return (
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

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center flex-wrap gap-8">
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

            return (
              <Link key={post?._id} href={`/post/${slug}`} className="group">
                <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-[400px] w-[350px]">
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
                          ? new Date(createdAt).toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })
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
                      {post?.description}
                    </p>

                    <div class="flex items-center space-x-4">
                      <Image
                        src={authorImage}
                        alt={authorName}
                        width={500}
                        height={500}
                        className="rounded-full w-7 h-7"
                      />
                      <span class="font-medium dark:text-white">
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
  );
};

export default BlogContent;
