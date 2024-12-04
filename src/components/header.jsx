"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMenuSharp, IoCloseOutline } from "react-icons/io5";
import Button from "../app/ui/Button";

export default function Header() {
  const [openMenu, setIsOpenMenu] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="flex items-center justify-center h-8 bg-black fixed top-0 left-0 right-0 z-50">
        <p className="text-white font-raleway text-sm">
          Get started - it&apos;s free &rarr;
        </p>
      </div>

      {/* Main Header */}
      <header className="fixed bg-white top-8 w-full z-50 h-[5.6rem] shadow-lg">
        <div className="max-w-full container-sm mx-auto px-4 h-full flex items-center justify-between">
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
            {openMenu ? (
              <IoCloseOutline className="w-8 h-8 text-black" />
            ) : (
              <IoMenuSharp className="w-8 h-8 text-black" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-white z-40 md:hidden overflow-hidden animate-fade-in"
          style={{
            top: "7.6rem",
            height: "calc(100vh - 7.6rem)",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
          }}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-8 px-6">
            <div className="space-y-8 text-center">
              <Link
                href="/"
                onClick={closeMenu}
                className="block font-bold text-4xl text-gray-800 hover:text-blue-600 transition duration-300 transform hover:scale-105"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="block font-bold text-4xl text-gray-800 hover:text-blue-600 transition duration-300 transform hover:scale-105"
              >
                About
              </Link>
              <Link
                href="/events"
                onClick={closeMenu}
                className="block font-bold text-4xl text-gray-800 hover:text-blue-600 transition duration-300 transform hover:scale-105"
              >
                Events
              </Link>
              <Link
                href="/blog"
                onClick={closeMenu}
                className="block font-bold text-4xl text-gray-800 hover:text-blue-600 transition duration-300 transform hover:scale-105"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block font-bold text-4xl text-gray-800 hover:text-blue-600 transition duration-300 transform hover:scale-105"
              >
                Contact
              </Link>
            </div>

            <Link
              href="https://bit.ly/cbcamptg"
              onClick={closeMenu}
              className="w-full"
            >
              <div className="flex items-center justify-center">
                <Button className="font-heading text-white px-12 py-4 rounded-full text-2xl bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-lg">
                  Join us
                </Button>
              </div>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
