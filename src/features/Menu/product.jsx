import React from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
import { usePost } from "../../App";
import { BsCart, BsCartCheck } from "react-icons/bs";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import Loading from "../../UI/Loading";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import useImageLoading from "../../services/useImageLoading";
import { useState } from "react";
import { BiTrash } from "react-icons/bi";

export default function Product({ product }) {
  const { BookMarked, setBookMarked, cart, setCart } = usePost();
  const {
    title,
    price,
    images,
    thumbnail,
    off,
    isAvailable,
    stock,
    id,
    brand,
  } = product;
  console.log(brand);
  const offPrice = off > 0 ? Math.floor(price - price * (off / 100)) : price;
  const isBookMarked = BookMarked.includes(id);
  const [isImageLoaded] = useImageLoading(images[0]);
  const [isBuyed, setIsBuyed] = useState(false);
  const quantity = 1;
  function handleAddToCart() {
    if (cart.map((e) => e.id).includes(id)) {
      toast.error("This product had already added to cart");
    } else if (!isAvailable) {
      toast.error("We are sorry , this product isn't in stock right now");
    } else {
      setCart((c) => [
        ...c,
        {
          id,
          title,
          price: price,
          finalPrice: offPrice * quantity,
          quantity: quantity,
          image: thumbnail,
          brand,
        },
      ]);
      toast.success(`(${title}) added to cart`);
      setIsBuyed(true);
    }
  }
  return (
    <div className="group relative my-5 flex w-full max-w-[11.5rem] sm:max-w-[13rem] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md hover:shadow-lg transition-all duration-200">
      <NavLink
        className="relative mx-2 mt-2 flex h-40 sm:h-48 overflow-hidden rounded-xl"
        to={`/product/${id}`}
      >
        {!isImageLoaded && <Loading />}
        {isImageLoaded && (
          <img
            src={images[0]}
            loading="lazy"
            className="peer absolute top-0 right-0 h-full w-full object-cover"
          />
        )}
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
          />
        </svg>
        {off > 0 && (
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-xs font-medium text-white">
            {off}% OFF
          </span>
        )}
        {stock < 10 && isAvailable === true ? (
          <span className="absolute top-0 right-0 m-2 rounded-full bg-red-500 px-2 text-center text-xs font-medium text-white">
            {stock} left in stock
          </span>
        ) : (
          ""
        )}
        <div className="bg-slate-200/10 backdrop-blur-sm opacity-0 hover:opacity-100 hidden sm:flex items-center justify-center absolute inset-0 transition-all duration-150">
          <a className="py-3 px-6 bg-white rounded-lg">Show details</a>
        </div>
      </NavLink>
      <div className="mt-4 px-5 pb-5">
        <a>
          <h5 className="text-lg tracking-tight w-full h-14 overflow-y-auto text-slate-900">
            {title}
          </h5>
        </a>
        <div className="mt-1 sm:mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-xl mr-[2px] sm:text-2xl font-bold text-slate-900">
              ${off > 0 ? Math.floor(price - price * (off / 100)) : price}
            </span>
            {off > 0 && (
              <span className="texl-xs sm:text-[0.75rem] text-slate-900 line-through">
                {price}
              </span>
            )}
          </p>
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => handleAddToCart()}
            className={`flex items-center justify-center rounded-md ${
              isAvailable
                ? isBuyed
                  ? "bg-green-500"
                  : "bg-slate-900"
                : "bg-red-600"
            }  px-2 py-2 text-center text-xs font-medium text-white   ${
              isAvailable
                ? isBuyed
                  ? "hover:bg-green-500"
                  : "hover:bg-gray-700"
                : "bg-red-600"
            }  w-[90%] focus:outline-none focus:ring-4 ${
              isAvailable && "focus:ring-blue-300"
            } ${!isAvailable && "cursor-not-allowed"}`}
          >
            {isAvailable ? (
              isBuyed ? (
                <BsCartCheck className="text-xl font-medium sm:mr-1" />
              ) : (
                <BsCart className="text-xl font-medium sm:mr-1" />
              )
            ) : (
              <AiOutlineExclamationCircle className="text-xl font-medium sm:mr-1" />
            )}

            <span className="hidden sm:flex">
              {isAvailable
                ? isBuyed
                  ? "Added"
                  : "Add to cart"
                : "Out of stock"}
            </span>
          </button>
          <button className="bg-slate-200 px-3 py-2 rounded-md hover:bg-slate-300">
            {!isBookMarked ? (
              <IoBookmarkOutline
                onClick={() => {
                  setBookMarked((e) => [...e, id]);
                  toast.success(`(${title}) added to Bookmarks successfully`);
                }}
              />
            ) : (
              <IoBookmark
                onClick={() => {
                  setBookMarked((BookMarked) =>
                    BookMarked.filter((book) => book !== id)
                  );
                  toast(`(${title}) removed from Bookmarks successfully`, {
                    icon: <BiTrash className="text-4xl text-red-500" />,
                  });
                }}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
