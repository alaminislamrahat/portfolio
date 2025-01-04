import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiFirebase } from "react-icons/si";

const Skill = () => {
  // Skill data with descriptions
  const skills = [
    {
      name: "React",
      icon: <FaReact className="text-blue-500 text-6xl group-hover:animate-spin" />,
      description: "A JavaScript library for building interactive UIs.",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500 text-6xl group-hover:animate-bounce" />,
      description: "A runtime to build scalable, server-side applications.",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600 text-6xl group-hover:animate-bounce" />,
      description: "A NoSQL database for flexible, scalable data storage.",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-500 text-6xl group-hover:animate-ping" />,
      description: "A minimal and flexible web application framework.",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-400 text-6xl group-hover:animate-spin-slow" />,
      description: "A utility-first CSS framework for rapid UI development.",
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-orange-500 text-6xl group-hover:animate-pulse" />,
      description: "A platform to build mobile and web apps with ease.",
    },
  ];

  return (
    <div className="min-h-screen  text-white py-10 px-5">
      <h1 className="text-center text-4xl font-bold text-orange-500 mb-10">
        My Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="card shadow-lg group transition-transform transform hover:scale-105 hover:shadow-orange-500/50 duration-300 ease-in-out"
          >
            <div className="card-body bg-orange-400 bg-opacity-10 border border-orange-600 rounded-lg p-5 items-center text-center">
              <div className="mb-4">{skill.icon}</div>
              <h2 className="card-title text-xl font-bold mb-2">{skill.name}</h2>
              <p className="text-sm text-gray-300">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
