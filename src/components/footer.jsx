"use client";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="w-full p-4 py-6 lg:py-8 container mx-auto">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              {" "}
              <Image
                src="/logo.png"
                className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] lg:w-full lg:h-full"
                alt="cryptoWeb3 Logo"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    facebook
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    instagram
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            @{currentYear}
            <Link href="/" className="hover:underline">
              CryptoCommunity
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* Add your SVG icon links here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
