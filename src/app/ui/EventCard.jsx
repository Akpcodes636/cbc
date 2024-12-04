"use client";
import Image from "next/image";

import { useRouter } from "next/navigation";

export default function EventCard({ img, title, content, slug }) {
  const router = useRouter();
  // const params = useParams();

  // console.log(params);

  const gotoEvents = () => {
    router.push(`/events/${slug.current}`);
  };
  return (
    <div className="single-event-main w-full bg-gray-100 md:w-1/2 lg:w-1/4 mt-8 rounded-lg">
      <div className="relative h-60 w-full">
        <Image
          src={img || "/three.jpg"}
          alt={title || "this is our default image"}
          fill
          className="rounded-t-lg w-full h-full object-cover"
        />
      </div>
      <div className="single-content px-6 py-4">
        <h2 className="text-2xl text-[#005effdd]">{title}</h2>
        <p className="text-base">{content}</p>
        <div onClick={gotoEvents}>
          <button className="btn-view-event mt-5 w-36 h-10 font-bold text-white bg-[#005effdd] border-none rounded-md px-4 py-2 cursor-pointer">
            View Event
          </button>
        </div>
      </div>
    </div>
  );
}
