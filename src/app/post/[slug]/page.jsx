import { groq } from "next-sanity";
import { Post } from "/type.jsx";
import { client, urlFor } from "../../../sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import RichText from "../../../components/RichText";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

const capitalizeWords = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const SlugPage = async ({ params: { slug } }) => {
  const currentPostQuery = groq`*[_type == 'post' && slug.current == $slug][0]{
    ...,
    body,
    author->
  }`;

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
        <div className="px-8">
          <PortableText value={post?.body} components={RichTextComponents} />
        </div>

        {/* Read More Section */}
        <h1 className="text-2xl font-bold mt-8 mb-4">Read More</h1>
        <BlogPost posts={otherPosts} />
      </div>
    </>
  );
};

const BlogPost = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p>No additional posts available.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-center flex-wrap gap-8">
        {posts.map((post) => {
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

                  <div className="flex items-center space-x-4">
                    <Image
                      src={authorImage}
                      alt={authorName}
                      width={500}
                      height={500}
                      className="rounded-full w-7 h-7"
                    />
                    <span className="font-medium dark:text-white">
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
  );
};

export default SlugPage;
