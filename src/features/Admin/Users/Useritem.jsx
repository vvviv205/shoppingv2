import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import toast from "react-hot-toast";
export default function Useritem() {
  const tdCss =
    "px-5 text-xs sm:text-base text-gray-900 dark:text-white whitespace-no-wrap ";
  return (
    <tr>
      <td class="pl-1 py-5 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-lg font-medium">
        <p class={tdCss}>#1</p>
      </td>
      <td class="py-5 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-lg font-medium">
        <p class={`${tdCss} flex justify-left items-center gap-3`}>
          <div className="h-10 w-10 sm:h-16 sm:w-16 overflow-hidden">
            <img
              src="https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png"
              className="object-cover rounded-full"
            />
          </div>
          <h1>Mohammad Heitham</h1>
        </p>
      </td>
      <td class="py-5 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-lg font-medium">
        <p class={tdCss}>v.vviv205@gmail.com</p>
      </td>
      <td class="pl-1 py-5 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-lg font-medium">
        <p class={tdCss}>Owner</p>
      </td>
      <td class=" py-5 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-lg font-medium">
        <p data-hs-overlay="#hs-edit-modal" class={`${tdCss} flex gap-1`}>
          <FaEdit className="text-xl sm:text-3xl p-1 sm:p-2 text-white cursor-pointer bg-slate-400 rounded-xl" />
          <FaTrash
            onClick={() =>
              toast("Actions isn't allowed in show mode", {
                icon: <AiOutlineExclamationCircle className="text-3xl" />,
              })
            }
            className="text-xl sm:text-3xl p-1 sm:p-2 bg-red-500 cursor-pointer text-white rounded-xl"
          />
        </p>
      </td>
    </tr>
  );
}
