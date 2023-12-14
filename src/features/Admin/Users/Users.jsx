import React from "react";
import { FaSearch } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { MdAdd } from "react-icons/md";
import Useritem from "./Useritem";
import { Adduser, Edituser } from "./Usermodal";

export default function Users() {
  const thCss =
    "px-5 py-3 dark:bg-gray-600 dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider";
  return (
    <div className="p-5">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold dark:text-white">All Admins</h1>

        <div className="flex justify-between">
          <div
            className="flex justify-center w-[50%] h-9 sm:w-64 items-center
           bg-slate-50 dark:bg-slate-600  px-2 sm:px-6 py-1 rounded-full"
          >
            <input
              type="text"
              placeholder="Search admins..."
              className="bg-slate-50 dark:bg-slate-600 dark:placeholder:text-white dark:text-white focus:ring-0 text-xs sm:text-base w-full placeholder:opacity-0 sm:placeholder:opacity-100 outline-none font-semibold"
            />{" "}
            <FaSearch className="text-slate-500 dark:text-white" />
          </div>
          <div className="flex gap-1 sm:gap-2">
            <button
              data-hs-overlay="#hs-basic-modal"
              className=" py-1 sm:py-3 px-2 sm:px-5 text-xs sm:text-lg bg-blue-600 rounded-lg flex justify-center items-center text-white font-semibold"
            >
              <MdAdd className="font-semibold text-base" />{" "}
              <span className="hidden sm:flex">Add</span>
            </button>
            <button className="py-1 sm:py-3 px-2 sm:px-5 text-xs sm:text-lg bg-gray-400 rounded-lg flex justify-center items-center text-white font-semibold">
              <HiDownload
                onClick={() =>
                  toast("The page is in show mode so all data are fake", {
                    icon: <AiOutlineExclamationCircle className="text-3xl" />,
                  })
                }
                className="font-semibold text-base"
              />{" "}
              <span className="hidden sm:flex">Export</span>
            </button>
          </div>
        </div>
      </div>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow-lg rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th class={thCss}>sort</th>
                <th class={thCss}>information</th>
                <th class={`${thCss}`}>E-mail</th>
                <th class={`${thCss}`}>position</th>
                <th class={thCss}>actions</th>
              </tr>
            </thead>
            <tbody>
              <Useritem />
            </tbody>
          </table>
        </div>
      </div>
      <Adduser />
      <Edituser />
    </div>
  );
}
