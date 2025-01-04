import { FaReact, FaNodeJs, FaJsSquare, FaGithub } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiFirebase, SiMongodb } from "react-icons/si";

const AboutMe = () => {
  return (
    <div className="bg-black bg-opacity-40  min-h-screen text-white py-10">
      <h1 className="text-4xl text-center border-b-2 border-yellow-400 w-52 mx-auto font-bold text-yellow-400 mb-4">About Me</h1>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">

        {/* Intro Section */}
        <div className="text-center md:text-left mb-16 md:w-1/2">
          {/* <h1 className="text-4xl font-bold text-yellow-400 mb-4">About Me</h1> */}
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Hi, I'm <span className="text-blue-400 font-bold">Al Amin Islam Rahat</span>, a passionate Frontend Web Developer.
            I specialize in crafting responsive user interfaces with <span className="text-blue-500">React</span>,
            <span className="text-teal-400"> Tailwind CSS</span>, and build full-stack applications with tools like
            <span className="text-green-400"> Node.js</span>, <span className="text-gray-400">Express</span>,
            and <span className="text-green-600">MongoDB</span>. Secure authentication is my forte using
            <span className="text-orange-400"> Firebase</span>.
          </p>
          <p className="mt-4 text-gray-500">
            I’m always exploring new technologies and striving to create impactful digital solutions.
          </p>
        </div>

        {/* Solar System Section */}
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] pt-8">
          {/* Center (Sun) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full w-20 h-20 bg-yellow-400 flex items-center justify-center text-black font-bold shadow-xl">
              Core
            </div>
          </div>

          {/* Planets (Logos) */}
          {/* React (Close Orbit) */}
          <div className="absolute w-full h-full animate-spin-slow">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <FaReact className="w-10 h-10 text-blue-500" />
            </div>
          </div>

          {/* JavaScript (Medium Orbit) */}
          <div className="absolute w-[320px] h-[320px] animate-spin-reverse-slower">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <FaJsSquare className="w-10 h-10 text-yellow-400" />
            </div>
          </div>

          {/* Node.js (Medium Orbit) */}
          <div className="absolute w-[280px] h-[280px] animate-spin-slow">
            <div className="absolute top-1/4 left-0 transform -translate-y-1/2">
              <FaNodeJs className="w-10 h-10 text-green-500" />
            </div>
          </div>

          {/* Tailwind CSS (Far Orbit) */}
          <div className="absolute w-[360px] h-[360px] animate-spin-reverse-slower">
            <div className="absolute top-1/4 right-0">
              <SiTailwindcss className="w-10 h-10 text-teal-400" />
            </div>
          </div>

          {/* Express (Far Orbit) */}
          <div className="absolute w-[340px] h-[340px] animate-spin-slow">
            <div className="absolute bottom-1/4 left-1/4">
              <SiExpress className="w-10 h-10 text-gray-400" />
            </div>
          </div>

          {/* Additional Planets */}
          {/* GitHub */}
          <div className="absolute w-[300px] h-[300px] animate-spin-reverse-slower">
            <div className="absolute top-0 left-1/4">
              <FaGithub className="w-10 h-10 text-gray-700" />
            </div>
          </div>

          {/* Firebase */}
          <div className="absolute w-[260px] h-[260px] animate-spin-slow">
            <div className="absolute bottom-1/4 right-1/4">
              <SiFirebase className="w-10 h-10 text-orange-400" />
            </div>
          </div>

          {/* MongoDB */}
          <div className="absolute w-[380px] h-[380px] animate-spin-reverse-slower">
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
              <SiMongodb className="w-10 h-10 text-green-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
