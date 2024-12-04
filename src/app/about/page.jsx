import React from "react";
import { Linkedin } from "lucide-react";

// Team Member Component
const TeamMember = ({ img, name, role, content, linked }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Image
          src={img}
          alt={name}
          className="w-full h-80 object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-2xl font-bold mb-1">{name}</h3>
          <p className="text-sm text-gray-200">{role}</p>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <p className="text-gray-600 text-sm leading-relaxed min-h-[120px]">
          {content}
        </p>
        <div className="border-t pt-4">
          <a
            href={linked}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-blue-600 hover:text-blue-800 transition-colors space-x-2 group/link"
          >
            <Linkedin className="w-5 h-5 group-hover/link:rotate-6 transition-transform" />
            <span className="text-sm font-medium">LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 font-inter">
      <div className="container mx-auto max-w-6xl py-60">
        {/* Who We Are Section */}
        <section className="text-center mb-16 space-y-6">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-6">
            Who We Are?
          </h1>
          <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg font-light tracking-wide">
            With over 10,000+ community members across the continent, we pride
            ourselves on our ability to create a platform that supports growth
            and personal development. Over the last 3 years, we have earned
            ourselves an enviable track record in the blockchain industry and
            the global digital economy.
          </p>
        </section>

        {/* Team Members Section */}
        <section>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Innovative Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center">
            <TeamMember
              img="/obinna.JPG"
              name="Obinna Iwunno"
              role="Founder/Lead Director"
              content="Obinna Iwunno, Founder of Crypto Bootcamp Community, blockchain educator, project manager, and SiBAN President, Committed to blockchain growth, training 10,0000+ people and advocating for massive blockchain adoption, especially in Africa."
              linked="https://www.linkedin.com/in/obinna-iwuno-b1575b106?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />
            <TeamMember
              img="/debbie.png"
              name="Deborah Akpokighe"
              role="Head of Community"
              content="Deborah Akpokighe, Head of Community at Crypto Bootcamp; a blockchain and Web3 education platform. She has a B.Sc in Health Education. Passionate about personal growth, constantly improving. A purpose-driven community manager driving brands to solve real-world issues."
              linked="https://www.linkedin.com/in/deborahakpokighe?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />
            <TeamMember
              img="/comfort.png"
              name="Comfort Ikechukwu"
              role="Creative writer/Content Creator"
              content="Comfort Ikechukwu is a versatile professional with a passion for words, communities, and the exciting world of blockchain and cryptocurrencies. She combines her creative writing skills with her enthusiasm for blockchain technology to help others navigate this dynamic landscape."
              linked="http://www.linkedin.com/in/comfortikechukwu"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
