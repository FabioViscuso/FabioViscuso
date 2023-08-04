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

  return (
    <nav
      className={`fixed z-50 -translate-y-1/2 top-[30dvh] md:top-1/2 lg:right-0 rounded-l-md py-6 [backdrop-filter:blur(1px)] bg-gray-600 bg-opacity-70 ${
        isOpen ? " right-0 sm:right-0 " : " -right-14 "
      } transition-all`}
    >
      <div className="relative flex flex-col ">
        {pathname !== "/" && <NavigationButton slug="/" content="🏠" label="homepage" />}
        {pathname !== "/board" && (
          <NavigationButton slug="/board" content="📒" label="guestbook" />
        )}
        {pathname === "/board" && (
          <NavigationButton slug="/new-postit" content="📒+" label="add postit" />
        )}
      </div>
    </nav>
  );
}
