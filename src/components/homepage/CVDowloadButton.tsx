import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
  lang: string;
}

export function CVDownloadButton({ src, lang }: Props) {
  return (
    <a
      href={`./CV_Fabio_Viscuso_${lang}.pdf`}
      download={`CV_Fabio_Viscuso_${lang}.pdf`}
      className="inline-block rounded-full drop-shadow-[0px_0px_1px_rgb(0,0,0)] hover:scale-110 transition-all"
    >
      <Image
        src={src}
        alt={`download ${lang} curriculum`}
        className="h-12 w-12"
      />
    </a>
  );
}
