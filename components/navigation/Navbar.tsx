// base imports
import { useRouter } from "next/router";
import React from "react";

// import assets
import NavigationButton from "./NavigationButton";

// import translation function
import { useTranslation } from "next-i18next";
import { LanguageSelector } from "./LanguageSelector";

export default function Navbar() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <nav className="fixed top-2 md:top-6 right-1 md:right-2 md:left-[unset] flex flex-col gap-5 justify-end z-50">
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
