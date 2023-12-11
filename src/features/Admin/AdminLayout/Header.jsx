import React from "react";
import { BiUser } from "react-icons/bi";
import { IoMoon, IoSettingsSharp } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useTheme } from "../../../services/theme";
import { FiSun } from "react-icons/fi";
export default function Header() {
  const { theme, settheme } = useTheme();
  const isDark = theme === "dark";
  const navigate = useNavigate();

  return (
    <div className="w-full h-16 sm:h-24 pl-0 lg:pl-64 pr-2 sm:pr-5 flex items-center justify-end sm:justify-between bg-white dark:bg-gray-800">
      <h1 className="font-semibold text-5xl text-slate-800 dark:text-white px-4 hidden sm:flex">
        MoH
      </h1>
      <div className=" flex items-center gap-1">
        <button>
          {isDark ? (
            <FiSun
              onClick={() => settheme("light")}
              className="text-xl font-semibold text-white"
            />
          ) : (
            <IoMoon className="text-xl " onClick={() => settheme("dark")} />
          )}
        </button>
        <div className="h-16 w-fit  sm:py-2 sm:px-4 rounded-xl gap-2 hs-dropdown hs-dropdown-toggle flex items-center shadow-sm cursor-pointer sm:bg-slate-50 bg-none sm:dark:bg-gray-700">
          <h1 className="font-medium hidden sm:flex dark:text-white">
            Mohammad Heitham
          </h1>
          <div className="h-9 w-9 sm:h-12 sm:w-12 rounded-full overflow-hidden">
            <img
              src="https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png"
              alt=""
              className="object-cover"
            />
          </div>
          <div
            class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-fit sm:w-56 hidden z-10 mt-2 bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
            aria-labelledby="hs-dropdown-basic"
          >
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm sm:text-base  text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
              onClick={() => navigate("/admin/profile")}
            >
              <BiUser /> Profile
            </a>
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm sm:text-base text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
              onClick={() => navigate("/admin/settings")}
            >
              <IoSettingsSharp /> Settings
            </a>
            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm sm:text-base  text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
              <PiSignOutBold /> Sign Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
