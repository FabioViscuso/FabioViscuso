import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter()
    return (
        <nav className="fixed top-0 left-0 right-0 md:left-auto  flex md:flex-col gap-5 justify-center md:justify-end z-50">
            {router.pathname !== '/' &&
                <Link href='/'>
                    <button className="text-lg bg-gradient-to-bl from-teal-400 to-emerald-400 px-4 py-2 rounded-lg text-gray-800 font-semibold">
                        Home
                    </button>
                </Link>
            }
            {
                router.pathname !== '/board' &&
                <Link href='/board'>
                    <button className="text-lg bg-gradient-to-bl from-teal-400 to-emerald-400 px-4 py-2 rounded-lg text-gray-800 font-semibold">
                        Go to my Post-it board!
                    </button>
                </Link>
            }
            {
                router.pathname === '/board' &&
                <Link href='/new-postit'>
                    <button className="text-lg bg-gradient-to-bl from-teal-400 to-emerald-400 px-4 py-2 rounded-lg text-gray-800 font-semibold">
                        Add post-it
                    </button>
                </Link>
            }
        </nav>
    )
}
