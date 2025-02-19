import { motion } from "framer-motion";

import img1 from "../../../assets/cate-icon-1b.svg";
import img3 from "../../../assets/cate-icon-4.svg";
import img4 from "../../../assets/cate-icon-7.svg";
import img2 from "../../../assets/cate-icon-3.svg";

const strategyItems = [
  {
    title: "Design Learning",
    subtitle: "Engaging Educational Tools",
    icon: img1,
  },
  {
    title: "New Hire Onboarding",
    subtitle: "Self-Paced Learning Modules",
    icon: img2,
  },
  {
    title: "Grow Community",
    subtitle: "Adaptive Learning Technology",
    icon: img3,
  },
  {
    title: "Online Teaching",
    subtitle: "Flexible Learning Options",
    icon: img4,
  },
  {
    title: "Compliance Training",
    subtitle: "Boost Consumer Interaction",
    icon: img1,
  },
  {
    title: "Set Up Your Course",
    subtitle: "Best Customer Support",
    icon: img2,
  },
];

const Strategy = () => {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center bg-gray-100 py-12">
      <motion.div
        className="w-[90%] max-w-5xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Our Strategy for
          <span className="ml-2 bg-gradient-to-r from-yellow-400 to-red-400 text-transparent bg-clip-text">
            Success!
          </span>
        </h2>

        <p className="text-gray-600 text-base sm:text-lg mb-8">
          We focus on efficiency, accessibility, and innovation to provide the
          best learning experience. Our approach ensures smooth practice
          sessions, real-time progress tracking, and comprehensive support for
          learners.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategyItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-red-600 rounded-full mb-4 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 invert"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Strategy;
