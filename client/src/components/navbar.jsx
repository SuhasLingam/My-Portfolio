import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const ChangeColorNav = () => {
      if (window.scrollY >= 1) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", ChangeColorNav);
  }, []);

  return (
    <div>
      <nav
        class={`p-2 ${
          scroll
            ? "md:transition-all md:ease-in-out md:bg-slate-600 md:bg-opacity-[80%] md:backdrop-blur-md md:fixed md:scroll-smooth"
            : ""
        }   md:w-full md:fixed sticky z-50 top-0 start-0 md:flex-row  ${
          menuOpen ? "bg-gray-800 opacity-95 w-full backdrop-blur-[10px]" : ""
        } `}
      >
        <div class=" flex flex-wrap items-center justify-between mx-auto p-2">
          <a
            href="/"
            class="flex md:ml-[80px] items-center space-x-3 rtl:space-x-reverse"
          >
            <span class="self-center font-extrabold text-6xl whitespace-nowrap text-blue-500">
              Sl.
            </span>
          </a>

          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            {menuOpen ? (
              <IoClose className="md:hidden text-white" size={50} />
            ) : (
              <HiMenu className="md:hidden text-white" size={50} />
            )}
          </button>

          {
            <div
              className={`${
                menuOpen
                  ? "  block top-0 start-0 justify-center w-full h-max rounded-2xl"
                  : ""
              } w-full md:w-auto md:flex-row md:bg-transparent md:items-center md:ml-4 md:mr-11 `}
              id="navbar-sticky"
            >
              <ul
                class={`md:flex md:justify-end md:gap-3 md:bg-transparent text-2xl p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ${
                  menuOpen ? "block" : "hidden"
                }`}
              >
                <li className=" flex flex-row items-center justify-center gap-1">
                  <a
                    href="/"
                    class="group md:flex md:flex-row md:items-center md:gap-1 transition-all duration-300 ease-in-out flex flex-row gap-1 justify-center items-center py-2 px-3 rounded-lg md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-white"
                    aria-current="page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>

                    <span className="hover:text-3xl bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Home
                    </span>
                  </a>
                </li>
                <li className=" flex flex-row items-center justify-center gap-1">
                  <a
                    href="/about"
                    class="group md:flex md:flex-row md:items-center md:gap-1 transition-all duration-300 ease-in-out flex flex-row gap-1 justify-center items-center py-2 px-3 rounded-lg md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-white"
                    aria-current="page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>

                    <span className="hover:text-3xl bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      About
                    </span>
                  </a>
                </li>
                <li className="flex flex-row items-center justify-center gap-1">
                  <a
                    href="/Project"
                    class="group md:flex md:flex-row md:items-center md:gap-1 transition-all duration-300 ease-in-out flex flex-row gap-1 justify-center items-center py-2 px-3 rounded-lg md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-white"
                    aria-current="page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                      />
                    </svg>

                    <span className="hover:text-3xl bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Projects
                    </span>
                  </a>
                </li>
                <li className="flex flex-row items-center justify-center gap-1">
                  <a
                    href="/"
                    class="group md:flex md:flex-row md:items-center md:gap-1 transition-all duration-300 ease-in-out flex flex-row gap-1 justify-center items-center py-2 px-3 rounded-lg md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-white"
                    aria-current="page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>

                    <span className="hover:text-3xl bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Resume
                    </span>
                  </a>
                </li>
                <li className="flex flex-row items-center justify-center gap-1">
                  <a
                    href="https://github.com/SuhasLingam/Portfolio-in-progress"
                    class="group md:flex md:flex-row md:items-center md:gap-1 transition-all duration-300 ease-in-out flex flex-row gap-1 justify-center items-center py-2 px-3 rounded-lg md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-white"
                    aria-current="page"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        d="M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5C11 5.74028 10.5978 6.38663 10 6.73244V14.0396H11.7915C12.8961 14.0396 13.7915 13.1441 13.7915 12.0396V10.7838C13.1823 10.4411 12.7708 9.78837 12.7708 9.03955C12.7708 7.93498 13.6662 7.03955 14.7708 7.03955C15.8753 7.03955 16.7708 7.93498 16.7708 9.03955C16.7708 9.77123 16.3778 10.4111 15.7915 10.7598V12.0396C15.7915 14.2487 14.0006 16.0396 11.7915 16.0396H10V17.2676C10.5978 17.6134 11 18.2597 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 18.2597 7.4022 17.6134 8 17.2676V6.73244C7.4022 6.38663 7 5.74028 7 5Z"
                        fill="#ffffff"
                      />
                    </svg>

                    <span className="hover:text-3xl bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Fork
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          }
        </div>
      </nav>
    </div>
  );
};

export default navbar;
