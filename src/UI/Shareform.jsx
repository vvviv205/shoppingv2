import { copyToClipboard } from "@phntms/react-share";
import { IoClose } from "react-icons/io5";
import { BiLogoTelegram } from "react-icons/bi";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import gmailIcon from "./../../Data/gmail.png";
import React from "react";
import {
  EmailShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";
import { usePost } from "../App";
import toast from "react-hot-toast";

("absolute w-full bg-slate-200/15 backdrop-blur-md mt-4 sm:mt-0 z-50 h-screen inset-0  flex justify-center items-center transition-all duration-150");

export default function Shareform() {
  const { infoSharing, setIsSharing } = usePost();
  const { url, title } = infoSharing;
  const message = `I advise you to try ${title} `;
  return (
    <div
      id="hs-unstyled-modal"
      class="hs-overlay hidden w-full bg-slate-200/15 backdrop-blur-md h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto"
    >
      <div class="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <center>
          <center className="absolute w-fit bg-slate-200/15 backdrop-blur-md mt-4 sm:mt-0 z-50 h-screen   flex justify-center items-center transition-all duration-150">
            <center className=" z-50 ">
              <div className="w-[200px] sm:w-[25rem] relative  h-[12rem] sm:h-[16rem]  bg-white rounded-lg p-4 sm:py-8 sm:px-6 shadow-2xl">
                <IoClose
                  data-hs-overlay="#hs-unstyled-modal"
                  onClick={() => setIsSharing(false)}
                  className="absolute top-3 right-4 text-2xl cursor-pointer p-1 text-center rounded-full bg-slate-200"
                />
                <div className="flex flex-col gap-3">
                  <h1 className=" text-left font-semibold text-sm sm:text-lg">
                    Share
                  </h1>

                  <div className="flex justify-start gap-2 sm:gap-4">
                    <TelegramShareButton url={url} title={message}>
                      <BiLogoTelegram className=" text-2xl sm:text-4xl text-[#0099FF]" />
                    </TelegramShareButton>
                    <LinkedinShareButton url={url} title={message}>
                      <BsLinkedin className="rounded-sm text-2xl sm:text-4xl text-[#0072b1]" />
                    </LinkedinShareButton>
                    <WhatsappShareButton url={url} title={message}>
                      <BsWhatsapp className="rounded-sm text-2xl sm:text-4xl text-[#25D366]" />
                    </WhatsappShareButton>
                    <EmailShareButton url={url} title={message}>
                      <img src={gmailIcon} className="w-7 sm:w-11" />
                    </EmailShareButton>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className=" text-left font-semibold text-sm sm:text-lg mt-0 sm:mt-3">
                      or copy link
                    </h1>
                    <div className="flex justify-between py-1 sm:py-2 px-1 sm:px-4 w-full border-2  ">
                      <h1 className="font-normal text-[0.6rem] sm:text-xs py-1 overflow-x-auto">
                        {url}
                      </h1>
                      <button
                        className="bg-slate-200 text-[0.6rem] sm:text-base py-1 px-2 sm:px-4 rounded-lg"
                        onClick={() => {
                          copyToClipboard(url);
                          toast.success("Link has been copied successfully");
                        }}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </center>
          </center>
        </center>
      </div>
    </div>
  );
}
