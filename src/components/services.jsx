import React from "react";
import {
  FaGraduationCap,
  FaBullhorn,
  FaBriefcase,
  FaUsers,
  FaChartLine,
  FaBuilding,
} from "react-icons/fa";

const services = [
  {
    icon: <FaGraduationCap size={50} className="text-[#005effdd]" />,
    title: "Education & Events",
    description:
      "High-quality training, workshops, and community events to keep you at the cutting edge.",
  },
  {
    icon: <FaBullhorn size={50} className="text-[#005effdd]" />,
    title: "Marketing & Campaigns",
    description:
      "Effective campaigns designed to amplify your brand's reach and impact.",
  },
  {
    icon: <FaBriefcase size={50} className="text-[#005effdd]" />,
    title: "Brand Promotions",
    description:
      "Drive brand awareness with targeted promotions to enhance visibility and growth.",
  },
  {
    icon: <FaUsers size={50} className="text-[#005effdd]" />,
    title: "Community Building",
    description:
      "Strengthen your network and foster engagement with community-focused initiatives.",
  },
  {
    icon: <FaChartLine size={50} className="text-[#005effdd]" />,
    title: "Talent Training & HR",
    description:
      "Professional training and HR services to help cultivate skilled, adaptable talent.",
  },
  {
    icon: <FaBuilding size={50} className="text-[#005effdd]" />,
    title: "Growth & Expansion",
    description:
      "Customized solutions to scale operations and drive sustainable growth.",
  },
];

export default function Services() {
  return (
    <section className="">
      <div className="py-30 container-sm mx-auto">
        <h2 className="font-days-one  text-[#005effdd] text-center text-[2.4rem] py-20">
          Our Services
        </h2>
        <div className="grid-container grid grid-cols-1 md:grid-cols-3 gap-8 p-4 lg:p-8 bg-white">
          {services.map((service, index) => (
            <div
              key={index}
              className="card flex items-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="icon-container flex justify-center items-center w-1/4">
                {service.icon}
              </div>
              <div className="Bold w-3/4 pl-4">
                <h5 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h5>
                <p className="text-gray-600 text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
