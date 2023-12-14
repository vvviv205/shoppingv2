import React from "react";
import { BiTrash } from "react-icons/bi";
import { usePost } from "../../App";
import toast from "react-hot-toast";

export default function OrderItem({ ord }) {
  const { setOrder } = usePost();
  function handleDelete() {
    setOrder((o) => o.filter((or) => or.id !== ord.id));
    toast("The Order deleted succesfully", {
      icon: <BiTrash className="text-xl text-red-500" />,
    });
  }
  return (
    <tr>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div class="flex items-center">
          <div class="ml-3">
            <p class="text-gray-900 whitespace-no-wrap">{ord.id}</p>
          </div>
        </div>
      </td>
      <td class="pl-8 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">{ord.cart.length}</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">{ord.deliverDate}</p>
      </td>
      <td class="pl-6 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">
          <BiTrash
            onClick={() => handleDelete()}
            className="text-2xl ml-1 text-red-500 cursor-pointer"
          />
        </p>
      </td>
    </tr>
  );
}
