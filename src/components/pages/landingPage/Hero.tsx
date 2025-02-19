import { motion } from "framer-motion";
import img from "../../../assets/home-3-slider-img-1.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center bg-gray-300 bg-opacity-40 pt-[120px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="w-[95%] h-full flex flex-col lg:flex-row items-center ">
        <div className="max-w-3xl px-6 text-left">
          <h1 className="text-3xl sm:text-4xl font-bold mb-5">
            Ace Your Exams with Smart Practice &
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
            <Link to={"/auth/login"}>
              <motion.button
                className="bg-red-600 font-semibold px-6 py-3 rounded-lg shadow-md text-white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5, x: 5 }}
              >
                Start Practicing Now
              </motion.button>
            </Link>
            <motion.button
              className="bg-transparent border border-b font-semibold px-6 py-3 rounded-lg hover:border-red-600 hover:text-red-600"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, x: 5, y: 5 }}
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
