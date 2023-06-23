import Image, {StaticImageData} from "next/image";
import Link from "next/link";

interface Props {
    slug: string,
    content: string | StaticImageData
}

export default function NavigationButton({slug, content}: Props) {
    return(
        <Link href={slug}>
            <button className="w-16 h-16 p-4 text-lg bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999] hover:from-[#2dd4bfdd] hover:to-[#34d399dd] rounded-full text-gray-800 font-semibold backdrop-blur-sm bg-opacity-50 transition-all whitespace-nowrap">
                {typeof content === "string" ? content : <Image src={content} alt={`go to ${slug}`} />}
            </button>
        </Link>
    )
}