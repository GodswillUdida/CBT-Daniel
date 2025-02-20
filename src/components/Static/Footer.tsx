import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-cyan-500 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-xl font-bold">TopGrader</h2>
            <p className="mt-2 text-sm">
              Ace your exams with smart practice and real-time testing.
            </p>
          </div>

          <nav>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">Email: support@topgrader.com</p>
            <p className="text-sm">Phone: +234 7010 187793</p>
          </div>
        </div>

        <div className="border-t border-white/30 mt-6 pt-4 text-sm text-center">
          © {new Date().getFullYear()} TopGrader. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
