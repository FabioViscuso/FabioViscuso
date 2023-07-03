// base imports
import { useRouter } from "next/router";
import React from "react";

// import assets
import NavigationButton from "./NavigationButton";

// import translation function
// import { useTranslation } from "next-i18next";
import { LanguageSelector } from "./LanguageSelector";

export default function Navbar({isClosed}) {
  const router = useRouter();
  // const { t } = useTranslation(); might revert or add text
  const homeCSSConfig =
    "top-6 md:top-6 right-2 md:right-4 md:left-[unset] flex flex-col gap-5 justify-end lg:justify-end";
  const boardCSSConfig =
    "top-2 md:top-6 left-0 right-0 md:right-2 md:left-[unset] flex lg:flex-col gap-5 justify-center lg:justify-end";

  return (
    <nav
      className={
        `fixed z-50 ${router.pathname === "/" ? homeCSSConfig : boardCSSConfig} ${isClosed ? "-right-[3.5rem]" : "right-4" } transition-all`}
    >
      {/* Main nav layout */}
      {router.pathname !== "/" && <NavigationButton slug="/" content="🏠" />}
      {router.pathname !== "/board" && (
        <NavigationButton slug="/board" content="📒" />
      )}
      {router.pathname === "/board" && (
        <NavigationButton slug="/new-postit" content="📒+" />
      )}
      <LanguageSelector />
    </nav>
  );
}
