import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img from "../../../assets/home-3-slider-img-1.jpg";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center bg-gray-300 bg-opacity-40 pt-[120px] bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-[95%] h-full flex flex-col lg:flex-row items-center">
        <div className="max-w-3xl px-6 text-left">
          <h1 className="text-3xl sm:text-4xl font-bold mb-5">
            Ace Your Exams with Smart Practice &{" "}
            <span className="ml-2 bg-gradient-to-r from-yellow-400 to-red-400 text-transparent bg-clip-text">
              Real-Time Testing!
            </span>
          </h1>
          <p className="text-base sm:text-lg mb-6">
            Prepare for your exams with a seamless, AI-powered test experience.
            Access past questions, take timed mock tests, and track your
            progress—all in one place.
          </p>

          <div className="flex space-x-4">
            <Link to="/auth/login">
              <motion.button
                className="bg-red-600 font-semibold px-6 py-3 rounded-lg shadow-md text-white hover:scale-105 hover:-translate-y-1 transition-all"
                variants={fadeInLeft}
                initial="hidden"
                animate="visible"
                whileHover={{ x: 5 }}
                aria-label="Start Practicing Now"
              >
                Start Practicing Now
              </motion.button>
            </Link>

            <motion.button
              className="border border-b font-semibold px-6 py-3 rounded-lg hover:border-red-600 hover:text-red-600 transition-all"
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              whileHover={{ y: 5 }}
              aria-label="Learn More"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
