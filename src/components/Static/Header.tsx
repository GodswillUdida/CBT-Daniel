import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

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

   const headerClasses = `fixed top-0 left-0 z-50 w-full h-[80px] flex items-center justify-center transition-all duration-500 
    ${scrolling ? "bg-red-600 shadow-lg" : "bg-white"}`;

   const logoClasses = `text-[30px] md:text-[50px] font-bold drop-shadow-md transition-all duration-500 
    ${scrolling ? "text-white" : "text-red-600"}`;

   const buttonClasses = `w-[120px] md:w-[180px] h-[40px] md:h-[40px] text-[16px] md:text-[20px] font-semibold 
    rounded-lg flex items-center justify-center hover:rounded-tr-full hover:rounded-bl-full 
    transition-all duration-600 cursor-pointer hover:scale-105 shadow-md
    ${scrolling ? "bg-white text-black" : "bg-red-600 text-white"}`;

  return (
    <header className={headerClasses}>
      <div className="w-[95%] h-full flex items-center justify-between px-6">
        <div className={logoClasses}>TopGrader</div>

        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className={`sm:hidden text-[40px] xsm:flex  transition-colors 
            ${scrolling ? "text-white" : "text-black"}`}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        <nav className="hidden sm:flex md:flex items-center">
          <Link to="/auth/register">
            <div className={buttonClasses}>Get Started</div>
          </Link>
        </nav>
      </div>

      {menuOpen && (
        <nav className="md:hidden absolute top-[80px] left-0 w-full bg-white shadow-lg z-40">
          <Link to="/auth/register" onClick={toggleMenu}>
            <div className="w-full h-[40px] text-[20px] font-semibold bg-red-400 text-white flex items-center justify-center hover:bg-red-600 transition-all duration-300">
              Get Started
            </div>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
