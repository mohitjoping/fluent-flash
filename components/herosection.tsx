'use client'
import React from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
type Props = {};

export default function Herosection({}: Props) {



  const words = [
    {
      text: "AI-Powered Flashcards!",
      className: "text-6xl text-white font-normal",
    },
  ];

  return (
    <>
      <section className="w-full h-[90.5vh] relative">
        {/* Background div */}
        <div className="absolute inset-0 flex justify-end items-center  bg-blue-900 ">
          <div className="flex flex-col w-[35%] h-[80vh] bg-gray-50  mr-24 border-blue-900 shadow-[24px_24px_0px_#000000] justify-center items-center">
          <div className=" w-[15vw] h-auto ">
              <img src="/cat.svg" alt="Cat SVG" />
            </div>
            <div className=" border-blue-900 border-4 rounded-2xl w-3/4 h-2/6">
                video tutorial
            </div>
          </div>
        </div>

        {/* Content divs */}
        <div className="relative z-10 flex justify-start items- h-full">
          {/* Text container */}
          <div className="flex flex-col  mt-24  gap-4">
            <h1 className="text-6xl ml-16 pl-4 text-white font-normal leading-tight">
              Master English <br /> Vocabulary with 
              <TypewriterEffectSmooth words={words} />
            </h1>
            
            <p className="text-lg text-gray-50 ml-16 pl-4 ">
              Unlock the power of words and speak fluently with <br />
              custom flashcards tailored to your needs.
            </p>

            <button className="cta h-14 mt-24 w-[16vw] flex items-center px-8 pl-4 ml-[5.5rem] text-white bg-[#323232] transition duration-1000 shadow-[6px_6px_0_#000] skew-x-[-15deg] border-none cursor-pointer focus:outline-none hover:transition hover:duration-500 hover:shadow-[10px_10px_0_#fff] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]">
              <span className="span inline-block skew-x-[15deg]">
                Let's go
              </span>
              <span className="second relative w-5 ml-7 transition-all duration-500 hover:mr-12 top-2.5 transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 66 43"
                  height="20px"
                  width="50px"
                >
                  <g
                    fillRule="evenodd"
                    fill="none"
                    strokeWidth="1"
                    stroke="none"
                    id="arrow"
                  >
                    <path
                      fill="#FFFFFF"
                      d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                      className="one transition-transform duration-400 transform translate-x-[-60%]"
                    ></path>
                    <path
                      fill="#FFFFFF"
                      d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                      className="two transition-transform duration-500 transform translate-x-[-30%]"
                    ></path>
                    <path
                      fill="#FFFFFF"
                      d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                      className="three"
                    ></path>
                  </g>
                </svg>
              </span>
            </button>
          </div>
          {/* Content divs */}
          <div className="relative z-10 flex flex-col items-center  h-full">
            {/* Image container */}
            {/* <div className="mb-4">
              <img src="/path/to/your/image.png" alt="Your Image" />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
