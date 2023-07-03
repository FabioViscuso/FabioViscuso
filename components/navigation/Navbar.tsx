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

  console.log(isOpen)
  return (
    <nav
      className={
        `fixed z-50 top-6 lg:right-10 ${isOpen ? " -right-12 " : " right-4 sm:right-4 " } flex flex-col gap-5 justify-end  transition-all`}
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
