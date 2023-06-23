// base imports
import { useRouter } from "next/router";
import React, { useState } from "react";

// import assets
import NavigationButton from "./NavigationButton";

// import translation function
import { useTranslation } from 'next-i18next';
import { LanguageSelector } from "./LanguageSelector";

export default function Navbar() {
    const [isHamburgerMenuVisible, setIsHamburgerMenuVisible] = useState(false)
    function toggleHamburgerMenu() {
        setIsHamburgerMenuVisible(!isHamburgerMenuVisible)
    }

    const router = useRouter();
    const { t } = useTranslation();

    return (
        <nav className="fixed top-2 md:top-6 right-0 md:right-2 left-0 md:left-[unset] flex md:flex-col gap-5 justify-center md:justify-end z-50">
                {/* <div onClick={toggleHamburgerMenu} className="fixed top-4 right-4 flex md:hidden z-50 bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999] text-gray-800 font-semibold backdrop-blur-sm h-16 w-16 rounded-full transition-all">
                    <div className="h-full w-full relative">
                        <div className="hamburger-btn"></div>
                    </div>
                </div> */}
                {/* Main nav layout */}
                {router.pathname !== '/' &&
                    <NavigationButton slug='/' content="🏠" />
                }
                {
                    router.pathname !== '/board' &&
                    <NavigationButton slug='/board' content="📒" />
                }
                {
                    router.pathname === '/board' &&
                    <NavigationButton slug='/new-postit' content="📒+" />
                }
                <LanguageSelector />
            </nav>
    )
}
