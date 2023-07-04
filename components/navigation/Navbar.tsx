// base imports
import { useRouter } from "next/router";
import React from "react";

// import assets
import NavigationButton from "./NavigationButton";

// import translation function
// import { useTranslation } from "next-i18next";
import { LanguageSelector } from "./LanguageSelector";

export default function Navbar({isOpen}) {
  const router = useRouter();
  // const { t } = useTranslation(); might revert or add text
  return (
    <nav
      className={
        `fixed z-50 -translate-y-1/2 top-[20%] md:top-1/2 lg:right-0 rounded-l-md py-2 bg-neutral-400 bg-opacity-40 backdrop-blur-sm ${isOpen ? " right-0 sm:right-0 " : " -right-14 " } flex flex-col gap-5 justify-end  transition-all`}
    >
      <span className="text-2xl leading-none text-center font-semibold text-slate-600 ">&mdash;</span>
      {router.pathname !== "/" && <NavigationButton slug="/" content="🏠" />}
      {router.pathname !== "/board" && (
        <NavigationButton slug="/board" content="📒" />
      )}
      {router.pathname === "/board" && (
        <NavigationButton slug="/new-postit" content="📒+" />
      )}
      <LanguageSelector />
      <span className="text-2xl leading-none text-center font-semibold text-slate-600 ">&mdash;</span>
    </nav>
  );
}
