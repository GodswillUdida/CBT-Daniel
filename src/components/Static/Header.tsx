import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 70);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className={`fixed top-0 left-0 z-50 w-full h-[80px] flex items-center justify-center transition-all duration-500 
    ${scrolling ? "bg-red-600 shadow-lg" : "bg-white"}`}>
      <div className="w-[95%] h-full flex items-center justify-between px-6">
        <Link
          to="/"
          className="text-[30px] md:text-[50px] font-bold transition-all drop-shadow-md duration-500"
        >
          <span className={scrolling ? "text-white" : "text-red-600"}>
            TopGrader
          </span>
        </Link>

        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className={`sm:hidden text-[40px] xsm:flex transition-colors 
            ${scrolling ? "text-white" : "text-black"}`}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        <nav className="hidden sm:flex md:flex items-center">
          <Link to="/auth/register">
            <div className={`w-[120px] md:w-[180px] h-[40px] md:h-[40px] text-[16px] md:text-[20px] font-semibold 
    rounded-lg flex items-center justify-center hover:rounded-tr-full hover:rounded-bl-full 
    transition-all duration-600 cursor-pointer hover:scale-105 shadow-md
    ${scrolling ? "bg-white text-black" : "bg-red-600 text-white"}`}>Get Started</div>
          </Link>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-[80px] left-0 w-full bg-white shadow-lg z-40 flex flex-col"
          >
            {[
              { path: "/auth/register", label: "Get Started" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact Us" },
            ].map(({ path, label }) => (
              <Link to={path} key={path} onClick={toggleMenu}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-[50px] text-[18px] font-semibold bg-red-400 text-white flex items-center justify-center hover:bg-red-700 transition-all duration-300"
                >
                  {label}
                </motion.div>
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
