import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [openMainMenu, setOpenMainMenu] = useState(false);

  const toggleOpenMainMenu = () => {
    setOpenMainMenu((prev) => !prev);
  };

  return (
    <nav className="bg-gradient-to-r from-stone-800/80 to-neutral-800/80 via-gray-500/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-30 mx-4 rounded-b-lg shadow-lg">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 pt-1 pb-2">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-semibold text-white whitespace-nowrap">
            ilhamragadn.
          </span>
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="md:hidden p-2 text-white"
          onClick={toggleOpenMainMenu}
          aria-controls="main-menu"
          aria-expanded={openMainMenu}
          aria-label="Toggle main menu"
        >
          <FontAwesomeIcon icon={faBars} size="xl" />
        </button>

        {/* Menu items */}
        <div
          id="main-menu"
          className={`w-full md:w-auto ${
            openMainMenu ? "block" : "hidden"
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-2 md:mt-0">
            <li>
              <Link
                to="/"
                className="block px-3 py-2 text-white font-semibold hover:text-gray-300"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                className="block px-3 py-2 text-white font-semibold hover:text-gray-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#career"
                className="block px-3 py-2 text-white font-semibold hover:text-gray-300"
              >
                Career
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="block px-3 py-2 text-white font-semibold hover:text-gray-300"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#skill"
                className="block px-3 py-2 text-white font-semibold hover:text-gray-300"
              >
                Skill
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
