import React from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdDateRange, MdEmail } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { MdDriveFileRenameOutline } from "react-icons/md";
export default function Ordermodal() {
  const thCss =
    "px-5 py-3 border-b-2 border-gray-200 dark:border-gray-800  bg-gray-100 dark:bg-gray-600 text-left text-xs font-semibold text-gray-600 uppercase dark:text-white tracking-wider";
  const tdCss = "text-gray-900 dark:text-white whitespace-no-wrap";
  return (
    <div
      id="hs-basic-modal"
      class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden w-full h-full fixed top-0 start-0 z-[60] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none"
    >
      <div class="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-[80vw] sm:w-full m-3 sm:mx-auto">
        <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-700 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
            <h3 class="font-bold text-gray-800 dark:text-white">
              Order information
            </h3>
            <button
              type="button"
              class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-overlay="#hs-basic-modal"
            >
              <span class="sr-only">Close</span>
              <IoMdClose className="text-lg" />
            </button>
          </div>
          <div class="p-4 overflow-y-auto">
            <div>
              <h1 className="text-xl font-semibold dark:text-white">
                Customer information
              </h1>
              <br />
              <center>
                <div className="w-full rounded-lg bg-slate-100 dark:bg-gray-800 flex flex-col overflow-x-auto p-4 gap-4">
                  <div className="flex gap-2 justify-start items-center">
                    <MdDriveFileRenameOutline className="dark:text-white" />
                    <h1 className="font-semibold text-left dark:text-white">
                      Name :
                    </h1>
                  </div>
                  <div className="flex gap-2 justify-start items-center">
                    <FaPhone className="dark:text-white" />
                    <h1 className="font-semibold text-left dark:text-white">
                      phone :{" "}
                    </h1>
                  </div>
                  <div className="flex gap-2 justify-start items-center">
                    <MdEmail className="dark:text-white" />
                    <h1 className="font-semibold text-left dark:text-white">
                      Email :
                    </h1>
                  </div>
                  <div className="flex gap-2 justify-start items-center">
                    <FaLocationArrow className="dark:text-white" />
                    <h1 className="font-semibold text-left dark:text-white">
                      Address :{" "}
                    </h1>
                  </div>
                  <div className="flex gap-2 justify-start items-center">
                    <MdDateRange className="dark:text-white" />
                    <h1 className="font-semibold text-left dark:text-white">
                      ordered at :{" "}
                    </h1>
                  </div>
                </div>
              </center>
            </div>
            <br />
            <div>
              <h1 className="text-xl font-semibold dark:text-white">
                Customer order
              </h1>
              <br />
              <center>
                <div className="w-full min-h-[10vh] rounded-lg bg-slate-100 dark:bg-slate-700 flex flex-col p-4 gap-4">
                  <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow-lg rounded-lg overflow-hidden">
                      <table class="min-w-full  leading-normal">
                        <thead>
                          <tr>
                            <th class={thCss}>sort</th>
                            <th class={thCss}>product id</th>
                            <th class={thCss}>name</th>
                            <th class={thCss}>quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="px-5 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 text-sm">
                              <p class={tdCss}>#1</p>
                            </td>
                            <td class="pl-5 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 text-sm">
                              <p class={tdCss}>id</p>
                            </td>
                            <td class="pl-5 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 text-sm">
                              <p class={tdCss}>example</p>
                            </td>
                            <td class="pl-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 text-sm">
                              <p class={tdCss}>1</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
