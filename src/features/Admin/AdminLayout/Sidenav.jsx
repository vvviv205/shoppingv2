import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoGridSharp, IoSettingsSharp } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { FaShippingFast, FaUser, FaUsers } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";

export default function Adminlayout() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        type="button"
        class="text-gray-500 fixed top-5 left-3 sm:top-1 sm:left-1 hover:text-gray-600"
        data-hs-overlay="#docs-sidebar"
        aria-controls="docs-sidebar"
        aria-label="Toggle navigation"
      >
        <span class="sr-only">Toggle Navigation</span>
        <svg
          class="flex-shrink-0 w-7 h-7"
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
      </button>

      <div
        id="docs-sidebar"
        class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-[30%] sm:w-64 bg-slate-900 border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:text-black dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="w-full flex justify-center items-center">
          <a
            onClick={() => {
              navigate("/admin/dashboard");
            }}
            class="text-center cursor-pointer  text-base sm:text-4xl font-semibold text-white"
            aria-label="Brand"
          >
            MoH
          </a>
        </div>
        <nav
          class="hs-accordion-group mt-6 p-2 sm:p-6 w-full flex flex-col h-[80%] justify-between items-center lg:items-start overflow-y-auto"
          data-hs-accordion-always-open
        >
          <ul class="space-y-1.5">
            <li>
              <NavLink to="/admin/dashboard" className="sideTab">
                <LuLayoutDashboard className="text-xl sm:text-xl" />
                <span className="hidden sm:flex">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/products" className="sideTab">
                <IoGridSharp className="text-xl sm:text-xl" />
                <span className="hidden sm:flex">Products</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/pending-orders" className="sideTab">
                <FaShippingFast className="text-xl sm:text-xl" />
                <span className="hidden sm:flex">Orders</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/users" className="sideTab">
                <FaUsers className="text-xl sm:text-xl" />
                <span className="hidden sm:flex">Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/settings" className="sideTab">
                <IoSettingsSharp className="text-xl sm:text-xl" />
                <span className="hidden sm:flex">Settings</span>
              </NavLink>
            </li>
          </ul>
          <ul class="space-y-1.5">
            <li>
              <NavLink to="/admin/profile" className="sideTab">
                <FaUser className="text-xl sm:text-xl" />
                <span className="hidden sm:flex">Profile</span>
              </NavLink>
            </li>
            <li>
              <a className="sideTab cursor-pointer">
                <PiSignOutBold className="text-xl sm:text-xl" />
                <span className="hidden sm:flex">Sign Out</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
