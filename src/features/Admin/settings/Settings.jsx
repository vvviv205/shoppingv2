import React, { useState } from "react";
import { BiPlus, BiTrash } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import Addsocial from "./Addsocial";
import toast from "react-hot-toast";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export default function Settings() {
  const [modalType, setModalType] = useState("");
  const inputcss =
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
  const labelcss =
    "peer-focus:font-medium absolute text-xs sm:text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-9 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 left-0 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

  return (
    <div className="p-5">
      <h1 className="p-2 text-3xl font-semibold text-center dark:text-white">
        Website Settings
      </h1>
      <br />
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5">
        <h1 className="text-lg sm:text-2xl font-semibold flex justify-left gap-2 dark:text-white items-center">
          <IoSettingsSharp /> General settings
        </h1>
        <br />
        <h1 className="text-base sm:text-xl font-medium dark:text-white">
          Main theme
        </h1>
        <select
          name=""
          className="bg-slate-100 p-3 w-[80%] sm:w-[30%] ring-0 outline-none"
        >
          <option value="light">Light</option>
          <option value="dark">dark</option>
        </select>
        <br />
        <br />
        <h1 className="text-base sm:text-xl font-medium dark:text-white">
          Main Language
        </h1>
        <select
          name=""
          className="bg-slate-100 p-3 w-[80%] sm:w-[30%] ring-0 outline-none"
        >
          <option value="ar">Arabic</option>
          <option value="en">English</option>
        </select>
        <br />
        <br />
        <h1 className="text-base sm:text-xl font-medium dark:text-white">
          store currency
        </h1>
        <select
          name=""
          className="bg-slate-100 p-3 w-[80%] sm:w-[30%] ring-0 outline-none"
        >
          <option value="usd">USD</option>
          <option value="iqd">IQD</option>
        </select>
        <div class="relative z-0 w-full  group">
          <br />
          <input
            type="number"
            name="exchange"
            id="exchange"
            className={inputcss}
            placeholder=" "
            required
          />
          <label for="exchange" className={labelcss}>
            Exchange rate (per 1 dollar)
          </label>
        </div>
      </div>
      <br />
      <br />
      <div className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg p-5">
        <h1 className="text-lg sm:text-2xl font-semibold flex justify-left gap-2 items-center">
          <FaLocationArrow />
          Address and Social Media
        </h1>
        <br />
        <h1 className="text-base sm:text-xl font-medium dark:text-white">
          Social media
        </h1>
        <div className="flex justify-between items-center p-5 gap-1 rounded-lg mt-2 bg-slate-100 dark:bg-gray-500">
          <h1 className="font-semibold">Instgram</h1>
          <a
            href="https://www.instagram.com/v.vviv/"
            target="_blank"
            className="overflow-x-auto text-center hidden sm:flex"
          >
            https://www.instagram.com/v.vviv/
          </a>
          <button className="p-2 bg-red-600 rounded-md font-semibold text-white flex justify-center gap-2 items-center">
            <BiTrash className="font-medium" />{" "}
            <h1
              onClick={() =>
                toast("Edit isn't allowed in show mode", {
                  icon: <AiOutlineExclamationCircle className="text-3xl" />,
                })
              }
              className="hidden sm:flex"
            >
              Delete
            </h1>
          </button>
        </div>
        <button
          data-hs-overlay="#hs-basic-modal"
          className="p-3 rounded-xl bg-blue-600 text-white font-semibold text-sm sm:text-lg mt-3"
          onClick={() => setModalType("social")}
        >
          Add social media
        </button>
        <Addsocial modalType={modalType} />
        <br />
        <br />
        <h1 className="text-xl font-medium">Address</h1>
        <div className="flex gap-4 flex-wrap">
          <div className="flex justify-start gap-3 flex-wrap items-center p-3 sm:p-5 rounded-lg mt-2 w-fit bg-slate-100 dark:bg-gray-500">
            <h1>Najaf</h1>{" "}
            <button>
              <BiTrash className="font-medium text-xl text-red-500" />
            </button>
          </div>
          <div className="flex justify-start gap-3 flex-wrap items-center p-3 sm:p-5 rounded-lg mt-2 w-fit bg-slate-100 dark:bg-gray-500">
            <h1>Mosul</h1>{" "}
            <button>
              <BiTrash className="font-medium text-xl text-red-500" />
            </button>
          </div>
          <button
            onClick={() => setModalType("address")}
            data-hs-overlay="#hs-basic-modal"
            className="flex gap-2 items-center p-3 sm:p-5 rounded-lg mt-2 w-fit bg-blue-600"
          >
            <h1 className="font-medium text-lg text-white">Add </h1>
            <BiPlus className="font-medium text-xl text-white" />
          </button>
        </div>
        <br />
      </div>
    </div>
  );
}
