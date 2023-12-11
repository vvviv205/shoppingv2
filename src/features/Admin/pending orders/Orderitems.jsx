import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaFolderOpen } from "react-icons/fa";
import { MdOutlineFileDownloadDone } from "react-icons/md";

export default function Orderitems() {
  const tdCss = "text-gray-900 dark:text-white whitespace-no-wrap";
  const dropdowncss =
    "flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none cursor-pointer focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700";
  return (
    <>
      <tr>
        <td class="px-5 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 text-sm">
          <p class={tdCss}>id</p>
        </td>
        <td class="pl-5 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 text-sm">
          <p class={tdCss}>name</p>
        </td>
        <td class="pl-12 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 text-sm">
          <p class={tdCss}>phone</p>
        </td>
        <td class="pl-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 text-sm">
          <p class={tdCss}>date</p>
        </td>
        <td class="pl-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 text-sm">
          <p class={tdCss}>
            <div class="hs-dropdown relative inline-flex">
              <button
                id="hs-dropdown-custom-icon-trigger"
                type="button"
                class="hs-dropdown-toggle flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <HiOutlineDotsVertical className="text-lg" />
              </button>

              <div
                class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden w-fit bg-white shadow-md rounded-lg p-2 mt-2 z-50 dark:bg-gray-800 dark:border dark:border-gray-700"
                aria-labelledby="hs-dropdown-custom-icon-trigger"
              >
                <a className={dropdowncss} data-hs-overlay="#hs-basic-modal">
                  <FaFolderOpen className="text-lg" /> open
                </a>
                <a
                  onClick={() =>
                    toast("Actions isn't allowed in show mode", {
                      icon: <AiOutlineExclamationCircle className="text-3xl" />,
                    })
                  }
                  className={dropdowncss}
                  data-hs-overlay="#hs-edit-modal"
                >
                  <MdOutlineFileDownloadDone className="text-lg" /> end order
                </a>
              </div>
            </div>
          </p>
        </td>
      </tr>
    </>
  );
}
