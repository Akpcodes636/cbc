import React from "react";

export default function Achievements() {
  return (
    <section className="min-h-14 py-24 bg-blue-400 text-white">
      <div className="container-sm mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
        <div>
          <h1 className="text-5xl font-bold text-[2.5rem] mb-3">500+</h1>
          <h3 className="font-inter text-2xl mb-1">Students</h3>
          <p className="font-inter font-thin text-[1.2rem]">
            We&apos;ve successfully trained over 500 industry experts across
            various career niches.When you&apos;re looking for top-tier talent,
            you&apos;ll find they&apos;ve trained with us.
          </p>
        </div>
        <div>
          <h1 className="text-5xl font-bold text-[2.5rem] mb-3">15+</h1>
          <h3 className="font-inter text-2xl mb-1">Locations</h3>
          <p className="font-inter font-thin text-[1.2rem]">
            In 2022, we took the initiative to launch the celebration of Bitcoin
            Pizza Day Hangout(BPDH) across Africa, organizing simultaneous
            events in over 30 cities in 15 countries-all on the same day.For
            over three years and counting, we have sustained and grown the
            impact
          </p>
        </div>
        <div>
          <h1 className="text-5xl font-bold text-[2.5rem] mb-3">4+</h1>
          <h3 className="font-inter text-2xl mb-1">Consistency</h3>
          <p className="font-inter font-thin text-[1.2rem]">
            Consistency is our hallmark. The Crypto Bootcamp Community is a
            synonymous with excellency, professionalism, and skill.We&apos;ve
            delivered our Bootcamp trainings without fail for four consecutive
            years, setting the standard for what it means to be consistent in
            this rapidly evolving industry.
          </p>
        </div>
      </div>
    </section>
  );
}
