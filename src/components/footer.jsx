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
    <footer className="bg-white">
      <div className="w-full p-4 py-6 lg:py-8 container-sm mx-auto">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              {" "}
              <Image
                src="/logo.png"
                className="w-1/3 md:w-1/2 lg:w-full "
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
                <div className="mb-4">
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </div>
                <div>
                  <Link href="/contact" className="hover:underline">
                    Contacts
                  </Link>
                </div>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <div className="mb-4">
                  <div>
                    <Link href="https://bit.ly/cbcamplinkedin">Linkedin</Link>
                  </div>
                  <div>
                    <Link
                      href="https://bit.ly/cbcampfacebook"
                      className="hover:underline"
                    >
                      facebook
                    </Link>
                  </div>

                  <div>
                    <Link
                      href="https://bit.ly/cbcamptwitter"
                      className="hover:underline"
                    >
                      Twitter
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://bit.ly/cbcamptg"
                      className="hover:underline"
                    >
                      Telegram
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/https://bit.ly/cbcampinsta"
                      className="hover:underline"
                    >
                      instagram
                    </Link>
                  </div>
                </div>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <div className="mb-4">
                  <Link href="/" className="hover:underline">
                    Privacy Policy
                  </Link>
                </div>
                <div>
                  <Link href="/" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </div>
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
