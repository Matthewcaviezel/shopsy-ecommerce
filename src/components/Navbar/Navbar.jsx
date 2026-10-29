
import { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";

import {
  FaSearch,
  FaShoppingCart,
  FaMoon,
  FaSun,
  FaCaretDown,
} from "react-icons/fa";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#services" },
  { id: 3, name: "Kids Wear", link: "/#" },
  { id: 4, name: "Mens Wear", link: "/#" },
  { id: 5, name: "Electronics", link: "/#" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#services" },
];

const Navbar = ({ handleOrderPopup }) => {
  // Menyimpan status dark mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Menjalankan dark mode ketika status berubah
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="
        relative z-40 shadow-md
        bg-amber-400 dark:bg-gray-900
        dark:text-white transition-colors duration-300
      "
    >
      {/* Upper Navbar */}
      <div className="bg-amber-400 dark:bg-gray-900 px-4 py-2 sm:px-8">
        <div className="container mx-auto flex items-center justify-between">

          {/* Logo */}
          <div>
            <a
              href="#"
              className="flex items-center gap-2 text-2xl font-bold sm:text-3xl"
            >
              <img src={Logo} alt="Shopsy Logo" className="w-10" />
              <span>Shopsy</span>
            </a>
          </div>

          {/* Search */}
          <div className="relative hidden group sm:block">
            <input
              type="text"
              placeholder="search"
              className="
                w-[200px] rounded-full border border-gray-300
                bg-white px-3 py-2 text-gray-800
                transition-all duration-300
                group-hover:w-[300px]
                focus:border-orange-500 focus:outline-none
                dark:border-gray-600 dark:bg-gray-800 dark:text-white
              "
            />

            <FaSearch
              className="
                absolute right-3 top-1/2
                -translate-y-1/2
                text-gray-500 dark:text-gray-300
              "
            />
          </div>

          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="
              flex h-10 w-10 cursor-pointer items-center justify-center
              rounded-full bg-gray-700 transition-all duration-300
              hover:bg-gray-800
              dark:bg-gray-600 dark:hover:bg-gray-500
            "
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FaSun className="text-xl text-yellow-400" />
            ) : (
              <FaMoon className="text-xl text-white" />
            )}
          </button>

          {/* Order Button */}
          <button
            onClick={handleOrderPopup}
            className="
              group flex items-center gap-2 rounded-full
              bg-blue-900 px-3 py-2 text-white
              transition-all duration-300 hover:bg-blue-800
            "
          >
            <span
              className="
                max-w-0 overflow-hidden whitespace-nowrap
                text-sm font-medium opacity-0
                transition-all duration-300
                group-hover:max-w-[60px] group-hover:opacity-100
              "
            >
              Order
            </span>

            <FaShoppingCart className="text-lg" />
          </button>
        </div>
      </div>

      {/* Lower Navbar */}
      <div
        data-aos="zoom-in"
        className="
          border-t border-gray-200 bg-white
          dark:border-gray-700 dark:bg-gray-800
        "
      >
        <div className="container mx-auto">
          <ul
            className="
              hidden items-center justify-center gap-8 py-2
              sm:flex
            "
          >
            {/* Main Menu */}
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="
                    inline-block text-sm font-medium
                    text-gray-700 transition-colors duration-200
                    hover:text-orange-500
                    dark:text-gray-200 dark:hover:text-orange-400
                  "
                >
                  {data.name}
                </a>
              </li>
            ))}

            {/* Dropdown Menu */}
            <li className="group relative cursor-pointer">
              <a
                href="#"
                className="
                  flex items-center gap-[2px] py-2
                  text-gray-700 transition-colors duration-200
                  hover:text-orange-500
                  group-hover:text-orange-500
                  dark:text-gray-200 dark:hover:text-orange-400
                  dark:group-hover:text-orange-400
                "
              >
                Trending Products

                <FaCaretDown
                  className="
                    transition-transform duration-200
                    group-hover:rotate-180
                  "
                />
              </a>

              {/* Dropdown Content */}
              <div
                className="
                  invisible absolute left-0 top-full z-[9999]
                  w-[180px] translate-y-2 rounded-md
                  bg-white p-2 text-gray-800 opacity-0 shadow-md
                  transition-all duration-200
                  group-hover:visible group-hover:translate-y-0
                  group-hover:opacity-100
                  group-focus-within:visible
                  group-focus-within:translate-y-0
                  group-focus-within:opacity-100
                  dark:bg-gray-900 dark:text-white
                "
              >
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="
                          block w-full rounded-md p-2
                          transition-colors duration-200
                          hover:bg-orange-500 hover:text-white
                          focus-visible:bg-orange-500
                          focus-visible:text-white focus-visible:outline-none
                          dark:hover:bg-orange-500
                          dark:hover:text-white
                        "
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
