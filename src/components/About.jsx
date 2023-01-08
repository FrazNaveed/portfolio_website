import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          I am a BTA certified blockchain developer, having rich experience in
          developing production grade Smart Contracts on EVM compatible
          blockchains. As a blockchain developer, I’ve created many smart
          contracts for different use cases, those included:
        </p>
        <p className="text-xl mt-3">
          <ul>
            <li>• Fungible Tokens</li>
            <li>• NFT Marketplaces</li>
            <li>• Auctions</li>
            <li>• ICO, IFO, IDO</li>
            <li>• Crowdfunding</li>
            <li>• Whitelisting</li>
            <li>• Escrow</li>
            <li>• Staking</li>
            <li>• Decentralized Exchanges and many more</li>
          </ul>
        </p>

        <p className="text-xl mt-5">
          My experience includes the above mentioned smart contracts but isn't
          limited to them. I have done R&D and develop smart contracts tailored
          to the project needs. Along with this, I am comfortable with MERN
          stack. I have developed pixel perfect frontends using React.js,
          Tailwind CSS technologies , connected them with API Backends and
          further connecting them to smart contracts. I have hands-on experience
          with architecture patterns, Test Driven Development, secure coding
          practices & deep understanding of the tech stacks.
        </p>

        <p className="text-xl mt-2">
          I am a self-starter & a team player with clear communication skills.
        </p>
      </div>
    </div>
  );
};

export default About;
