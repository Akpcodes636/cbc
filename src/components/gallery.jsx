"use client";
import React from "react";
import Image from "next/image";

export default function Gallery() {
  const galleries = [
    {
      name: "image-one",
      imagePath: "/img1.jpg",
      alt: "community moments",
    },
    {
      name: "image-two",
      imagePath: "/img2.jpg",
      alt: "community moments",
    },
    {
      name: "image-three",
      imagePath: "/img3.jpg",
      alt: "community moments",
    },
    {
      name: "image-four",
      imagePath: "/img4.jpg",
      alt: "community moments",
    },
    {
      name: "image-five",
      imagePath: "/img5.jpg",
      alt: "community moments",
    },
    {
      name: "image-six",
      imagePath: "/img6.jpg",
      alt: "community moments",
    },
    {
      name: "image-seven",
      imagePath: "/img7.jpg",
      alt: "community moments",
    },
    {
      name: "image-eight",
      imagePath: "/img8.jpg",
      alt: "community moments",
    },
  ];

  const GalleryItems = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleries.map((gallery, index) => (
          <div key={index} className="aspect-square overflow-hidden">
            <Image
              className="transition-transform duration-300 hover:scale-110 w-full h-full object-cover"
              src={gallery.imagePath}
              alt={gallery.alt}
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="py-24">
      <div className="container-sm mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-center text-2xl font-medium uppercase tracking-wider mb-6">
            Our Community&apos;s Moments
          </h1>
          <p className="text-center text-lg font-light leading-relaxed mb-6">
            Our team brings nearly a decade of expertise in the blockchain and
            digital assets industry. We have organized high-impact events across
            various African cities and countries. In 2022, we received the
            Outstanding Crypto Community award from the South South Blockchain
            Conference.
          </p>
        </div>
        <GalleryItems />
      </div>
    </section>
  );
}
