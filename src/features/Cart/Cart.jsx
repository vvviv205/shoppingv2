import React from "react";
import { usePost } from "../../App";
import CartItem from "./CartItem";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft, AiOutlineExclamationCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const { cart, total, setBuyInfor, setIsBuying } = usePost();

  function handleCheckOut() {
    if (cart.length === 0) {
      toast("please add some products first", {
        icon: <AiOutlineExclamationCircle className="text-3xl" />,
      });
    } else {
      setIsBuying(true);
      setBuyInfor([]);
    }
  }
  return (
    <div class="h-screen overflow-y-auto pt-20">
      <h1 class="mb-10 text-center text-2xl font-bold dark:text-white ">
        Cart Items
      </h1>
      <div class="mx-auto max-w-5xl justify-center  px-6 md:flex md:space-x-6 xl:px-0">
        <div class="rounded-lg md:w-2/3 ">
          {cart.length === 0 && (
            <div class="justify-center items-center mb-6 rounded-lg bg-white px-6 py-4 shadow-md flex flex-col sm:h-56 ">
              <h1 className="font-semibold text-lg sm:text-xl mb-6 text-center">
                Your cart is empty , please add some products first
              </h1>
              <NavLink
                to="/products/all"
                className="flex justify-center items-center self-center bg-slate-200 hover:bg-slate-300 py-2 px-5 text-xs sm:text-lg rounded-lg"
              >
                <AiOutlineArrowLeft className="mt-[2px] mr-[2px] sm:mr-1" />
                back to products
              </NavLink>
            </div>
          )}
          {cart ? cart.map((item) => <CartItem item={item} />) : ""}
        </div>

        <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div class="mb-2 flex justify-between flex-wrap">
            <p class="text-gray-700 text-sm">Subtotal</p>
            <p class="text-gray-700 text-sm">${Math.floor(total)}</p>
          </div>
          <div class="flex justify-between flex-wrap">
            <p class="text-gray-700 text-sm">Shipping</p>
            <p class="text-gray-700 text-sm">
              ${Math.floor(total * (5 / 100))}
            </p>
          </div>
          <hr class="my-4" />
          <div class="flex justify-between flex-wrap">
            <p class="text-lg font-bold">Total</p>
            <div class="">
              <p class="mb-1 text-lg font-bold">
                ${Math.floor(total + total * (5 / 100))}
              </p>
            </div>
          </div>
          <button
            class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
            onClick={() => handleCheckOut()}
          >
            Check out
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
