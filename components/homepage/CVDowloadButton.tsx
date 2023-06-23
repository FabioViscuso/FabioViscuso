import Image, { StaticImageData } from "next/image";

interface Props {
    src: StaticImageData,
    lang: string,
}

export function CVDownloadButton({src, lang}: Props) {
    return (
        <a
            href={`./CV_Fabio_Viscuso_${lang}.pdf`}
            download={`CV_Fabio_Viscuso_${lang}.pdf`}
            className='inline-block rounded-full icon-shadow transition-all'
        >
            <Image src={src} alt={`download ${lang} curriculum`} className='h-14 w-14'/>
        </a>
    )
}