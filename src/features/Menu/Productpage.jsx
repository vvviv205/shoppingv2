import React, { useEffect, useState } from "react";
import { getProduct } from "../../services/apiProducts";
import { useLoaderData } from "react-router-dom";
import { usePost } from "../../App";
import {
  IoBookmark,
  IoBookmarkOutline,
  IoClose,
  IoShareOutline,
} from "react-icons/io5";
import toast from "react-hot-toast";
import Loading from "../../UI/Loading";
import Imagescontainer from "./Imagescontainer";
import Starsrating from "../../UI/Starsrating";
import useImageLoading from "../../services/useImageLoading";
import Shareform from "../../UI/Shareform";

export default function Productpage() {
  const data = useLoaderData();
  const {
    title,
    price,
    off,
    isAvailable,
    thumbnail,
    description,
    brand,
    rate,
    id,
  } = data[0];
  const imgs = data[0].images;
  const {
    BookMarked,
    setBookMarked,
    setIsSharing,
    setInfoSharing,
    cart,
    setCart,
    setIsBuying,
    setBuyInfor,
  } = usePost();
  const offPrice = off > 0 ? Math.floor(price - price * (off / 100)) : price;
  const [quantity, setQuantity] = useState(1);
  const isBookMarked = BookMarked.includes(id);
  const [isBuyed, setIsBuyed] = useState(false);
  const [currentphoto, setCurrentphoto] = useState({
    image: imgs[0],
    id: 0,
  });
  const [isImageLoaded] = useImageLoading(currentphoto.image);

  //// Handle Current image
  function handleRight() {
    if (currentphoto.id + 1 < imgs.length) {
      setCurrentphoto({
        image: imgs[currentphoto.id + 1],
        id: currentphoto.id + 1,
      });
    } else {
      setCurrentphoto({ image: imgs[0], id: 0 });
    }
  }
  function handleLeft() {
    if (currentphoto.id + 1 > 1) {
      setCurrentphoto({
        image: data.images[currentphoto.id - 1],
        id: currentphoto.id - 1,
      });
    } else {
      setCurrentphoto({
        image: data.images[imgs.length - 1],
        id: imgs.length - 1,
      });
    }
  }

  ///// Handle sharing
  function sharing() {
    /* 
    setIsSharing(true); */
    setInfoSharing({ url: `http://localhost:5173/product/${id}`, title });
  }

  ////// Handle quantity
  function handleQuantity(number) {
    if (number === -1 && quantity === 1) return;
    setQuantity(quantity + number);
  }
  ///// Handle add to cart
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
  ////// handle buy
  function handleBuy() {
    setIsBuying(true);
    setBuyInfor([
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
  }

  return (
    <>
      <section class="py-10 font-poppins h-screen overflow-auto bg-slate-200 dark:bg-neutral-900">
        <div class="max-w-6xl px-4 mx-auto">
          <div class="flex flex-wrap mb-24 -mx-4">
            <div class="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div class="sticky top-0 overflow-hidden ">
                <div class="relative mb-6 lg:mb-10 lg:h-96">
                  <a
                    class={`absolute left-0 transform lg:ml-2 top-1/2 translate-1/2 cursor-pointer ${
                      imgs.length === 1 && "hidden"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      onClick={() => handleLeft()}
                      class="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                      ></path>
                    </svg>
                  </a>
                  {!isImageLoaded && <Loading bg="" />}
                  {isImageLoaded && (
                    <img
                      src={currentphoto.image}
                      loading="lazy"
                      className="object-contain w-full lg:h-full"
                    />
                  )}
                  <a
                    class={`absolute right-0 transform lg:mr-2 top-1/2 translate-1/2 cursor-pointer ${
                      imgs.length === 1 && "hidden"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      onClick={() => handleRight()}
                      fill="currentColor"
                      class="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div class="flex-wrap hidden -mx-2 md:flex">
                  {imgs.map((image, i) => {
                    return (
                      <div class="w-1/2 p-2 sm:w-1/4">
                        <a
                          class={`block border ${
                            currentphoto.id === i ? "brightness-50 p-1" : ""
                          } border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300`}
                          onClick={() => setCurrentphoto({ image, id: i })}
                        >
                          <Imagescontainer image={image} />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2">
              <div class="lg:pl-20">
                <div class="mb-6 ">
                  <span class="px-2.5 py-0.5 text-xs text-blue-600 bg-blue-100 dark:bg-gray-700 rounded-xl dark:text-gray-200">
                    New Arrival
                  </span>
                  {off > 30 && (
                    <span class="px-2.5 py-0.5 text-xs text-blue-600 bg-blue-100 dark:bg-gray-700 rounded-xl dark:text-gray-200">
                      Special Off
                    </span>
                  )}
                  <h2 class="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                    {title}
                  </h2>
                  <div class="flex flex-wrap items-center mb-6">
                    <Starsrating rate={rate} />
                  </div>
                  <p class="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                    <span>
                      $
                      {off > 0
                        ? Math.floor(price - price * (off / 100))
                        : price}
                    </span>
                    {off > 0 && (
                      <span className="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400">
                        ${price}
                      </span>
                    )}
                  </p>
                </div>
                <div class="mb-6">
                  <h2 class="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                    Description :
                  </h2>
                  <div class="bg-gray-100 dark:bg-gray-700 rounded-xl">
                    <div class="p-3 lg:p-5 ">
                      <h5 className="text-black dark:text-white">
                        {description}
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                  <span class="text-base text-gray-600 dark:text-gray-400">
                    {isAvailable ? "In stock" : "Out of stock"}
                  </span>
                  <p class="mt-2 text-sm text-blue-500 dark:text-blue-200">
                    {"Ships to all of Iraq. "}
                    <span class="text-gray-600 dark:text-gray-400">
                      Most customers receive within 2-15 days.
                    </span>
                  </p>
                </div>
                <div class="mb-6 "></div>
                <div class="flex flex-wrap items-center mb-6">
                  <div class="mb-4 mr-4 lg:mb-0">
                    <div class="w-28">
                      <div class="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                        <button
                          onClick={() => handleQuantity(-1)}
                          class=" w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-neutral-800 hover:bg-gray-300"
                        >
                          <span class="m-auto text-2xl font-thin">-</span>
                        </button>
                        <div class="flex justify-center items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-neutral-800 focus:outline-none text-md hover:text-black">
                          {quantity}
                        </div>
                        <button
                          onClick={() => handleQuantity(1)}
                          class="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-neutral-800 hover:text-gray-700 hover:bg-gray-300"
                        >
                          <span class="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3 lg:mb-0 flex">
                    <button className="bg-white dark:bg-neutral-800 w-10 h-10 mr-2 rounded-md hover:bg-slate-300 flex justify-center items-center">
                      {!isBookMarked ? (
                        <IoBookmarkOutline
                          className="text-xl dark:text-white"
                          onClick={() => {
                            setBookMarked((e) => [...e, id]);
                            toast.success(
                              `(${title}) added to Bookmarks successfully`
                            );
                          }}
                        />
                      ) : (
                        <IoBookmark
                          className="text-xl dark:text-white"
                          onClick={() => {
                            setBookMarked((BookMarked) =>
                              BookMarked.filter((book) => book !== id)
                            );
                            toast.success(
                              `(${title}) removed from Bookmarks successfully`
                            );
                          }}
                        />
                      )}
                    </button>
                    <button
                      data-hs-overlay="#hs-unstyled-modal"
                      onClick={() => sharing()}
                      className="bg-white dark:bg-neutral-800 px-3 py-2 rounded-md hover:bg-slate-300"
                    >
                      <IoShareOutline className="text-xl dark:text-white" />
                    </button>
                  </div>
                </div>

                <div class="flex flex-col gap-4 mb-6">
                  <button
                    onClick={() => handleAddToCart()}
                    className={`flex items-center justify-center rounded-md ${
                      isBuyed && "bg-green-500"
                    } ${
                      isAvailable ? "bg-slate-900" : "bg-red-600"
                    }  px-4 py-3 text-center text-xs font-medium text-white   ${
                      isBuyed && "hover:bg-green-500"
                    }  ${
                      isAvailable && "hover:bg-gray-700"
                    }  w-full focus:outline-none focus:ring-4 ${
                      isAvailable && "focus:ring-blue-300"
                    } ${!isAvailable && "cursor-not-allowed"}${
                      isAvailable ? "" : "hidden"
                    }`}
                  >
                    <h1 className="text-sm sm:text-lg">
                      {isAvailable
                        ? isBuyed
                          ? "Added"
                          : "Add to cart"
                        : "Out of stock"}
                    </h1>
                  </button>
                  {isAvailable ? (
                    <button
                      onClick={() => handleBuy()}
                      className={`flex items-center justify-center rounded-md ${
                        isAvailable ? "bg-slate-900" : "bg-red-800"
                      }  px-4 py-3 text-center text-xs font-medium text-white  ${
                        isAvailable && "hover:bg-gray-700"
                      }  w-full focus:outline-none focus:ring-4 ${
                        isAvailable && "focus:ring-blue-300"
                      } ${!isAvailable && "cursor-not-allowed"}${
                        isAvailable ? "" : "hidden"
                      }`}
                    >
                      <h1 className="text-sm sm:text-lg">Buy Now</h1>
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Shareform />
    </>
  );
}

export async function loader({ params }) {
  return await getProduct(params.id);
}
