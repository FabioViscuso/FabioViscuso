import Link from "next/link";
import { useRouter } from "next/router";

// import assets
import flagit from '../../public/icons/flag-it.png';
import flaguk from '../../public/icons/flag-gb.png';

// import translation function
import { useTranslation } from 'next-i18next';
import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
    const [isHamburgerMenuVisible, setIsHamburgerMenuVisible] = useState(false)
    function toggleHamburgerMenu() {
        setIsHamburgerMenuVisible(!isHamburgerMenuVisible)
    }

    const router = useRouter()
    const { t } = useTranslation()

    const onToggleLanguageClick = (newLocale: string) => {
        const { pathname, asPath, query } = router
        router.push({ pathname, query }, asPath, { locale: newLocale })
    }
    const changeTo = router.locale === 'en' ? 'it' : 'en'

    return (
        <>
            {/* Hamburger menu */}
            <div onClick={toggleHamburgerMenu} className="fixed top-4 right-4 flex md:hidden z-50 bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999] text-gray-800 font-semibold backdrop-blur-sm h-16 w-16 rounded-full transition-all">
                <div className="h-full w-full relative">
                    <div className="hamburger-btn"></div>
                </div>
            </div>
            {isHamburgerMenuVisible && <nav onClick={toggleHamburgerMenu} className="w-full fixed top-0 bottom-0 z-40 flex flex-col justify-center items-center gap-5 bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999] py-2 text-gray-800 font-semibold backdrop-blur-sm bg-opacity-50 transition-all">
                <button
                    onClick={(e: React.MouseEvent) => { e.stopPropagation(); return onToggleLanguageClick(changeTo) }}
                    title="language-switch"
                    className="flex justify-center items-center w-full text-xl text-center py-1 bg-slate-900 bg-opacity-30">
                    {router.locale === 'en' && <Image src={flagit} width={50} height={50} alt={''} />}
                    {router.locale === 'it' && <Image src={flaguk} width={50} height={50} alt={''} />}
                </button>
                {router.pathname !== '/' &&
                    <Link href='/'>
                        <a className="block w-full text-xl text-center py-4 bg-slate-900 bg-opacity-30">
                            Home
                        </a>
                    </Link>
                }
                {
                    router.pathname !== '/board' &&
                    <Link href='/board'>
                        <a className="block w-full text-xl text-center py-4 bg-slate-900 bg-opacity-30">
                            {t('header-postit-board')}
                        </a>
                    </Link>
                }
                {
                    router.pathname === '/board' &&
                    <Link href='/new-postit'>
                        <a className="block w-full text-xl text-center py-4 bg-slate-900 bg-opacity-30">
                            {t('header-add-postit')}
                        </a>
                    </Link>
                }
            </nav>}

            {/* Main nav layout */}
            <nav className="hidden fixed top-2 md:top-6 right-2 md:flex flex-col gap-5 justify-center md:justify-end z-50">
                {router.pathname !== '/' &&
                    <Link href='/'>
                        <button className="w-16 h-16 text-lg bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999] hover:from-[#2dd4bfdd] hover:to-[#34d399dd] px-2 py-2 rounded-full text-gray-800 font-semibold backdrop-blur-sm bg-opacity-50 transition-all">
                            🏠
                        </button>
                    </Link>
                }
                {
                    router.pathname !== '/board' &&
                    <Link href='/board'>
                        <button className="w-16 h-16 text-lg bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999] hover:from-[#2dd4bfdd] hover:to-[#34d399dd] px-2 py-2 rounded-full text-gray-800 font-semibold backdrop-blur-sm bg-opacity-50 transition-all">
                            📒
                        </button>
                    </Link>
                }
                {
                    router.pathname === '/board' &&
                    <Link href='/new-postit'>
                        <button className="w-16 h-16 text-lg bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999] hover:from-[#2dd4bfdd] hover:to-[#34d399dd] px-2 py-2 rounded-full text-gray-800 font-semibold backdrop-blur-sm bg-opacity-50 transition-all">
                            📒+
                        </button>
                    </Link>
                }
                <button onClick={() => onToggleLanguageClick(changeTo)} title="language-switch" className="flex justify-center items-center w-16 h-16 text-lg bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999] hover:from-[#2dd4bfdd] hover:to-[#34d399dd] px-2 py-2 rounded-full text-gray-800 font-semibold backdrop-blur-sm bg-opacity-50 transition-all">
                    {router.locale === 'en' && <Image src={flagit} width={30} height={30} alt={''} />}
                    {router.locale === 'it' && <Image src={flaguk} width={30} height={30} alt={''} />}
                </button>
            </nav>
        </>
    )
}
