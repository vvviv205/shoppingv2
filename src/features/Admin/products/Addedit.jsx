import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import toast from "react-hot-toast";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import { IoMdClose } from "react-icons/io";

export function Addproduct() {
  const [picnum, setPicnum] = useState(null);
  const inputcss =
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
  const labelcss =
    "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 left-0 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

  const { register, handleSubmit, watch } = useForm();
  return (
    <>
      <form>
        <div
          id="hs-add-modal"
          class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto"
        >
          <div class="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                <h3 class="font-bold text-gray-800 dark:text-white">
                  Add product
                </h3>
                <button
                  type="button"
                  class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  data-hs-overlay="#hs-add-modal"
                >
                  <span class="sr-only">Close</span>
                  <IoMdClose className="text-lg" />
                </button>
              </div>
              <div class="p-4 overflow-y-auto">
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    class={inputcss}
                    placeholder=" "
                    required
                    {...register("title")}
                  />
                  <label for="title" class={labelcss}>
                    Product title
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="desciption"
                    id="desciption"
                    class={inputcss}
                    placeholder=" "
                    required
                    {...register("description")}
                  />
                  <label for="desciption" class={labelcss}>
                    Description
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    class={inputcss}
                    placeholder=" "
                    required
                    {...register("price")}
                  />
                  <label for="price" class={labelcss}>
                    Price
                  </label>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="number"
                      name="off"
                      id="off"
                      class={inputcss}
                      placeholder=" "
                      required
                      {...register("off")}
                    />
                    <label for="off" class={labelcss}>
                      off by percentage %
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="rating"
                      id="rating"
                      class={inputcss}
                      placeholder=" "
                      required
                      {...register("rating")}
                    />
                    <label for="rating" class={labelcss}>
                      rating
                    </label>
                  </div>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      class={inputcss}
                      placeholder=" "
                      required
                      {...register("brand")}
                    />
                    <label for="brand" class={labelcss}>
                      brand
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="category"
                      id="category"
                      class={inputcss}
                      placeholder=" "
                      required
                      {...register("category")}
                    />
                    <label for="category" class={labelcss}>
                      category
                    </label>
                  </div>
                  <label class="relative inline-flex items-center mb-5 cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      class="sr-only peer"
                      {...register("isAvailable")}
                    />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Is available
                    </span>
                  </label>
                </div>{" "}
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="number"
                    name="stock"
                    id="stock"
                    class={inputcss}
                    placeholder=" "
                    required
                    {...register("stock")}
                  />
                  <label for="stock" class={labelcss}>
                    Quantity in stock
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="number"
                    name="pictures"
                    id="pictures"
                    class={inputcss}
                    placeholder=" "
                    required
                    accept="image/*"
                    value={picnum}
                    {...register(`pictures`)}
                    onChange={(e) =>
                      Number(e.target.value) === 0
                        ? setPicnum(null)
                        : setPicnum(Number(e.target.value))
                    }
                  />
                  <label for="pictures" class={labelcss}>
                    Number of pictures
                  </label>
                </div>
                <p className="text-left pb-2">Choose thumbnail</p>
                <input
                  type="file"
                  name="file-input"
                  id="file-input"
                  accept="image/*"
                  {...register(`thumbnail`)}
                  class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
                file:bg-gray-50 file:border-0
                file:bg-gray-100 file:me-4
                  file:py-3 file:px-4
                dark:file:bg-gray-700 dark:file:text-gray-400"
                />
                <br />
                <br />
                {picnum > 0 && <p className="text-left pb-2">Choose images</p>}
                {Array.from({ length: picnum }, (_, i) => (
                  <>
                    <input
                      type="file"
                      name="file-input"
                      id="file-input"
                      class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
                file:bg-gray-50 file:border-0
                file:bg-gray-100 file:me-4
                  file:py-3 file:px-4
                dark:file:bg-gray-700 dark:file:text-gray-400"
                      {...register(`images.${i}`)}
                    />
                  </>
                ))}
              </div>

              <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                <button
                  type="button"
                  class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  data-hs-overlay="#hs-add-modal"
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
                  Add product
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export function Editproduct({ edititem, setedititem }) {
  const [picnum, setPicnum] = useState(null);
  const inputcss =
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
  const labelcss =
    "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 left-0 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

  const { register, handleSubmit, watch } = useForm({
    values: edititem,
  });
  return (
    <>
      <form>
        <div
          id="hs-edit-modal"
          class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto"
        >
          <div class="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                <h3 class="font-bold text-gray-800 dark:text-white">
                  Edit product
                </h3>
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
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    class={inputcss}
                    placeholder=" "
                    required
                    {...register("title")}
                  />
                  <label for="title" class={labelcss}>
                    Product title
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="desciption"
                    id="desciption"
                    class={inputcss}
                    placeholder=" "
                    required
                    {...register("description")}
                  />
                  <label for="desciption" class={labelcss}>
                    Description
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    class={inputcss}
                    placeholder=" "
                    required
                    {...register("price")}
                  />
                  <label for="price" class={labelcss}>
                    Price
                  </label>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="number"
                      name="off"
                      id="off"
                      class={inputcss}
                      placeholder=" "
                      required
                      {...register("off")}
                    />
                    <label for="off" class={labelcss}>
                      off by percentage %
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="rating"
                      id="rating"
                      class={inputcss}
                      placeholder=" "
                      required
                      {...register("rating")}
                    />
                    <label for="rating" class={labelcss}>
                      rating
                    </label>
                  </div>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      class={inputcss}
                      placeholder=" "
                      required
                      {...register("brand")}
                    />
                    <label for="brand" class={labelcss}>
                      brand
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="category"
                      id="category"
                      class={inputcss}
                      placeholder=" "
                      required
                      {...register("category")}
                    />
                    <label for="category" class={labelcss}>
                      category
                    </label>
                  </div>
                  <label class="relative inline-flex items-center mb-5 cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      class="sr-only peer"
                      {...register("isAvailable")}
                    />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Is available
                    </span>
                  </label>
                </div>{" "}
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="number"
                    name="stock"
                    id="stock"
                    class={inputcss}
                    placeholder=" "
                    required
                    {...register("stock")}
                  />
                  <label for="stock" class={labelcss}>
                    Quantity in stock
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="number"
                    name="pictures"
                    id="pictures"
                    class={inputcss}
                    placeholder=" "
                    required
                    accept="image/*"
                    value={picnum}
                    {...register(`pictures`)}
                    onChange={(e) =>
                      Number(e.target.value) === 0
                        ? setPicnum(null)
                        : setPicnum(Number(e.target.value))
                    }
                  />
                  <label for="pictures" class={labelcss}>
                    Number of pictures
                  </label>
                </div>
                <p className="text-left pb-2">Choose thumbnail</p>
                <input
                  type="file"
                  name="file-input"
                  id="file-input"
                  accept="image/*"
                  {...register(`thumbnail`)}
                  class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
                file:bg-gray-50 file:border-0
                file:bg-gray-100 file:me-4
                  file:py-3 file:px-4
                dark:file:bg-gray-700 dark:file:text-gray-400"
                />
                <br />
                <br />
                {picnum > 0 && <p className="text-left pb-2">Choose images</p>}
                {Array.from({ length: picnum }, (_, i) => (
                  <>
                    <input
                      type="file"
                      name="file-input"
                      id="file-input"
                      class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
                file:bg-gray-50 file:border-0
                file:bg-gray-100 file:me-4
                  file:py-3 file:px-4
                dark:file:bg-gray-700 dark:file:text-gray-400"
                      {...register(`images.${i}`)}
                    />
                  </>
                ))}
              </div>

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
                  save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
