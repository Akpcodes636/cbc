"use client";
import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
// import { urlFor } from "../sanity/lib/client";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { client } from "../sanity/lib/client";
import { groq } from "next-sanity";
import { event } from "@/sanity/schemaTypes/event";
import { useRouter } from "next/navigation";
import EventCard from "@/app/ui/EventCard";
// import { useRouter } from "next/router";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  // Check if source exists before trying to create an image URL
  return source ? builder.image(source) : null;
}

const query = groq`*[_type == 'event']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`;

export default function Events() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const gotoEvents = () => {
    router.push(`/events/${event?.slug?.current}`);
  };
  const fetchData = async () => {
    try {
      const data = await client.fetch(query);
      setData(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  });

  // Map Sanity data to the eventData structure
  const eventData = data?.map((item) => {
    const imageUrl = item?.image?.asset
      ? urlFor(item?.image?.asset).url()
      : "/placeholder.jpg";

    // console.log("Image URL:", imageUrl); // Log to verify URL generation
    return {
      img: imageUrl,
      title: item.title,
      content: item.description || "No description available.",
      slug: item.slug,
    };
  });

  return (
    <div className="event-main bg-gray-100 py-10">
      <div className="event-title flex mx-auto container-sm justify-between items-center pt-8 bg-slate-100">
        <h2 className="text-3xl text-[#005effdd]">Past Events</h2>
        <div onClick={gotoEvents}>
          <button className="btn-view-even px-5 py-3 font-bold text-white bg-[#005effdd] border-none rounded-md cursor-pointer">
            Upcoming Events{" "}
            <FaArrowRight className="arrow inline-block ml-2 translate-y-0.6" />
          </button>
        </div>
      </div>
      <div className="single-event container-sm flex flex-wrap bg-gray-100 flex-col md:flex-row lg:flex-row justify-between items-start mx-auto w-[100vw] md:w-[400vw] mb-20 px-2">
        {eventData.map((event, i) => (
          <EventCard
            key={i}
            img={event.img}
            title={event.title}
            content={event.content}
            slug={event.slug}
          />
        ))}
      </div>
    </div>
  );
}
