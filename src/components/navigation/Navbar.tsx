"use client";

// base imports
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

// import assets
import NavigationButton from "./NavigationButton";

import { Raleway } from "next/font/google";
import Image from "next/image";
import icons from "../ui/IconImport";
import ExternalLinkBtn from "./ExternalLinkBtn";
const paragraph = Raleway({ weight: "200", subsets: ["latin"] });

interface Props {
  isOpen: boolean;
}

export default function Navbar({ isOpen }: Props) {
  const pathname = usePathname();

  return (
    <>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ delay: 5, duration: 6, ease: "easeInOut" }}
        viewport={{ once: true }}
        className={` ${paragraph.className} lg:hidden fixed -translate-y-1/2 top-[30dvh] rounded-2xl right-2 text-center p-2 whitespace-nowrap [text-orientation:upright] [writing-mode:vertical-lr] text-sm pointer-events-none `}
      >
        Swipe&nbsp;for&nbsp;menu
      </motion.span>
      <nav
        className={` ${
          paragraph.className
        } fixed z-50 -translate-y-1/2 top-[30dvh] md:top-1/2 lg:right-0 rounded-l-md py-6 [backdrop-filter:blur(1px)] bg-gray-600 bg-opacity-70 ${
          isOpen ? " right-0 sm:right-0 " : " -right-14 "
        } transition-all`}
      >
        <div className="relative flex flex-col ">
          {pathname !== "/" && (
            <NavigationButton slug="/" content="🏠" label="homepage" />
          )}
          {pathname !== "/board" && (
            <NavigationButton slug="/board" content="📒" label="guestbook" />
          )}
          {pathname === "/board" && (
            <NavigationButton
              slug="/new-postit"
              content="📒+"
              label="add postit"
            />
          )}
          {pathname === "/" && (
            <ExternalLinkBtn
              slug="https://thehomebrewbar.vercel.app/"
              content={icons.cocktail}
              label="The Homebrew Bar"
              cssOverrides="[filter:drop-shadow(0px_0px_10px_#00F0FF)]"
            />
          )}
        </div>
      </nav>
    </>
  );
}
