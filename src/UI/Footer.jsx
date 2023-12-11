import React from "react";
import { BiLogoGmail, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
} from "react-icons/bs";

export default function Footer() {
  return (
    <footer class="bg-neutral-900 shadow-xl dark:border-t-[1px] border-neutral-900 ">
      <div class="mx-auto w-full max-w-screen-xl">
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 class="mb-6 text-sm font-semibold  uppercase text-white">
              Address
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <h1>-address 1</h1>
              </li>
              <li class="mb-4">
                <h1>-address 2</h1>
              </li>
              <li class="mb-4">
                <h1>-address 3</h1>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold  uppercas text-white">
              Help center
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" target="_blank" class="hover:underline">
                  social media 1
                </a>
              </li>
              <li class="mb-4">
                <a href="#" target="_blank" class="hover:underline">
                  social media 2
                </a>
              </li>
              <li class="mb-4">
                <a href="#" target="_blank" class="hover:underline">
                  social media 3
                </a>
              </li>
              <li class="mb-4">
                <a href="#" target="_blank" class="hover:underline">
                  social media 4
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold  uppercase text-white">
              Legal
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Licensing
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-white text-sm font-semibold text-center">
              Designed and developed by{" "}
            </h3>
            <h1 className="text-white text-4xl mt-3 font-semibold text-center">
              MoH
            </h1>
            <h3 className="text-white hidden sm:flex text-sm mt-3 font-semibold text-center">
              using React js and Tailwind css
            </h3>
            <div className="flex justify-center mt-3 gap-3">
              <BiLogoReact className="text-3xl sm:text-5xl text-blue-600" />
              <BiLogoTailwindCss className="text-3xl sm:text-5xl text-blue-300" />
            </div>
          </div>
        </div>
        <div class="px-4 py-6 bg-neutral-950 rounded-lg md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2023 MoH™. All CopyRights Reserved.
          </span>
          <div class="flex mt-4 space-x-5 sm:justify-center md:mt-0">
            <a href="#" class="text-gray-400 hover:text-white">
              <BsFacebook />
              <span class="sr-only">Facebook page</span>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <BsInstagram />
              <span class="sr-only">Instagram page</span>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <BsTelegram />
              <span class="sr-only">Telegram inbox</span>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <BiLogoGmail />
              <span class="sr-only">Gmail contact</span>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <BsLinkedin />
              <span class="sr-only">LinkedIn page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
