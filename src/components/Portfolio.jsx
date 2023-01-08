import React from "react";
import { BsGithub } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import coffeePage from "../assets/portfolio/coffee_page.PNG";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: coffeePage,
      website: "https://buy-me-coffee-dun.vercel.app/",
      github: "https://github.com/FrazNaveed/buy_me_coffee",
      heading: "Buy Me Coffee",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Some of my works:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, heading, website, github }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div>
                <div className="mt-2 ml-3">
                  <p className="text-xl font-bold antialiased">{heading}</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button
                  id="website"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  <a href={website} target="_blank">
                    <TbWorld style={{ fontSize: "30px" }} />
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={github} target="_blank">
                    {" "}
                    <BsGithub style={{ fontSize: "30px" }} />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
