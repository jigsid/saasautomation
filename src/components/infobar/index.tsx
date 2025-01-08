"use client";
import React from "react";
import { Book, Headphones, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { UserButton } from "@clerk/nextjs";

type Props = {};

const InfoBar = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row justify-end gap-4 md:gap-6 items-center px-4 py-4 w-full dark:bg-black">
      <div className="w-full md:w-auto mb-2 ml-4 md:mb-0">
        <span className="flex items-center rounded-full bg-muted px-2 md:px-4 w-full md:w-auto">
          <Search />
          <Input
            placeholder="Quick Search"
            className="border-none bg-transparent w-full md:w-auto"
          />
        </span>
      </div>
      <div className="ml-2 flex flex-wrap justify-end gap-4 md:gap-6 items-center w-full md:w-auto">
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <Headphones className="w-5 h-5 md:w-6 md:h-6" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Contact Support</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <Book className="w-5 h-5 md:w-6 md:h-6" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Guide</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <UserButton />
      </div>
    </div>
  );
};

export default InfoBar;
