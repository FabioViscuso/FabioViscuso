import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter()
    return (
        <nav className="fixed top-2 md:top-10 right-0 flex flex-col gap-5 justify-center md:justify-end z-50">
            {router.pathname !== '/' &&
                <Link href='/'>
                    <button className="w-24 text-lg bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999] px-4 py-2 rounded-l-lg text-gray-800 font-semibold  backdrop-blur-sm bg-opacity-50">
                        Home
                    </button>
                </Link>
            }
            {
                router.pathname !== '/board' &&
                <Link href='/board'>
                    <button className="w-24 text-lg bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999] px-4 py-2 rounded-l-lg text-gray-800 font-semibold  backdrop-blur-sm bg-opacity-50">
                        Go to my Post-it board!
                    </button>
                </Link>
            }
            {
                router.pathname === '/board' &&
                <Link href='/new-postit'>
                    <button className="w-24 text-lg bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999] px-4 py-2 rounded-l-lg text-gray-800 font-semibold">
                        Add post-it
                    </button>
                </Link>
            }
        </nav>
    )
}
