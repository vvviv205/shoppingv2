import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getCategories, getProducts } from "../../../services/apiProducts";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FiInfo } from "react-icons/fi";
import { BiEdit, BiTrash } from "react-icons/bi";
import { Addproduct, Editproduct } from "./Addedit";
export default function Productsad() {
  const [edititem, setedititem] = useState(null);
  const products = useLoaderData();
  const [category, setCategory] = useState("all");
  const [Categories, setCategories] = useState([]);
  let product;
  if (category !== "all") {
    product = products.filter((p) => p.category === category);
  } else {
    product = products;
  }
  useEffect(() => {
    async function loader() {
      let data = await getCategories();
      setCategories(data);
    }
    loader();
  }, []);
  return (
    <center>
      <div className="mt-5 w-[90%] h-fit min-h-[700px] p-5 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
        <h1 className="text-center text-4xl font-semibold dark:text-white">
          Products in page
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mt-7">
          <button
            onClick={() => setCategory("all")}
            className="text-slate-800 dark:text-white text-xl p-3 font-semibold bg-slate-100 dark:bg-gray-500 rounded-lg"
          >
            All
          </button>
          {Categories.map((c) => (
            <button
              onClick={() => setCategory(c)}
              className="text-slate-800 dark:text-white text-base sm:text-xl p-3 font-semibold dark:bg-gray-500 bg-slate-100 rounded-lg"
            >
              {c}
            </button>
          ))}
        </div>
        <br />
        <br />
        <div className="h-[60vh] overflow-auto ">
          {product.map((p) => (
            <Products item={p} setedititem={setedititem} />
          ))}
        </div>
        <div class="text-center">
          <button
            type="button"
            onClick={() => setedititem(null)}
            class="w-[90%] mt-2 sm:mt-0 h-8 sm:h-14 rounded-lg shadow-md font-semibold bg-indigo-600 text-sm sm:text-xl text-white 
           disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            data-hs-overlay="#hs-add-modal"
          >
            Add product
          </button>
        </div>
        <Addproduct />
        <Editproduct edititem={edititem} setedititem={setedititem} />
      </div>
    </center>
  );
}

function Products({ item, setedititem }) {
  const { thumbnail, title, id } = item;
  const dropdowncss =
    "flex items-center gap-x-3.5 py-2 px-3 rounded-lg cursor-pointer text-xs sm:text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700";
  return (
    <center>
      <div className="h-32 w-[90%] px-1 sm:px-3  flex justify-between gap-4">
        <div className="w-full rounded-lg sm:w-[200px] overflow-clip flex justify-start items-center">
          <img
            src={thumbnail}
            alt="product-image"
            class="block w-full  max-h-28 sm:max-h-[95px] sm:max-w-[200px] sm:w-auto sm:h-auto" /* "w " */
          />
        </div>
        <div className="w-full flex justify-start items-center">
          <h1 className="font-semibold text-xs sm:text-base dark:text-white">
            {title}
          </h1>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <div class="hs-dropdown relative inline-flex">
            <button
              id="hs-dropdown-custom-icon-trigger"
              type="button"
              class="hs-dropdown-toggle flex justify-center items-center w-5 h-5 sm:w-8 sm:h-8 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <HiOutlineDotsVertical className="text-xs sm:text-lg" />
            </button>

            <div
              class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden w-fit bg-white shadow-md rounded-lg p-2 mt-2 z-50 dark:bg-gray-800 dark:border dark:border-gray-700"
              aria-labelledby="hs-dropdown-custom-icon-trigger"
            >
              <a
                className={dropdowncss}
                data-hs-overlay="#hs-edit-modal"
                onClick={() => setedititem(item)}
              >
                <BiEdit className="text-sm sm:text-lg" /> edit
              </a>
              <a className={dropdowncss}>
                <BiTrash className="text-sm sm:text-lg" /> delete
              </a>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}

export async function loader() {
  return await getProducts("all");
}
