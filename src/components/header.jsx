"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMenuSharp } from "react-icons/io5";
import Button from "../app/ui/Button";

export default function Header() {
  const [openMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="flex items-center justify-center h-8 bg-black fixed top-0 bottom-0 w-full z-50">
        <p className="text-white font-raleway">Get started its free &rarr;</p>
      </div>

      {/* Main Header */}
      <header className="fixed bg-white top-8 w-full z-50 h-[5.6rem] shadow-lg">
        <div className="max-w-full container-sm mx-auto px- h-full flex items-center justify-between p-4">
          {/* max-w-full */}
          {/* Logo */}
          <Link href="/" className="relative">
            <Image
              src="/logos.png"
              alt="logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-20">
            <Link
              href="/"
              className="font-sans text-base text-black hover:text-gray-900 text-[1.8rem] transition duration-150"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-sans text-base text-black hover:text-gray-900 text-[1.8rem] transition duration-150"
            >
              About
            </Link>
            <Link
              href="/events"
              className="font-sans text-base text-black hover:text-gray-900 text-[1.8rem] transition duration-150"
            >
              Events
            </Link>
            <Link
              href="/blog"
              className="font-sans text-base text-black hover:text-gray-900 text-[1.8rem] transition duration-150"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="font-sans text-base text-black hover:text-gray-900 text-[1.8rem] transition duration-150"
            >
              Contact
            </Link>
            <Link href="https://bit.ly/cbcamptg">
              <Button className="font-heading text-white px-10 py-10 rounded transition duration-150 text-[1.8rem]">
                Join us
              </Button>
            </Link>
          </nav>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpenMenu(!openMenu)}
          >
            <IoMenuSharp className="w-6 h-6 text-black" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="fixed inset-0 bg-white z-20 mt-[7.6rem] md:hidden flex items-center justify-center">
          <nav className="flex flex-col items-center gap-8 pt-40 justify-center">
            <Link
              href="/"
              className="font-sans text-6xl hover:text-blue-500 transition duration-150"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-sans text-6xl hover:text-blue-500 transition duration-150"
            >
              About
            </Link>
            <Link
              href="/events"
              className="font-sans text-6xl hover:text-blue-500 transition duration-150"
            >
              Events
            </Link>

            <Link
              href="/blog"
              className="font-sans text-6xl hover:text-blue-500 transition duration-150"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="font-sans text-6xl hover:text-blue-500 transition duration-150"
            >
              Contact
            </Link>
            <Button className="font-heading text-white px-6 py-2 rounded transition duration-150 text-6xl">
              <Link href="https://bit.ly/cbcamptg">Join us</Link>
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
