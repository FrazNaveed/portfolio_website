import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white flex justify-center items-center flex-col md:h-screen"
    >
      <p className=" font-bold inline border-b-4 border-gray-500 text-4xl mt-20">
        About
      </p>

      <div className="p-10 md:max-w-2xl lg:max-w-6xl">
        <p className="lg:text-lg md:text-xl text-sm text-justify">
          I am a BTA certified blockchain developer, having rich experience in
          developing production grade Smart Contracts on EVM compatible
          blockchains. As a blockchain developer, I’ve created many smart
          contracts for different use cases. I am also comfortable with MERN
          stack. I have developed pixel perfect frontends using React.js,
          Tailwind Material UI, Sass etc, connected them with API Backends and
          further connecting them to smart contracts. I have hands-on experience
          with architecture patterns, Test Driven Development, secure coding
          practices & deep understanding of the tech stacks. I am a self-starter
          & a team player with clear communication skills.
        </p>
      </div>
    </div>
    // </div>
  );
};

export default About;
