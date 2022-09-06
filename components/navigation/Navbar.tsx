import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed left-0 right-0 h-40 flex justify-end px-20">
            <Link href='/'>
                <button>Home</button>
            </Link>
            <Link href='/postits'>
                <button>See post-its</button>
            </Link>
            <Link href='/add-postit'>
                <button>Add post-it</button>
            </Link>
        </nav>
    )
}
