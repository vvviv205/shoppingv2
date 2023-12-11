import React, { useEffect, useState } from "react";
import dark from "./../../../Data/Dark.jpg";
import light from "./../../../Data/light.jpg";
import { getBrands, getCategories } from "../../services/apiProducts";
import { NavLink } from "react-router-dom";
export default function Homepage() {
  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    async function loader() {
      let data = await getCategories();
      setCategories(data);
    }
    loader();
  }, []);

  const [Brands, setBrands] = useState([]);
  useEffect(() => {
    async function loader() {
      let data = await getBrands();
      setBrands(data);
    }
    loader();
  }, []);

  return (
    <div className="dark:bg-black h-fit min-h-screen ">
      <div className="flex flex-col-reverse sm:flex-row justify-between min-h-screen  pt-10 sm:pt-44 mx-10 ">
        <div className="mt-5 sm:mt-0">
          <h1 className="dark:text-white text-3xl sm:text-6xl leading-9 sm:leading-[4rem] font-bold">
            Pick your best <br /> brands
          </h1>
          <h2 className="dark:text-white text-lg sm:text-2xl mt-3 sm:mt-7 font-semibold">
            with MoH e-commerce website
          </h2>
          <h5 className="dark:text-white hidden sm:flex text-base mt-6 font-medium w-[80%]">
            Welcome to MoH shopping page V2 to show the best user experience and
            creative design
          </h5>
          <button className="text-white text-base sm:text-2xl mt-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 sm:py-3 px-5 rounded-2xl text-left bg-white w-auto font-medium">
            <NavLink to="/products/all">Start shopping !</NavLink>
          </button>
        </div>
        <img
          src={dark}
          className="hidden dark:flex w-screen sm:w-[50%] h-32 sm:h-56 "
        />
        <img
          src={light}
          className="flex dark:hidden w-full sm:w-[50%] h-32 sm:h-96 "
        />
      </div>

      <div className="mt-16 sm:mt-20">
        <center>
          <h1 className="dark:text-white text-4xl sm:text-5xl font-semibold">
            Shop by categories
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mt-7">
            {Categories.map((c) => (
              <NavLink
                to={`/products/${c}`}
                className="text-white text-base sm:text-2xl p-3 bg-neutral-900 rounded-xl cursor-pointer"
              >
                {c}
              </NavLink>
            ))}
          </div>
        </center>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
