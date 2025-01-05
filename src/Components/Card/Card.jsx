import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Card = ({ project }) => {
  const { image, title, description, githubLink1, githubLink2, liveLink } = project;

  return (
    <div className=" hover:shadow-orange-400 bg-gray-900 bg-opacity-35 text-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full">
      {/* Image Section */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={githubLink1}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-gray-700 rounded hover:bg-gray-600 transition md:px-4 md:py-2"
          >
            <FaGithub />
            <span className="text-sm md:text-base">Client</span>
          </a>
          <a
            href={githubLink2}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-gray-700 rounded hover:bg-gray-600 transition md:px-4 md:py-2"
          >
            <FaGithub />
            <span className="text-sm md:text-base">Server</span>
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-orange-500 text-white rounded hover:bg-orange-400 transition md:px-4 md:py-2"
          >
            <FaExternalLinkAlt />
            <span className="text-sm md:text-base">Live</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Card;
