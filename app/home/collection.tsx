import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Cardstack from "@/components/ui/cardstack";
import { ScrollArea } from "@/components/ui/scroll-area";
import {FlashCard} from "@/components/flashcard";
type Props = {};

export function Collection({}: Props) {
  return (
    <section className="flex flex-col w-[94vw] h-[70vh] mt-10 rounded-md bg-gray-100 shadow-[24px_24px_0px_#000000] ">
        {/* Cardstack stack */}
        <ScrollArea>
       <div className="flex flex-row">
       <Cardstack />
        <Cardstack />
        <Cardstack />
        <Cardstack />
        <Cardstack />
        <Cardstack />
       
       </div>
       <div className="flex flex-row">
       <Cardstack />
        <Cardstack />
        <Cardstack />
        <Cardstack />
        <Cardstack />
        <Cardstack />
       </div>
       <div className="flex flex-row">
       <Cardstack />
        <Cardstack />
        <Cardstack />
        <Cardstack />
        <Cardstack />
        <Cardstack />
       </div>
       </ScrollArea>
    </section>
  );
}
