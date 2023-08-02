import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
  alt: string;
  label: string;
  additionalCSS?: string | null;
}

export function SkillIcon({ src, alt, label, additionalCSS }: Props) {
  return (
    <div className="relative skills-icon">
      <Image
        src={src}
        alt={alt}
        className={`rounded-full h-14 w-14 drop-shadow-[0px_0px_3px_#aaa] hover:scale-110 transition-transform ${additionalCSS || ""}`}
      />
      <p className="skills-icon-popup bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999]  backdrop-blur-sm text-[#1c1c1c] text-lg rounded-md p-2">
        {label}
      </p>
    </div>
  );
}
