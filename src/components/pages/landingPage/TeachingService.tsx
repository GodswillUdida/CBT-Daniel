import React from "react";
import { motion } from "framer-motion";
import pic from "../../../assets/Demo-1-Slider-Image-G.png";

const TeachingService = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="h-[100vh] w-full flex items-center justify-center bg-pink-100"
    >
      <div className="h-full w-[95%] flex items-center justify-between p-6 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-[48%] h-full flex flex-col justify-center p-8 text-white"
        >
          <div className="w-16 h-1 bg-black mb-1"></div>
          <h1 className="text-[50px] text-black font-bold mb-5 mt-10">
            Trustworthy And Efficient Exam Practice System.
          </h1>
          <p className="mb-6 text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            excepturi odio voluptate quia nisi illum nulla libero quae
            recusandae.
          </p>
          <div className="flex gap-6 mt-6">
            <motion.div
              className="w-[250px] h-[200px] bg-white flex flex-col items-center justify-center rounded-lg border border-gray-400 shadow-md hover:shadow-[0px_4px_2px_2px_red] transition-shadow p-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-black text-center text-sm font-semibold mt-2">
                Feugiat pretium nibh ipsum consequat nisl vel pretium lectus
                quam
              </p>
            </motion.div>
            <motion.div
              className="w-[250px] h-[200px] bg-white flex flex-col items-center justify-center rounded-lg border border-gray-400 shadow-md hover:shadow-[0px_4px_2px_2px_red] transition duration-1000 p-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-black text-center text-sm font-semibold mt-2">
                Feugiat pretium nibh ipsum consequat nisl vel pretium lectus
                quam
              </p>
            </motion.div>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <button className="bg-red-600 text-white font-semibold py-3 px-7 rounded-lg shadow-md transition">
              Explore More
            </button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-black flex items-center justify-center rounded-full">
                <span className="text-lg">📞 </span>
              </div>
              <p className="text-black text-lg">
                Call us anytime +234 7010 187793
              </p>
            </div>
          </div>
        </motion.div>
        <div className="w-[48%] h-full">
          <img src={pic} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </motion.div>
  );
};

export default TeachingService;
