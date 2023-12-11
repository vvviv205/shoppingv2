import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getCategories } from "../services/apiProducts";
import { IoMoon } from "react-icons/io5";
import { FiSun } from "react-icons/fi";

import Loading from "./Loading";
import { usePost } from "../App";

export default function Nav() {
  const [Categories, setCategories] = useState([]);
  const { settheme } = usePost();
  const navigate = useNavigate();
  useEffect(() => {
    async function loader() {
      let data = await getCategories();
      setCategories(data);
    }
    loader();
  }, []);

  return (
    <header class="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-neutral-900">
      <nav
        class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div class="flex items-center justify-between">
          <a
            className="flex-none text-xl font-semibold cursor-pointer dark:text-white"
            onClick={() => navigate("/")}
          >
            MoH
          </a>

          <div class="sm:hidden">
            <button
              type="button"
              class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-with-mega-menu"
              aria-controls="navbar-with-mega-menu"
              aria-label="Toggle navigation"
            >
              <svg
                class="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                class="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-with-mega-menu"
          class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            <a onClick={() => navigate("/products/all")} className="mainNav">
              Shop
            </a>

            <div class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none]">
              <button
                id="hs-mega-menu-basic-dr"
                type="button"
                class="flex items-center w-full  dark:text-slate-100 text-slate-800 hover:text-gray-400 font-medium"
              >
                Categories
                <svg
                  class="ml-2 w-2.5 h-2.5  dark:text-slate-100 text-slate-800"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </button>

              <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-neutral-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5 hidden">
                {!Categories ? (
                  <Loading bg="" />
                ) : (
                  Categories.map((c) => (
                    <a
                      className="seconNav"
                      onClick={() => navigate(`/products/${c}`)}
                    >
                      {c}
                    </a>
                  ))
                )}
              </div>
            </div>
            <a onClick={() => navigate("/orders")} className="mainNav">
              Orders
            </a>
            <a
              onClick={() => navigate("/products/bookmarks")}
              className="mainNav"
            >
              Bookmarks
            </a>
            <a onClick={() => navigate("/cart")} className="mainNav">
              Cart
            </a>
            <button className="bg-none">
              <IoMoon
                className="dark:hidden flex text-xl"
                onClick={() => settheme("dark")}
              />
              <FiSun
                className="dark:flex hidden text-white font-semibold text-2xl"
                onClick={() => settheme("light")}
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
