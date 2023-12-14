import React from "react";
import { usePost } from "../App";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function Form({ single }) {
  const { cart, setCart, setIsBuying, buyInfor, setBuyInfor, setOrder, total } =
    usePost();
  const form = JSON.parse(localStorage.getItem("form"));
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: form ? form : "",
  });
  Date.prototype.addDays = function (days) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    return date.toLocaleDateString();
  };
  var date = new Date();

  function onSubmit(data) {
    localStorage.setItem("form", JSON.stringify(data));
    let orderInformation = {
      id: new Date().valueOf(),
      user: data,
      cart: single ? buyInfor : cart,
      total,
      orderDate: date.toLocaleDateString(),
      deliverDate: date.addDays(3),
    };
    setOrder((o) => [...o, orderInformation]);
    setCart([]);
    setIsBuying(false);
    setBuyInfor([]);
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5"></div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                We placed your order
              </p>
              <p className="mt-1 text-sm text-gray-500">
                The expected date of arrival of the shipment :{" "}
                {orderInformation.deliverDate}
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            to="/orders"
            onClick={() => {
              toast.dismiss(t.id);
              navigate("/orders");
            }}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Check your orders
          </button>
        </div>
      </div>
    ));
  }
  return (
    <>
      <div className=" h-full fixed top-0 start-0   w-full bg-slate-200/15 backdrop-blur-md   z-50    flex justify-center items-center transition-all duration-150">
        <div class="py-5 px-7 rounded-md bg-white">
          <h1 className="text-center pb-5 font-semibold text-2xl">Buy Form</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
              <input
                type="text"
                {...register("firstName")}
                required
                name="firstName"
                placeholder="Your name"
                class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 "
              />
              <input
                type="text"
                required
                {...register("phone", { min: 10, max: 25 })}
                name="phone"
                placeholder="Phone Number"
                class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
              />
              <div class="md:col-span-2">
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  name="email"
                  placeholder="E-mail (Optional)"
                  class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
                />
              </div>
              <div class="md:col-span-2">
                <input
                  type="text"
                  id="address"
                  required
                  {...register("address")}
                  name="address"
                  placeholder="Your address"
                  class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
                />
              </div>
              <div class="md:col-span-2">
                <button
                  type="submit"
                  class="py-3 text-base font-medium rounded text-white bg-blue-800 w-full hover:bg-blue-700 transition duration-300"
                >
                  Confirm the order
                </button>
                <button
                  onClick={() => setIsBuying(false)}
                  class="py-3 my-2 text-base font-medium rounded  w-full border-[1px] border-slate-400 transition duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
