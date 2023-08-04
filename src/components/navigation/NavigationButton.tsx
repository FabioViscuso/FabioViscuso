import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  slug: string;
  label: string;
  content: string | StaticImageData;
}

export default function NavigationButton({ slug, content, label }: Props) {
  return (
    <Link href={slug} className="group">
      <button
        className={`w-16 h-16 text-3xl font-semibold text-gray-800 hover:bg-gray-900 hover:text-gray-200 transition-all whitespace-nowrap`}
      >
        {typeof content === "string" ? (
          content
        ) : (
          <Image src={content} alt={`link to ${slug}`} />
        )}
      </button>
      <span className=" opacity-0 group-hover:opacity-100 transition-all duration-200 absolute left-0 group-hover:-left-2 top-[50%] -translate-y-1/2 -translate-x-full [text-orientation:upright] [writing-mode:vertical-lr] text-sm text-center pointer-events-none ">
        {label}
      </span>
    </Link>
  );
}
