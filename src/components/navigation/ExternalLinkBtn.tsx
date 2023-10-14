import Image, { StaticImageData } from "next/image";

interface Props {
  slug: string;
  label: string;
  content: string | StaticImageData;
  cssOverrides?: string
}

export default function ExternalLinkBtn({ slug, content, label, cssOverrides }: Props) {
  return (
    <a href={slug} target="_blank" className="group">
      <button
        type="button"
        className={`w-16 h-16 text-3xl font-semibold text-gray-800 hover:bg-gray-900 hover:text-gray-200 transition-all whitespace-nowrap`}
      >
        {typeof content === "string" ? (
          content
        ) : (
          <Image src={content} alt={`link to ${slug}`} className={` w-10 h-10 mx-auto ${cssOverrides} `} />
        )}
      </button>
      <span className=" opacity-0 group-hover:opacity-100 transition-all duration-200 absolute left-0 group-hover:-left-2 top-[50%] -translate-y-1/2 -translate-x-full [text-orientation:upright] [writing-mode:vertical-lr] text-sm text-center pointer-events-none ">
        {label}
      </span>
    </a>
  );
}
