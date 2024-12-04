"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { groq } from "next-sanity";
import { client, urlFor } from "../sanity/lib/client"; // Ensure these are correctly imported
import Loader from "@/app/ui/Loader";
// import { Link } from "next/";
import Link from "next/link";
import BlogCard from "@/app/ui/BlogCard";
// import { useParams } from "next/navigation";

const querys = groq`*[_type == 'post']{
  ...,
  author->,
  description,
  categories[]-> 
} | order(_createdAt asc)`;

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSanityBlogPost = async () => {
      setLoading(true);
      try {
        const fetchedPosts = await client.fetch(querys);
        if (fetchedPosts) setPosts(fetchedPosts);
      } catch (error) {
        console.log("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    getSanityBlogPost();
  }, []);

  return (
    <section className="container-sm mx-auto">
      <div className="py-[3.5rem]">
        <h2 className="text-center text-4xl font-bold font-days-one mb-6">
          Featured Blogs
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 relative">
          {loading && <Loader />}
          {!posts ? (
            <p>No blogs available.</p>
          ) : (
            posts?.map((p, i) => <BlogCard key={i} post={p} />)
          )}
        </div>
      </div>
    </section>
  );
}
