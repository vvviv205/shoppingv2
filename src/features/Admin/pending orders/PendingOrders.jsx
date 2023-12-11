import React from "react";
import Ordermodal from "./Ordermodal";
import Orderitems from "./Orderitems";

export default function PendingOrders() {
  const thCss =
    "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-gray-600 text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider";

  return (
    <div className="p-5">
      <center>
        <h1 className="text-3xl font-semibold dark:text-white">
          Pending orders
        </h1>
      </center>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow-lg rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th class={thCss}>Order Id</th>
                <th class={thCss}>name</th>
                <th class={thCss}>phone number</th>
                <th class={thCss}>ordered at</th>
                <th class={thCss}>actions</th>
              </tr>
            </thead>
            <tbody>
              <Orderitems />
            </tbody>
          </table>
        </div>
      </div>
      <Ordermodal />
    </div>
  );
}
