import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
    // Define Framer Motion variants
    const contentVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    };

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-black bg-opacity-40 items-center justify-center px-6 text-white">
            {/* Content Section */}
            <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="hero-content text-center md:text-left flex flex-col items-center md:items-start"
            >
                <h1 className="text-4xl font-bold">
                    I am Al Amin Islam Rahat, A Professional
                </h1>
                <TypeAnimation
                    sequence={["Web Developer.", 2000, "Web Designer.", 2000]}
                    wrapper="h1"
                    speed={50}
                    className="text-4xl text-orange-600 md:text-5xl lg:text-4xl font-extrabold mb-6 mx-2"
                    repeat={Infinity}
                />

                <p className="text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
                    I'm a passionate Frontend Web Developer with expertise in creating
                    modern, responsive web applications. I specialize in React and
                    Tailwind CSS, with strong experience in backend technologies like
                    Express.js, Node.js, MongoDB, and Firebase for authentication. Let's
                    collaborate to bring your ideas to life!
                </p>

                {/* Social Media Buttons */}
                <div className="flex space-x-4 my-6">
                    <a
                        href="https://www.linkedin.com/in/al-amin-islam-rahat-418487312/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 text-3xl transition"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/alaminislamrahat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-gray-500 text-3xl transition"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.facebook.com/alaminislamrahat132"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-3xl transition"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://www.instagram.com/al_amin_islam_rahat/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 hover:text-pink-700 text-3xl transition"
                    >
                        <FaInstagram />
                    </a>
                </div>

                <div className="flex space-x-4">
                    <Link to="/contact" className="px-8 py-3 bg-orange-500 hover:bg-orange-800 text-white font-medium rounded-md shadow-lg transition-all">
                        Contact Me
                    </Link>
                    <button className="px-8 py-3 bg-transparent border border-white hover:bg-white hover:text-gray-900 text-white font-medium rounded-md shadow-lg transition-all">
                        Download CV
                    </button>
                </div>


            </motion.div>

            {/* Image Section */}
            <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                className="mt-10 md:mt-0 flex justify-center items-center mx-3"
            >
                <div className="w-40 h-40 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-orange-500">
                    <motion.img
                        src="https://i.ibb.co/2swLrnT/342f176b-e368-4274-91ad-f209c757e18f.jpg"
                        alt="Al Amin Islam Rahat"
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
