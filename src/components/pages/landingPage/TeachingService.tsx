import { motion } from "framer-motion";
import pic from "../../../assets/Demo-1-Slider-Image-G.png";

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const TeachingService = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-pink-100">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInLeft}
        className="w-[95%] max-w-6xl flex flex-col md:flex-row items-center justify-between p-6 gap-6"
      >
        <article className="w-full md:w-[48%] flex flex-col justify-center p-6 text-white">
          <div className="w-16 h-1 bg-black mb-2"></div>
          <h1 className="text-3xl sm:text-4xl text-black font-bold mb-5">
            Trustworthy And Efficient Exam Practice System.
          </h1>
          <p className="mb-6 text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            excepturi odio voluptate quia nisi illum nulla libero quae
            recusandae.
          </p>

          <div className="flex flex-wrap gap-6 mt-6">
            {[1, 2].map((_, i) => (
              <motion.div
                key={i}
                className="w-full sm:w-[250px] h-[200px] bg-white flex flex-col items-center justify-center rounded-lg border border-gray-400 shadow-md hover:shadow-[0px_4px_2px_2px_red] transition-shadow p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-black text-center text-sm font-semibold mt-2">
                  Feugiat pretium nibh ipsum consequat nisl vel pretium lectus
                  quam
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <button className="bg-red-600 text-white font-semibold py-3 px-7 rounded-lg shadow-md transition hover:scale-105">
              Explore More
            </button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-black flex items-center justify-center rounded-full">
                <span className="text-lg">📞</span>
              </div>
              <p className="text-black text-lg">
                Call us anytime +234 7010 187793
              </p>
            </div>
          </div>
        </article>

        <div className="w-full md:w-[48%] max-h-[500px] flex items-center justify-center">
          <img
            src={pic}
            alt="Teaching Service"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default TeachingService;
