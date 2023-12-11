import React, { useState } from "react";
import { getProducts } from "../../services/apiProducts";
import { useParams } from "react-router-dom";
import Product from "./product";
import Swipping from "../../UI/Swipping";
import { BiSearch } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import useSort from "../../services/useSort";
import { usePost } from "../../App";
export default function Menu() {
  const [query, setQuery] = useState("");
  const { BookMarked } = usePost();
  const { category } = useParams();
  const [products, sortBy, setSortBy] = useSort();
  let products1 = products;
  if (category === "bookmarks") {
    products1 = products.filter((item) => BookMarked.includes(item.id));
  }
  return (
    <div className="h-fit min-h-screen">
      <center>
        {category !== "bookmarks" && <Swipping />}
        <h1 className="mt-11 dark:text-white text-2xl font-medium sm:text-5xl pb-4">
          {category === "all" ? "Shopping page" : `${category}`}
        </h1>
        <p className="pb-2 border-b-2 dark:text-white text-xs sm:text-base border-gray-400">
          {category === "all"
            ? "Here you can explore all products in MoH store."
            : category === "bookmarks"
            ? "You can find the products that you bookmarked here"
            : `Here you can search for all ${category} in MoH store.`}
        </p>
        <div className="flex justify-between items-center mt-4 p-2 sm:py-3 sm:px-5 rounded-full w-[70%] sm:w-[50%] bg-white dark:bg-neutral-400">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            className="focus:outline-none dark:bg-neutral-400 w-full text-xs sm:text-base placeholder:text-xs dark:placeholder:text-white dark:text-white sm:placeholder:text-base"
          />
          <BiSearch className="text-lime-600 dark:text-white text-sm sm:text-lg" />
        </div>
      </center>
      <br />
      <div className="flex justify-end flex-wrap items-center sm:mt-4 mx-1 sm:mx-5">
        <div className="flex p-1 sm:p-3 rounded-2xl sm:gap-1 bg-white dark:bg-neutral-400 dark:text-white">
          <label className="hidden sm:block">Sort by :</label>
          <select
            name="sort"
            className="focus:outline-none dark:bg-neutral-400 dark:text-white text-xs sm:text-base cursor-pointer"
            onChange={(e) => setSortBy(e.target.value)}
            value={sortBy}
          >
            <option value="newest">Newest (default)</option>
            <option value="rating">Rating</option>
            <option value="a-z">Name : A-Z</option>
            <option value="z-a">Name : Z-A</option>
            <option value="inc">Pricing : Increas</option>
            <option value="dec">Pricing : Decreas</option>
          </select>
        </div>
      </div>

      <div className="flex justify-evenly flex-wrap  mt-3 ">
        {products1.length !== 0 ? (
          products1
            .filter((e) => {
              return !query
                ? e
                : e.title.toLowerCase().includes(query.toLowerCase());
            })
            .map((product) => <Product product={product} key={product.id} />)
        ) : (
          <h1 className="text-center text-base mt-10 sm:mt-0 p-4 bg-white dark:bg-neutral-500 rounded-lg sm:text-xl dark:text-white">
            The {category} is empty
          </h1>
        )}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
export async function loader({ params }) {
  return await getProducts(params.category);
}
