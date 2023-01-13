import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nodeImage from "../assets/node.png";
import expressImage from "../assets/express.png";
import mongoImage from "../assets/mongo.png";
import sassImage from "../assets/sass.png";
import ethersImage from "../assets/ethers.png";
import hardhatImage from "../assets/hardhat.png";
import ganacheImage from "../assets/ganache.png";
import ethereumImage from "../assets/ethereum.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: nodeImage,
      title: "Node",
      style: "shadow-green-600",
    },
    {
      id: 6,
      src: expressImage,
      title: "Express",
      style: "shadow-white",
    },
    {
      id: 7,
      src: mongoImage,
      title: "Mongo",
      style: "shadow-green-600",
    },
    {
      id: 8,
      src: sassImage,
      title: "Sass",
      style: "shadow-pink-400",
    },
    {
      id: 9,
      src: ethereumImage,
      title: "Ethereum",
      style: "shadow-white",
    },
    {
      id: 10,
      src: ganacheImage,
      title: "Ganache",
      style: "shadow-zinc-400",
    },
    {
      id: 11,
      src: hardhatImage,
      title: "Hardhat",
      style: "shadow-yellow-400",
    },
    {
      id: 12,
      src: ethersImage,
      title: "Ethers.js",
      style: "shadow-blue-600",
    },
    // {
    //   id: 5,
    //   src: tailwind,
    //   title: "Tailwind",
    //   style: "shadow-sky-400",
    // },
    // {
    //   id: 6,
    //   src: nextjs,
    //   title: "Next JS",
    //   style: "shadow-white",
    // },
    // {
    //   id: 7,
    //   src: graphql,
    //   title: "GraphQL",
    //   style: "shadow-pink-400",
    // },
    // {
    //   id: 8,
    //   src: github,
    //   title: "GitHub",
    //   style: "shadow-gray-400",
    // },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full  text-white">
        <div className="flex justify-center items-center">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Languages & Tools
          </p>
          <p className="py-6"></p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
