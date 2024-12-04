"use client";
import React from "react";
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Custom404() {
  const router = useRouter();

  const gotoHome = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-md w-full bg-white p-8 text-center">
        <div className="text-9xl font-bold text-blue-500 mb-4">404</div>
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          Oops! The page you're looking for seems to have wandered off.
        </p>
        <div className="flex justify-center">
          <button
            onClick={gotoHome}
            className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            <Home className="mr-2" size={20} />
            Return Home
          </button>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          Need help?{" "}
          <Link href="/contact" className="text-blue-500 hover:underline">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
