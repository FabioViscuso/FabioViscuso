import { useRouter } from "next/router";

// import assets
import flagit from '../../public/icons/flag-it.png';
import flaguk from '../../public/icons/flag-gb.png';

// import translation function
import { useTranslation } from 'next-i18next';
import Image from "next/image";
import React, { useState } from "react";
import NavigationButton from "./NavigationButton";

export default function Navbar() {
    const [isHamburgerMenuVisible, setIsHamburgerMenuVisible] = useState(false)
    function toggleHamburgerMenu() {
        setIsHamburgerMenuVisible(!isHamburgerMenuVisible)
    }

    const router = useRouter();
    const { t } = useTranslation();

    const onToggleLanguageClick = (newLocale: string) => {
        const { pathname, asPath, query } = router;
        router.push({ pathname, query }, asPath, { locale: newLocale });
    }
    const changeTo = router.locale === 'en' ? 'it' : 'en';

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
                <button 
                    onClick={() => onToggleLanguageClick(changeTo)} 
                    title="language-switch" 
                    className="flex justify-center items-center w-16 h-16 p-4 text-lg bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999] hover:from-[#2dd4bfdd] hover:to-[#34d399dd] rounded-full text-gray-800 font-semibold backdrop-blur-sm bg-opacity-50 transition-all">
                    {router.locale === 'en' && <Image src={flagit} width={30} height={30} alt={''} />}
                    {router.locale === 'it' && <Image src={flaguk} width={30} height={30} alt={''} />}
                </button>
            </nav>
    )
}
