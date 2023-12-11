import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import toast from "react-hot-toast";
export function Adduser() {
  const [fileimg, setFileimg] = useState(null);
  const inputcss =
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
  const labelcss =
    "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 left-0 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

  return (
    <div
      id="hs-basic-modal"
      class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden w-full h-full fixed top-0 start-0 z-[60] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none"
    >
      <div class="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-[40vw] sm:w-full m-3 sm:mx-auto">
        <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
            <h3 class="font-bold text-gray-800 dark:text-white">Add user</h3>
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
            <form>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    class={inputcss}
                    placeholder=" "
                    required
                  />
                  <label for="fname" class={labelcss}>
                    First name
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    class={inputcss}
                    placeholder=" "
                    required
                  />
                  <label for="lname" class={labelcss}>
                    Last name
                  </label>
                </div>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  class={inputcss}
                  placeholder=" "
                  required
                />
                <label for="userName" class={labelcss}>
                  Username
                </label>
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="password"
                    name="Password"
                    id="Password"
                    class={inputcss}
                    placeholder=" "
                    required
                  />
                  <label for="Password" class={labelcss}>
                    Password
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="password"
                    name="confirm"
                    id="confirm"
                    class={inputcss}
                    placeholder=" "
                    required
                  />
                  <label for="confirm" class={labelcss}>
                    Confirm password
                  </label>
                </div>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="bio"
                  id="bio"
                  class={inputcss}
                  placeholder=" "
                />
                <label for="bio" class={labelcss}>
                  Bio
                </label>
              </div>

              <center>
                <p className="text-lg pb-3 text-gray-600 dark:text-gray-300">
                  {fileimg ? "Click to update image" : "Click to insert image"}
                </p>
                <input
                  id="avater"
                  type="file"
                  accept="image/jpeg , image/png"
                  className="hidden"
                  onChange={(e) =>
                    setFileimg(URL.createObjectURL(e.target.files[0]))
                  }
                />
                <div className="w-36 h-36  rounded-full overflow-hidden">
                  <label htmlFor="avater">
                    <img
                      src={
                        !fileimg
                          ? "https://pixy.org/src/120/thumbs350/1206832.jpg"
                          : fileimg
                      }
                      className="object-cover  cursor-pointer"
                    />
                  </label>
                </div>
              </center>
              <br />
              <br />
              <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                <button
                  type="button"
                  class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  data-hs-overlay="#hs-basic-modal"
                >
                  Close
                </button>
                <button
                  onClick={() =>
                    toast("Adding isn't allowed in show mode", {
                      icon: <AiOutlineExclamationCircle className="text-3xl" />,
                    })
                  }
                  type="submit"
                  class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Edituser() {
  const [fileimg, setFileimg] = useState(null);
  const inputcss =
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
  const labelcss =
    "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 left-0 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

  return (
    <div
      id="hs-edit-modal"
      class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden w-full h-full fixed top-0 start-0 z-[60] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none"
    >
      <div class="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-[40vw] sm:w-full m-3 sm:mx-auto">
        <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
            <h3 class="font-bold text-gray-800 dark:text-white">Edit user</h3>
            <button
              type="button"
              class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-overlay="#hs-edit-modal"
            >
              <span class="sr-only">Close</span>
              <IoMdClose className="text-lg" />
            </button>
          </div>
          <div class="p-4 overflow-y-auto">
            <form>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    class={inputcss}
                    placeholder=" "
                    required
                  />
                  <label for="fname" class={labelcss}>
                    First name
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    class={inputcss}
                    placeholder=" "
                    required
                  />
                  <label for="lname" class={labelcss}>
                    Last name
                  </label>
                </div>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  class={inputcss}
                  placeholder=" "
                  required
                />
                <label for="userName" class={labelcss}>
                  Username
                </label>
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="password"
                    name="Password"
                    id="Password"
                    class={inputcss}
                    placeholder=" "
                    required
                  />
                  <label for="Password" class={labelcss}>
                    Password
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="password"
                    name="confirm"
                    id="confirm"
                    class={inputcss}
                    placeholder=" "
                    required
                  />
                  <label for="confirm" class={labelcss}>
                    Confirm password
                  </label>
                </div>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="bio"
                  id="bio"
                  class={inputcss}
                  placeholder=" "
                />
                <label for="bio" class={labelcss}>
                  Bio
                </label>
              </div>

              <center>
                <p className="text-lg pb-3 text-gray-600 dark:text-gray-300">
                  {fileimg ? "Click to update image" : "Click to insert image"}
                </p>
                <input
                  id="avater"
                  type="file"
                  accept="image/jpeg , image/png"
                  className="hidden"
                  onChange={(e) =>
                    setFileimg(URL.createObjectURL(e.target.files[0]))
                  }
                />
                <div className="w-36 h-36  rounded-full overflow-hidden">
                  <label htmlFor="avater">
                    <img
                      src={
                        !fileimg
                          ? "https://pixy.org/src/120/thumbs350/1206832.jpg"
                          : fileimg
                      }
                      className="object-cover  cursor-pointer"
                    />
                  </label>
                </div>
              </center>
              <br />
              <br />
              <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                <button
                  type="button"
                  class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  data-hs-overlay="#hs-edit-modal"
                >
                  Close
                </button>
                <button
                  onClick={() =>
                    toast("Edit isn't allowed in show mode", {
                      icon: <AiOutlineExclamationCircle className="text-3xl" />,
                    })
                  }
                  type="submit"
                  class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
