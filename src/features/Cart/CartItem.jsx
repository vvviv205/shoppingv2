import React from "react";
import { usePost } from "../../App";
import UseAnimations from "react-useanimations";
import trash from "react-useanimations/lib/trash";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiTrash } from "react-icons/bi";
export default function CartItem({ item }) {
  const { id, image, title, quantity, price, finalPrice, brand } = item;
  const { cart, setCart, total } = usePost();
  const [newQTY, setNewQTY] = useState(quantity);
  function handleQuantity(num) {
    const nextCounters = cart.map((c, i) => {
      const index = cart.findIndex((c) => c.id === id);
      if (i === index && num > 0) {
        // Increment the clicked counter
        return (c = {
          id,
          title,
          price,
          finalPrice: price * num,
          quantity: num,
          image,
          brand,
        });
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setCart(nextCounters);
    setNewQTY(newQTY + 1);
  }
  return (
    <div class="justify-between items-center mb-6 rounded-lg bg-white px-6 py-4 shadow-md sm:flex sm:justify-start sm:max-h-64">
      <div className="w-full rounded-lg sm:w-[200px] overflow-clip">
        <img
          src={image}
          alt="product-image"
          class="block w-full  max-h-28 sm:max-h-[95px] sm:max-w-[200px] sm:w-auto sm:h-auto" /* "w " */
        />
      </div>
      <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div class="mt-5 sm:mt-0">
          <h2 class="text-lg font-bold text-gray-900">{title}</h2>
          <p class="mt-1 text-xs text-gray-700">{brand}</p>
        </div>
        <div class="mt-4 im gap-4 sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div class="flex items-center border-gray-100">
            <span
              onClick={() => handleQuantity(quantity - 1)}
              class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
            >
              {" "}
              -{" "}
            </span>
            <div class=" border bg-white text-center py-2 px-4 text-xs justify-center items-center">
              {quantity}
            </div>
            <span
              onClick={() => handleQuantity(quantity + 1)}
              class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
            >
              {" "}
              +{" "}
            </span>
          </div>
          <br />
          <div class="flex justify-between items-center space-x-4">
            <p class="text-sm ">${finalPrice}</p>
            <UseAnimations
              animation={trash}
              className="cursor-pointer"
              onClick={() => {
                setCart((c) => c.filter((c) => c.id !== id));
                toast("The product deleted succesfully", {
                  icon: <BiTrash className="text-xl text-red-500" />,
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
