import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 md:right-0 flex flex-col gap-5 justify-center md:justify-end pr-20 pt-20">
            <Link href='/'>
                <button className="text-lg bg-gradient-to-bl from-teal-400 to-emerald-400 px-4 py-2 rounded-lg text-gray-50">Home</button>
            </Link>
            <Link href='/board'>
                <button className="text-lg bg-gradient-to-bl from-teal-400 to-emerald-400 px-4 py-2 rounded-lg text-gray-50">Post-it board</button>
            </Link>
            <Link href='/new-postit'>
                <button className="text-lg bg-gradient-to-bl from-teal-400 to-emerald-400 px-4 py-2 rounded-lg text-gray-50">Add post-it</button>
            </Link>
        </nav>
    )
}
