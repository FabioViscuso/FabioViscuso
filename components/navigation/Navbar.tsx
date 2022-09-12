import Link from "next/link";
import { useRouter } from "next/router";

// import translation function
import { useTranslation, Trans } from 'next-i18next';
import Image from "next/image";

export default function Navbar() {
    const router = useRouter()
    const { t } = useTranslation()

    const onToggleLanguageClick = (newLocale: string) => {
        const { pathname, asPath, query } = router
        router.push({ pathname, query }, asPath, { locale: newLocale })
    }
    const changeTo = router.locale === 'en' ? 'ita' : 'en'

    return (
        <nav className="fixed top-2 md:top-10 right-0 flex flex-col gap-5 justify-center md:justify-end z-50">
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
            <button onClick={() => onToggleLanguageClick(changeTo)} className="flex flex-col items-center w-24 text-lg bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999] hover:from-[#2dd4bfdd] hover:to-[#34d399dd] px-4 py-2 rounded-l-lg text-gray-800 font-semibold backdrop-blur-sm bg-opacity-50 transition-all">
                {t('change-locale')}
                {router.locale === 'en' && <Image src={'/icons/flag-it.png'} width={30} height={30} alt={''} />}
                {router.locale === 'ita' && <Image src={'/icons/flag-gb.png'} width={30} height={30} alt={''} />}
            </button>
        </nav>
    )
}
