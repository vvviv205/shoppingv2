import React from "react";
import { MdAdminPanelSettings } from "react-icons/md";

export default function Profile() {
  return (
    <div className="p-5 sm:p-10">
      <div className="bg-white dark:bg-gray-800 dark:text-white p-10 flex flex-col justify-center items-center rounded-lg shadow-xl">
        <center>
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl">
            <img
              src="https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png"
              alt=""
              className="object-cover"
            />
          </div>
          <br />
          <h1 className="text-2xl font-semibold pb-2">Mohammad Heitham</h1>
          <h1 className="pb-2">username</h1>
          <h1 className="text-lg font-medium flex items-center justify-center gap-1 pb-6 border-b-2">
            <MdAdminPanelSettings /> Owner
          </h1>
          <h1 className="w-[90%]">discription</h1>
        </center>
      </div>
    </div>
  );
}
