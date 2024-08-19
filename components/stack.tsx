import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
type Props = {};

export function Stack({}: Props) {
  return (
    <section className="flex flex-col w-[94vw] h-[70vh] mt-10 rounded-md bg-gray-100 shadow-[24px_24px_0px_#000000] ">
      <div className="flex justify-end items-start m-8">
      <Dialog>
            <DialogTrigger>
            <button className="mx-auto w-30 h-10 py-1 px-2.5 rounded-md border-2 border-[#323232] bg-[#fff] shadow-[4px_4px_0_#000000] text-lg font-semibold text-[#323232] cursor-pointer active:shadow-none active:translate-x-[3px] active:translate-y-[3px]">
          Export PDF
        </button>
            </DialogTrigger>
            <DialogContent className="shadow-[8px_8px_0_#000000]">
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
      </div>
        
    </section>
  );
}
