import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsBriefcase } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-screen py-24">
      <div className="container mx-auto px-3 md:px-4 lg:px-8">
        <div className="mb-32">
          <span className="text-lg font-bold mb-1 text-left font-days-one uppercase text-[#005effdd]">
            About Us
          </span>
          <h3 className="text-base md:text-2xl lg:text-4xl font-bold font-inter leading-tight">
            Crypto Bootcamp is a one-stop solution for businesses in the
            blockchain and web3 industry.
          </h3>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
            {/* Vision Section */}
            <div className="order-2 md:order-1">
              <div className="h-14 w-14 flex items-center justify-center rounded-full mb-8 bg-[#005effdd]">
                <HiOutlineLightBulb className="h-10 w-10 text-white" />
              </div>
              <h5 className="text-2xl font-bold font-days-one">Our Vision</h5>
              <p className="font-inter">
                To establish a community of individuals with the knowledge and
                resources to naviage and advance in blockchain and Web3
                globally, and carve out the right platform for people to connect
                and access opportunities in emerging technologies
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/vision.jpg"
                alt="images of vision"
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>

            {/* Mission Section */}
            <div className="order-3">
              <Image
                src="/mission.jpg"
                alt="images of mission"
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
            <div className="order-4">
              <div className="h-14 w-14 flex items-center justify-center rounded-full mb-8 bg-[#005effdd]">
                <BsBriefcase className="h-10 w-10 text-white" />
              </div>
              <h5 className="text-2xl font-bold font-days-one">Our Mission</h5>
              <p className="font-inter">
                Our mission is to democratize access to crypto and web3
                education, and foster a knowledge, supportive and engaged
                community. and drive the continuous onboarding of informed and
                skilled participants who can innovate and lead in the blockchain
                revolution
              </p>
            </div>

            {/* Values Section */}
            <div className="order-6 md:order-5">
              <div className="h-14 w-14 flex items-center justify-center rounded-full mb-8 bg-[#005effdd]">
                <FaHandshake className="h-10 w-10 text-white" />
              </div>
              <h5 className="text-2xl font-bold font-days-one">Our Values</h5>
              <ul className="font-inter space-y-2">
                <li>
                  <span className="text-[#005effdd] font-semibold">
                    Excellence:{" "}
                  </span>
                  We are committed to delivering top-tier training, events, and
                  services, setting the standard for professionalism and skill
                  in the blockchain and web3 industry
                </li>
                <li>
                  <span className="text-[#005effdd] font-semibold">
                    Community & Inclusion:{" "}
                  </span>
                  We believe in fostering a strong, inclusive community where
                  individuals and businesses can connect, learn, and grow
                  together within the blockchain ecosystem.
                </li>
                <li>
                  <span className="text-[#005effdd] font-semibold">
                    Innovation:{" "}
                  </span>
                  We continuously explore and implement innovative strategies to
                  drive the adoption of blockchain technology, helping brands
                  stand out and succeed in a competitive market.
                </li>
                {/* <li>
                  <span className="text-[#005effdd] font-semibold">
                    Empowerment:{" "}
                  </span>
                  We are dedicated to empowering individuals and organizations
                  with the knowledge, resources, and support needed to thrive in
                  the evolving blockchain and Web3 landscape
                </li>
                <li>
                  <span className="text-[#005effdd] font-semibold">
                    Consistency:{" "}
                  </span>
                  We pride ourselves on our unwavering commitment to
                  consistency, delivering reliable and impactful programs,
                  services, and events year after year.
                </li> */}
              </ul>
            </div>
            <div className="order-5 md:order-6">
              <Image
                src="/values.jpg"
                alt="images of values"
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
