import Image from "next/image";
import Hero from "@/components/hero";
import Brands from "@/components/brands";
import About from "@/components/About";
import Achievements from "@/components/achievements";
import Gallery from "@/components/gallery";
import Events from "@/components/Events";
import Services from "@/components/services";
import Contact from "@/components/contact";
// import { client } from "../app/lib/sanity-client";
import { client } from "../sanity/lib/client";
import { groq } from "next-sanity";

// Execute Query
const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`;

export default async function Home() {
  const posts = await client.fetch(query);
  // console.log(posts);
  return (
    <div className="min-h-screen">
      <Hero />
      <Brands />
      <About />
      <Achievements />
      <Gallery />
      <Events />
      <Services />
      <Contact />
    </div>
  );
}
