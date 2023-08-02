"use client";

// base imports
import { usePathname } from "next/navigation";
import React from "react";

// import assets
import NavigationButton from "./NavigationButton";

interface Props {
  isOpen: boolean;
}

export default function Navbar({ isOpen }: Props) {
  const pathname = usePathname();
  // const { t } = useTranslation(); might revert or add text
  return (
    <nav
      className={`fixed z-50 -translate-y-1/2 top-[30dvh] md:top-1/2 lg:right-0 rounded-l-md py-2 bg-neutral-800 bg-opacity-60 [backdrop-filter:invert(20%)_blur(1px)] lg:bg-opacity-20 ${
        isOpen ? " right-0 sm:right-0 " : " -right-14 "
      } flex flex-col gap-5 justify-end  transition-all`}
    >
      <span className="text-2xl leading-none text-center font-semibold text-slate-600 ">
        &mdash;
      </span>
      {pathname !== "/" && <NavigationButton slug="/" content="🏠" />}
      {pathname !== "/board" && (
        <NavigationButton slug="/board" content="📒" />
      )}
      {pathname === "/board" && (
        <NavigationButton slug="/new-postit" content="📒+" />
      )}
      <span className="text-2xl leading-none text-center font-semibold text-slate-600 ">
        &mdash;
      </span>
    </nav>
  );
}
