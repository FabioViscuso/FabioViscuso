import Link from "next/link";
import { useRouter } from "next/router";

// import translation function
import { useTranslation, Trans } from 'next-i18next';
import Image from "next/image";
import { useState } from "react";

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
            <div onClick={toggleHamburgerMenu} className="h-20 fixed top-0 left-0 right-0 flex md:hidden z-50 bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999] text-gray-800 font-semibold backdrop-blur-sm bg-opacity-50 transition-all">
                <div className="h-full w-full relative">
                    <div className="hamburger-btn"></div>
                    <button onClick={() => onToggleLanguageClick(changeTo)} title="language-switch" className="flex flex-col justify-center items-center mr-5 text-lg absolute top-0 bottom-0 right-0">
                        {router.locale === 'en' && <Image src={'/icons/flag-it.png'} width={30} height={30} alt={''} />}
                        {router.locale === 'it' && <Image src={'/icons/flag-gb.png'} width={30} height={30} alt={''} />}
                    </button>
                </div>
            </div>
            {isHamburgerMenuVisible && <nav onClick={toggleHamburgerMenu} className="w-full fixed top-20 bottom-0 z-50 flex flex-col justify-center items-center gap-5 bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999] py-2 text-gray-800 font-semibold backdrop-blur-sm bg-opacity-50 transition-all">
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
            <nav className="hidden fixed top-2 md:top-10 right-0 md:flex flex-col gap-5 justify-center md:justify-end z-50">
                {router.pathname !== '/' &&
                    <Link href='/'>
                        <button className="w-24 text-lg bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999] hover:from-[#2dd4bfdd] hover:to-[#34d399dd] px-4 py-2 rounded-l-lg text-gray-800 font-semibold backdrop-blur-sm bg-opacity-50 transition-all">
                            Home
                        </button>
                    </Link>
                }
                {
                    router.pathname !== '/board' &&
                    <Link href='/board'>
                        <button className="w-24 text-lg bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999] hover:from-[#2dd4bfdd] hover:to-[#34d399dd] px-4 py-2 rounded-l-lg text-gray-800 font-semibold backdrop-blur-sm bg-opacity-50 transition-all">
                            {t('header-postit-board')}
                        </button>
                    </Link>
                }
                {
                    router.pathname === '/board' &&
                    <Link href='/new-postit'>
                        <button className="w-24 text-lg bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999] hover:from-[#2dd4bfdd] hover:to-[#34d399dd] px-4 py-2 rounded-l-lg text-gray-800 font-semibold backdrop-blur-sm bg-opacity-50 transition-all">
                            {t('header-add-postit')}
                        </button>
                    </Link>
                }
                <button onClick={() => onToggleLanguageClick(changeTo)} title="language-switch" className="flex flex-col items-center w-24 text-lg bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999] hover:from-[#2dd4bfdd] hover:to-[#34d399dd] px-4 py-2 rounded-l-lg text-gray-800 font-semibold backdrop-blur-sm bg-opacity-50 transition-all">
                    {router.locale === 'en' && <Image src={'/icons/flag-it.png'} width={30} height={30} alt={''} />}
                    {router.locale === 'it' && <Image src={'/icons/flag-gb.png'} width={30} height={30} alt={''} />}
                </button>
            </nav>
        </>
    )
}
