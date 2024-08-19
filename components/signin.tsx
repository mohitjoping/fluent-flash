import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import React from "react";

type Props = {};

export default function Signin({}: Props) {
  return (
 
        <section className="flex justify-center">
          <form className="p-10 bg-lightgrey flex flex-col items-start justify-center gap-5 rounded-md border-2 border-[#323232] shadow-lg shadow-[#000000]">
            <div className="text-[#323232] font-extrabold text-xl mb-6">
              Welcome,
              <br />
              <span className="text-[#666] font-semibold text-lg">
                sign in to continue
              </span>
            </div>

            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-64 h-10 rounded-md border-2 border-[#323232] bg-white shadow-lg shadow-[#323232] text-[#323232] text-lg font-semibold p-1.5 outline-none placeholder-[#666] placeholder-opacity-80 focus:border-[#1f3a8a]"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="w-64 h-10 rounded-md border-2 border-[#323232] bg-white shadow-lg shadow-[#323232] text-[#323232] text-lg font-semibold p-1.5 outline-none placeholder-[#666] placeholder-opacity-80 focus:border-[#1f3a8a]"
            />
            <div className="flex gap-5 ">
              <button className="cursor-pointer w-64 h-10 p-2 rounded-md border-2 border-[#323232] bg-white shadow-lg shadow-[#323232] text-[#323232] flex justify-center items-center gap-2">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 256 262"
                  preserveAspectRatio="xMidYMid"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    fill="#EB4335"
                  ></path>
                </svg>{" "}
                continue with google
              </button>
            </div>
            <button className="mt-12 mx-auto w-32 h-10 rounded-md border-2 border-[#323232] bg-white shadow-lg shadow-[#323232] text-[#323232] text-lg font-semibold cursor-pointer">
              Let`s go &rarr;
            </button>
          </form>
        </section>
  );
}
