import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdOutlinePointOfSale, MdPendingActions } from "react-icons/md";
import { FaEye, FaSalesforce } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";

import Charts from "./Charts";
const data2 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export default function Dashboard() {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  return (
    <>
      <div className="flex justify-center flex-wrap p-6 gap-4">
        <div className="staticties">
          <h1>
            <IoBagHandleOutline className="text-5xl sm:text-6xl text-blue-700 dark:text-blue-200 bg-slate-100 dark:bg-slate-600 p-2 sm:p-3 rounded-full" />
          </h1>
          <h1 className="text-xl dark:text-white sm:text-3xl font-semibold ">
            24
          </h1>
          <div className="flex justify-between">
            <p className="dark:text-white text-sm sm:text-base">Products</p>
          </div>
        </div>
        <div className="staticties">
          <h1>
            <MdOutlinePointOfSale className="text-5xl sm:text-6xl text-blue-700 dark:text-blue-200 bg-slate-100 dark:bg-slate-600 p-2 sm:p-3 rounded-full" />
          </h1>
          <h1 className="text-xl dark:text-white sm:text-3xl font-semibold ">
            24
          </h1>
          <div className="flex justify-between">
            <p className="dark:text-white text-sm sm:text-base">sales</p>
          </div>
        </div>
        <div className="staticties">
          <h1>
            <FaEye className="text-5xl sm:text-6xl text-blue-700 dark:text-blue-200 bg-slate-100 dark:bg-slate-600 p-2 sm:p-3 rounded-full" />
          </h1>
          <h1 className="text-xl dark:text-white sm:text-3xl font-semibold ">
            24
          </h1>
          <div className="flex justify-between">
            <p className="dark:text-white text-sm sm:text-base">visits</p>
          </div>
        </div>
        <div className="staticties">
          <h1>
            <MdPendingActions className="text-5xl sm:text-6xl text-blue-700 dark:text-blue-200 bg-slate-100 dark:bg-slate-600 p-2 sm:p-3 rounded-full" />
          </h1>
          <h1 className="text-xl dark:text-white sm:text-3xl font-semibold ">
            24
          </h1>
          <div className="flex justify-between">
            <p className="dark:text-white text-sm sm:text-base">
              pending orders
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-8 flex flex-col gap-7">
        <Charts type="pie" title="Products" data={data} />
        <Charts type="pie" title="Sales" data={data} />
        <Charts type="area" title="sales" data={data2} />
      </div>
      {/*  <center>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-[90%] shadow-lg rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Source
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Followers
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Posts
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div class="flex items-center">
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap"></p>
                      </div>
                    </div>
                  </td>
                  <td class="pl-8 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap"></p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap"></p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </center> */}
    </>
  );
}
