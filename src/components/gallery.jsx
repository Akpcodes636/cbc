import React from "react";
import Image from "next/image";

export default function Gallery() {
  return (
    <section className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] lg:[grid-cols-[55fr_45fr]] py-24 px-3 container-sm mx-auto items-center">
        <div>
          <h1 className="text-[2.4rem] font-days-one text-[#005effdd]">
            Our Community&apos;s Moments
          </h1>
          <p className="text-[1.1rem] font-inter leading-9 mb-6">
            Our team brings nearly a decade of expertise in the blockchain and
            digital assets industry.We have organized high-impact events across
            various African cities and countries.In 2022, we received the
            Outstanding Crypto Community award from the South South Blockchain
            Conference.
          </p>
        </div>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 bg-gray-100">
            <figure className="overflow-hidden">
              <Image
                className="transition-transform duration-300 hover:scale-110 w-full h-full object-cover"
                src="/img1.jpg"
                alt="images of cbc community"
                width={500}
                height={500}
              />
            </figure>
            <figure className="overflow-hidden">
              <Image
                className="transition-transform duration-300 hover:scale-110  w-full h-full object-cover"
                src="/img2.jpg"
                alt="images of cbc community"
                width={500}
                height={500}
              />
            </figure>
            <figure className="overflow-hidden">
              <Image
                className="transition-transform duration-300 hover:scale-110  w-full h-full object-cover"
                src="/img3.jpg"
                alt="images of cbc community"
                width={500}
                height={500}
              />
            </figure>
            <figure className="overflow-hidden">
              <Image
                className="transition-transform duration-300 hover:scale-110  w-full h-full object-cover"
                src="/img4.jpg"
                alt="images of cbc community"
                width={500}
                height={500}
              />
            </figure>
            <figure className="overflow-hidden">
              <Image
                className="transition-transform duration-300 hover:scale-110  w-full h-full object-cover"
                src="/img5.jpg"
                alt="images of cbc community"
                width={500}
                height={500}
              />
            </figure>
            <figure className="overflow-hidden">
              <Image
                className="transition-transform duration-300 hover:scale-110  w-full h-full object-cover"
                src="/img6.jpg"
                alt="images of cbc community"
                width={500}
                height={500}
              />
            </figure>
            <figure className="overflow-hidden">
              <Image
                className="transition-transform duration-300 hover:scale-110  w-full h-full object-cover"
                src="/img7.jpg"
                alt="images of cbc community"
                width={500}
                height={500}
              />
            </figure>
            <figure className="overflow-hidden">
              <Image
                className="transition-transform duration-300 hover:scale-110  w-full h-full object-cover"
                src="/img11.jpg"
                alt="images of cbc community"
                width={500}
                height={500}
              />
            </figure>
            <figure className="overflow-hidden">
              <Image
                className="transition-transform duration-300 hover:scale-110  w-full h-full object-cover"
                src="/img13.jpg"
                alt="images of cbc community"
                width={500}
                height={500}
              />
            </figure>
            <figure className="overflow-hidden">
              <Image
                className="transition-transform duration-300 hover:scale-110  w-full h-full object-cover"
                src="/img12.jpg"
                alt="images of cbc community"
                width={500}
                height={500}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
