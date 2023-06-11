import { useConnect } from "wagmi";

import { useTheme } from "next-themes";
import { ExampleButton } from "./connect";
import { Popover, Transition } from "@headlessui/react";
import logo from "../../public/logo.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState, useEffect } from "react";
import Link from "next/link";
export function Header() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  const Header = [
    {
      id: 0,
      name: "Opensea",
      link: "https://tailwindcss.com/docs/font-family",
      islink: true,
    },
    {
      id: 0,
      name: "Etherscan",
      link: "https://tailwindcss.com/docs/font-family",
      islink: true,
    },
  ];

  useEffect(() => {
    setIsMounted(true);
    setTheme("dark");
  }, []);

  const ChangeToDarkMood = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <Popover className="w-full  border-b  dark:border-secondary-dark">
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
        <div className="hidden lg:flex items-center gap-x-8">
          <ul className="flex gap-2 font-semibold whitespace-nowrap">
            {Header.map((e, index) => {
              return (
                <li key={index}>
                  {e.islink && (
                    <Link href={e.link}>
                      {" "}
                      <p className="link_style">
                        {e.name}
                      </p>{" "}
                    </Link>
                  )}
                  {!e.islink && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="link_style"
                      href={`#${e.link}`}
                    >
                      <span>{e.name}</span>
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
          {/* ul */}

          {/* button */}
          <div className="flex items-center gap-5">
            <ExampleButton />
          </div>
        </div>
        {/* button */}

        {/* mobile manu */}

        <div className="flex flex-row items-center gap-x-2 lg:hidden">
          <ExampleButton />
          <Popover.Button>
            <div className="flex flex-row gap-x-2">
              <div className="cursor-pointer p-2  rounded-lg hover:bg-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              </div>
            </div>
          </Popover.Button>
          <Transition
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Panel className="absolute z-20 inset-0 top-[80px]  dark:bg-primary-dark 	">
              <div className="flex flex-col items-start  w-full bg-[#1c1b22] dark:rounded-lg pt-2">
                {Header &&
                  Header.map((e, index) => {
                    return (
                      <>
                        {e.islink && (
                          <Link href={e.link} className="w-full">
                            {" "}
                            <p className="relative flex items-center gap-2 cursor-pointer rounded dark:hover:bg-secondary-dark  hover:bg-[#2a2a2a] p-4 transition-all">
                              {e.name}
                            </p>{" "}
                          </Link>
                        )}
                        {!e.islink && (
                          <a
                            target="_blank"
                            rel="noreferrer"
                            className="relative w-full flex items-center gap-2 cursor-pointer rounded dark:hover:bg-secondary-dark  hover:bg-[#2a2a2a] p-4 transition-all"
                            href={`#${e.link}`}
                          >
                            <span>{e.name}</span>
                          </a>
                        )}
                      </>
                    );
                  })}

                <div className="flex items-center gap-4 p-4">
                  <a href="https://t.me/sayeu" target="_blank" rel="noreferrer">
                    <button
                      className="px-6 py-2 border rounded-xl text-sm
         font-semibold bg-black dark:bg-white dark:text-black text-white whitespace-nowrap"
                    >
                      Contact
                    </button>
                  </a>
             
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>

        {/* mobile manu */}
      </div>
    </Popover>
  );
}
