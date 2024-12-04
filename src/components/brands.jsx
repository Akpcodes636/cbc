import React from "react";
import Image from "next/image";

const Brands = () => {
  const logos = [
    {
      id: "pizzaDao",
      type: "png",
      name: "PizzaDAO",
      imagePath: "/PIZZADAO.png",
      alt: "PizzaDAO Logo",
    },
    {
      id: "technext",
      type: "png",
      name: "Technext",
      imagePath: "/Technext-Logo-2022-03.png",
      alt: "Technext Logo",
    },
    {
      id: "yellow",
      type: "svg",
      alt: "Yellow Logo",
      content: (
        <svg viewBox="0 0 1700 1200" className="w-full h-full">
          <g>
            <path
              className="fill-[#FFCF33]"
              d="M277,554.4c0-68.5,56.7-124,126.7-124h32.9v216.3c0,68.5-56.7,124-126.7,124H277V554.4z"
            />
            <path
              className="fill-[#FFCF33]"
              d="M89,536.5c0,68.5,56.7,124,126.7,124h32.9V554.4c0-68.5-56.7-124-126.7-124H89V536.5z"
            />
            <path
              className="fill-[#FFD755]"
              d="M248.6,659.6L90,430.4h32c70,0,126.7,55.5,126.7,124V659.6z"
            />
            <path
              className="fill-[#4FA58C]"
              d="M685.7,614.4c70,0,126.7,55.5,126.7,124v32.2h-221c-70,0-126.7-55.5-126.7-124v-32.2H685.7z"
            />
            <path
              className="fill-[#6CB49F]"
              d="M766.1,770.7L658,614.4h27.8c70,0,126.7,55.5,126.7,124v32.2H766.1z"
            />
            <path
              className="fill-[#4FA58C]"
              d="M685.7,586.6c70,0,126.7-55.5,126.7-124v-32.2h-221c-70,0-126.7,55.5-126.7,124v32.2H685.7z"
            />
            <path
              className="fill-[#6CB49F]"
              d="M638.7,586.6L538.5,441.7c16.1-7.3,34.1-11.3,53-11.3h221v32.2c0,68.5-56.7,124-126.7,124H638.7z"
            />
          </g>
        </svg>
      ),
    },
    {
      id: "bitfinex",
      type: "svg",
      alt: "Bitfinex Logo",
      content: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-35.401245 -6.813025 306.81079 40.87815"
          className="w-full h-full"
        >
          <g fill="none">
            <path
              d="M209.533 23.3927c1.2688 1.3437 8.2378 7.7836 19.1764.3096 7.9098-6.1599 7.7122-19.5147 6.9523-23.5477-.2647.587-9.4521 20.7062-26.1287 23.2381z"
              fill="#97c554"
            />
            <path
              d="M235.6607.1512c-.097-.04-10.2732-1.4274-20.3333 5.052-6.247 4.0236-7.0727 9.9125-6.7877 13.8365C223.1641 17.403 235.329.6127 235.6607.1512z"
              fill="#709b30"
            />
            <path
              d="M16.314 22.6073H4.922V16.54h11.392c2.848 0 4.3029 1.362 4.3029 3.1266 0 1.7026-1.424 2.9408-4.303 2.9408zm-.3715-9.3178H4.922V8.1817h11.0205c3.0027 0 4.179 1.0525 4.179 2.5075 0 1.331-1.362 2.6003-4.179 2.6003zm2.9099 1.5478c4.7982-.1548 6.5317-2.5384 6.5317-5.1387 0-2.848-2.2598-5.2007-7.77-5.2007H0v21.7313h18.1404c4.5196 0 7.8938-1.8883 7.8938-5.9436 0-2.879-1.8883-5.3245-7.1818-5.4483zM31.8476 4.4979v21.7313h4.922V4.4979zm24.8825 4.1172h10.8347V4.4979H40.9734v4.1172H51.808v17.6141h4.922zm15.0384-4.1172v21.7313h4.922v-8.482h11.5467v-3.56H76.6905V8.2436H95.45V4.498zm27.6685 0v21.7313h4.922V4.4979zm16.4624 5.2935l16.314 16.4378h5.572V4.4979h-4.86v15.6639l-15.664-15.6639h-6.253v21.7313h4.891zm28.5353-5.2935v21.7313h24.084v-3.6528h-19.162v-5.9746h11.4848v-3.3742h-11.4847v-4.984h19.1619V4.498zm57.046 0H194.98l-8.2963 7.6462-8.2343-7.6462h-6.5937l11.5776 10.7109-12.011 11.0204h6.5008l8.6987-8.0177 8.6678 8.0177h6.6246l-12.042-11.0514z"
              fill="#ddd"
            />
          </g>
        </svg>
      ),
    },
  ];

  const LogoItem = ({ logo }) => (
    <div className="flex-none w-24 md:w-58 lg:w-60 h-20 md:h-24 flex items-center justify-center group">
      {logo.type === "png" ? (
        <Image
          src={logo.imagePath}
          alt={logo.alt}
          className="w-full h-full object-contain group-hover:opacity-100 opacity-50 transition-opacity"
        />
      ) : (
        <div className="w-full p-2 brightness-90 opacity-50 md:h-24 h-16 group-hover:opacity-100 transition-opacity">
          {logo.content}
        </div>
      )}
    </div>
  );

  return (
    <section className="pt-[4.8rem] pb-[3rem]">
      <div className="container-sm mx-auto">
        <h2 className="text-center text-[1.4rem] font-medium uppercase tracking-[0.75px] mb-[2.4rem]">
          As featured in
        </h2>
        <div className="flex max-w-full justify-between filter brightness-0  h-6 md:h-20">
          {logos.map((logo, index) => (
            <LogoItem key={index} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
