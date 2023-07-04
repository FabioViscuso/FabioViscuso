import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  slug: string;
  content: string | StaticImageData;
}

export default function NavigationButton({ slug, content }: Props) {
  return (
    <Link href={slug}>
      <button className={`cursor-none w-16 h-16 text-3xl text-gray-800 hover:bg-slate-600 font-semibold bg-opacity-50 transition-all whitespace-nowrap`}>
        {typeof content === "string" ? (
          content
        ) : (
          <Image src={content} alt={`go to ${slug}`} />
        )}
      </button>
    </Link>
  );
}
