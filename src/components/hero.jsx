"use client";
import Link from "next/link";

export default function Home() {
  return (
    <section className="hero-image min-h-screen pt-[13.6rem]">
      <div className="container-sm mx-auto h-screen pt-[14.6rem] text-center flex items-start justify-center max-w-[120rem] px-[1.2rem] md:px-[1.3rem] lg:px-[3.2rem]">
        <div className="">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 font-days-one">
            Connect. Innovate. Transform.
          </h1>
          <p className="text-xl md:text-2xl font-light mx-4 md:mx-8 text-white mb-20 leading-snug md:leading-relaxed font-inter">
            Join thousands of critical-thinking individuals, industry leaders,
            tech experts and blockchain enthusiasts in a community that supports
            future-ready innovations, career growth, personal development and
            community building.
          </p>
          <Link
            href="/about"
            className="px-[0.8rem] py-[1.2rem] bg-black rounded-[9px] text-xl font-bold text-white ease-in-out  mr-[1.6rem] font-inter hover:opacity-90 transition-opacity duration-300"
          >
            Learn more&darr;
          </Link>
          <Link
            href="/contact"
            className="px-[0.8rem] py-[1.2rem] bg-white rounded-[9px] text-xl font-bold text-[#555] hover:shadow-lg duration-300 ease-in-out font-inter hover:opacity-90 transition-opacity"
          >
            contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
