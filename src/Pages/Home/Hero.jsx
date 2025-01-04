import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

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
                <h1 className="text-4xl font-bold">I am Al Amin Islam Rahat,A Proffessional</h1>
                <TypeAnimation
                    sequence={[
                        "Web Developer.",
                        2000,
                        "Web Designer.",
                        2000,
                    ]}
                    wrapper="h1"
                    speed={50}
                    className="text-4xl text-orange-600 md:text-5xl lg:text-4xl font-extrabold mb-6 mx-2"
                    repeat={Infinity}
                    render={(text) => {
                        // Highlight specific words dynamically
                        return text.split(" ").map((word, index) => {
                            const isHighlighted =
                                word.includes("Developer") || word.includes("Designer");

                            return (
                                <span
                                    key={index}
                                    className={isHighlighted ? "text-pink-500" : ""}
                                >
                                    {word}{" "}
                                </span>
                            );
                        });
                    }}
                />

                <p className="text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
                    I'm a passionate Frontend Web Developer with expertise in creating modern, responsive web applications.
                    I specialize in React and Tailwind CSS, with strong experience in backend technologies like Express.js,
                    Node.js, MongoDB, and Firebase for authentication. Let's collaborate to bring your ideas to life!
                </p>
                <div className="flex space-x-4">
                    <button className="px-8 py-3 bg-orange-500 hover:bg-orange-800 text-white font-medium rounded-md shadow-lg transition-all">
                        Contact Me
                    </button>
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
