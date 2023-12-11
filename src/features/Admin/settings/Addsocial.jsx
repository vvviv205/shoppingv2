import React from "react";
import { IoMdClose } from "react-icons/io";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import toast from "react-hot-toast";
const inputcss =
  "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
const labelcss =
  "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 left-0 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

export default function Addsocial({ modalType }) {
  return (
    <form>
      <div
        id="hs-basic-modal"
        class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto"
      >
        <div class="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
              <h3 class="font-bold text-gray-800 dark:text-white">
                Add {modalType === "address" ? "Address" : "Social media"}
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
              {modalType === "social" ? (
                <>
                  {" "}
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      class={inputcss}
                      placeholder=" "
                      required
                    />
                    <label for="title" class={labelcss}>
                      social media (facebook,instagram...etc)
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="link"
                      id="link"
                      class={inputcss}
                      placeholder=" "
                      required
                    />
                    <label for="link" class={labelcss}>
                      page Link
                    </label>
                  </div>
                </>
              ) : (
                <>
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="addressAr"
                      id="addressAr"
                      class={inputcss}
                      placeholder=" "
                      required
                    />
                    <label for="addressAr" class={labelcss}>
                      Your Address (Arabic)
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="addressEn"
                      id="addressEn"
                      class={inputcss}
                      placeholder=" "
                      required
                    />
                    <label for="addressEn" class={labelcss}>
                      Your Address (English)
                    </label>
                  </div>
                </>
              )}
            </div>
            <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
              <button
                type="button"
                class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#hs-basic-modal"
              >
                Cancel
              </button>
              <a
                onClick={() =>
                  toast("Adding isn't allowed in show mode", {
                    icon: <AiOutlineExclamationCircle className="text-3xl" />,
                  })
                }
                class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Save
              </a>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
