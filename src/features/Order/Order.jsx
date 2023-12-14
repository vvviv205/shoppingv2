import React, { useState } from "react";
import { usePost } from "../../App";
import OrderItem from "./OrderItem";
import { BiSearch } from "react-icons/bi";

export default function Order() {
  const { order } = usePost();
  const [query, setQuery] = useState(null);
  return (
    <>
      <div class="bg-grey-100 p-8 rounded-md w-full ">
        <div class=" flex items-center justify-between flex-wrap pb-6">
          <div>
            <h2 class="text-neutral-800 dark:text-white text-2xl font-semibold">
              Products Order
            </h2>
            <span class="text-xs text-neutral-800 dark:text-neutral-300">
              Everything here is fake and just for show{" "}
              <span className="hidden sm:block">including deliver dates</span>
            </span>
          </div>
          <div className="flex justify-between items-center mt-4 p-1 sm:py-2 sm:px-4 rounded-full w-full sm:w-64 bg-slate-100 dark:bg-neutral-100">
            <input
              type="text"
              placeholder="Search by ID #"
              onChange={(e) => setQuery(Number(e.target.value))}
              className="focus:outline-none w-full text-xs sm:text-sm placeholder:text-xs sm:placeholder:text-sm bg-slate-100 dark:bg-neutral-100"
            />
            <BiSearch className="text-slate-600 text-sm sm:text-lg" />
          </div>
        </div>
        <div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow-lg rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Order Id
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Items
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Deliver at
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {order
                    .filter((o) => {
                      return !query ? o : o.id === query;
                    })
                    .map((ord) => (
                      <OrderItem ord={ord} />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
