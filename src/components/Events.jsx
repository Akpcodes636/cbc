import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const SingleEvent = ({ img, title, content, link }) => {
  return (
    <div className="single-event-main w-full bg-gray-100 md:w-1/2 lg:w-1/4 mt-8 rounded-lg">
      <div className="relative h-60 w-full">
        <Image
          src={img}
          alt=""
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg  w-full h-full object-cover"
        />
      </div>
      <div className="single-content px-6 py-4">
        <h2 className="text-2xl text-[#005effdd]">{title}</h2>
        <p className="text-base">{content}</p>
        <Link href={link}>
          <button className="btn-view-event mt-5 w-36 h-10 font-bold text-white bg-[#005effdd] border-none rounded-md px-4 py-2 cursor-pointer">
            View Event{" "}
            {/* <FaArrowRight className="arrow inline-block ml-2 translate-y-1" /> */}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default function Events() {
  const eventData = [
    {
      img: "/p23.jpeg",
      title: "Bitcoin Pizza Day, 2023",
      content:
        "Bitcoin Pizza Day, celebrated on May 22 each year, commemorates the first-ever commercial Bitcoin transaction in 2010...",
      link: "https://event.cbccommunity.com/bitcoin-pizza-day-2023/",
    },
    {
      img: "/sw23.jpeg",
      title: "CBC Web3 Staff Week",
      content:
        "CBC Web3 Staff week is a program designed for both seasoned professionals and aspiring enthusiasts who want to...",
      link: "https://event.cbccommunity.com/building-expertise-and-professionalism-in-web3/",
    },
    {
      img: "/wb23.jpeg",
      title: "International Women's Day Blockchain Week, 2023",
      content:
        "This program included keynote speeches, panel discussions, and workshops, featuring some of the most successful women...",
      link: "https://event.cbccommunity.com/empowering-women-in-web3-staff-week/",
    },
  ];

  return (
    <div className="event-main bg-gray-100">
      <div className="event-title flex mx-auto container justify-between items-center py-20 px-2 lg:px-32 bg-slate-100">
        <h2 className="text-3xl text-[#005effdd]">Past Events</h2>
        <Link href="https://event.cbccommunity.com/#uevents">
          <button className="btn-view-even px-5 py-3 font-bold text-white bg-[#005effdd] border-none rounded-md  cursor-pointer">
            Upcoming Events{" "}
            <FaArrowRight className="arrow inline-block ml-2 translate-y-0.6" />
          </button>
        </Link>
      </div>
      <div className="single-event container flex flex-wrap bg-gray-100 flex-col md:flex-row lg:flex-row justify-between items-start mx-auto w-[95vw]  mb-20 px-2 lg:px-24">
        {eventData.map((event, index) => (
          <SingleEvent
            key={index}
            img={event.img}
            title={event.title}
            content={event.content}
            link={event.link}
          />
        ))}
      </div>
      {/* <div className="m-btn flex justify-center mt-20">
        <Link href="https://event.cbccommunity.com/#uevents">
          <button className="btn-view-event h-12 font-bold text-white bg-[#005effdd] border-none rounded-md px-12 py-3 cursor-pointer">
            Upcoming Events{" "}
            <FaArrowRight className="arrow inline-block ml-2 -translate-y-0.4" />
          </button>
        </Link>
      </div> */}
    </div>
  );
}

// export default Events;
