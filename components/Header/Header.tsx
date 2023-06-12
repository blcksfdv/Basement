import { useConnect } from "wagmi";
import { ExampleButton } from "./connect";
import { Popover, Transition } from "@headlessui/react";
import logo from "../../public/logo.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState, useEffect } from "react";
export function Header() {

  return (
    <Popover className="w-full  border-b  border-[#2e2a2ad6] sticky top-0 z-20 bg-[#020E14]">
      <div
        className="flex items-center px-2 justify-between max-w-7xl m-auto
    transform  dark:backdrop-blur-none 
     text-white z-50  top-[0px]
      sticky py-3"
      >
        <div className="cursor-pointer flex justify-center items-center">
          {/* logo */}
          <LazyLoadImage
            src={logo.src}
            alt="Basement Dwellers"
            className="cursor-pointer rounded-full w-[130px] md:w-[200px]"
          />
        </div>
        {/* logo */}

        {/* ul */}
        <div className="flex items-center gap-x-8">
          {/* ul */}

          {/* button */}
          <div className="flex items-center gap-5">
            <ExampleButton />
          </div>
        </div>
        {/* button */}

        {/* mobile manu */}
      </div>
    </Popover>
  );
}
