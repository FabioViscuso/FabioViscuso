import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
  alt: string;
  label: string;
  additionalCSS?: string | null;
}

export function IconSkill({ src, alt, label, additionalCSS }: Props) {
  return (
    <div className="relative skills-icon cursor-pointer">
      <Image
        src={src}
        alt={alt}
        className={`rounded-full h-14 w-14 ${additionalCSS || ""}`}
      />
      <p className="skills-icon-popup bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999]  backdrop-blur-sm text-[#1c1c1c] text-lg rounded-md p-2">
        {label}
      </p>
    </div>
  );
}
